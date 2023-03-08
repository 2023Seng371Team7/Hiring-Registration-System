from apis import models
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from utils import get_db_handle, generate_salt, encrypt


# Create your views here.
class ManagerUpdate(APIView):
    """
    GET
    Send username and password through API request to add a new Manager user.
    """

    def get(self, request):
        # Get the new username and password from request
        username: str = request.GET['username']
        password: str = request.GET['password']

        # Generate salt
        salt = generate_salt()
        hashed_password = encrypt(password, salt)

        # Add username & password to DB
        newManager = models.User(username, "HRManager", salt, hashed_password)
        newManagerDBItem = {
            "username": newManager.username,
            "role": newManager.role,
            "salt": newManager.salt,
            "hash": newManager.hashed_password,
        }
        db, _ = get_db_handle("HRS")
        collection = db['credentials']
        result = collection.insert_one(newManagerDBItem)
        if result.acknowledged:
            return Response('', status=status.HTTP_200_OK)
        return Response('Insertion failed', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    """
    DELETE
    Delete a manager user from database
    """

    def delete(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['credentials']

        # Check if manager user is present in DB
        # If yes, delete user in DB, return 200 Response, else return 500 Response
        username = request.GET['username']
        result = collection.find_one({"username": username})
        if result is not None:
            collection.delete_one({"username": username})
            return Response('', status=status.HTTP_200_OK)
        else:
            return Response('Unable to find user', status=status.HTTP_500_INTERNAL_SERVER_ERROR)


