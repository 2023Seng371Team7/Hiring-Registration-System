import bson
from django.shortcuts import render
from . import models
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from utils import get_db_handle, generate_salt
import os


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
        saltyPassword = password + salt
        hashed_password = str(hash(saltyPassword))

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
        return Response('', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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
            return Response('', status=status.HTTP_500_INTERNAL_SERVER_ERROR)


'''
GET
Pass username and password as GET parameters to authenticate a user. If successful,
returns 200 with user model.
'''


@api_view(['GET'])
def user_authenticate(request):
    username = request.GET['username']
    password = request.GET['password']

    db, _ = get_db_handle("HRS")
    collection = db['credentials']

    user_to_find = collection.find_one({"username": username})
    if user_to_find is None:
        return Response('', status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    hash_from_db = user_to_find['hash']

    recreated_hash = str(hash(password + user_to_find['salt']))
    print("recreated_hash = " + str(recreated_hash) + " , from DB = " + str(hash_from_db))
    if recreated_hash == hash_from_db:
        return Response('', status=status.HTTP_200_OK)
    return Response({"Recreated_hash": str(recreated_hash), "Hash_DB": str(hash_from_db)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
