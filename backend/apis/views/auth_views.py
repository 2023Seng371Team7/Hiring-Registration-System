from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from utils import get_db_handle, check_password
import json

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
        return Response('Unable to find user', status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    hash_from_db = user_to_find['hash']
    salt_from_db = user_to_find['salt']

    if check_password(password, hash_from_db, salt_from_db):
        return Response(json.dumps({key: user_to_find[key] for key in ["username", "role"]}), status=status.HTTP_200_OK)
    return Response('Wrong username or password', status=status.HTTP_500_INTERNAL_SERVER_ERROR)


