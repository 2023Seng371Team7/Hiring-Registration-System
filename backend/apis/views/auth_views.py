from apis import models
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from utils import get_db_handle, generate_salt, check_password, encrypt
import json

'''
GET
Pass username and password as GET parameters to authenticate a user. If successful,
returns 200 with username and role.
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


'''
POST
Pass username and password as GET parameters to register a new applicant user. If successful,
returns 200 with username and role.
'''


@api_view(['POST'])
def user_signup(request):
    username = request.GET['username']
    password = request.GET['password']

    db, _ = get_db_handle("HRS")
    collection = db['credentials']

    # Generate salt
    salt = generate_salt()
    hashed_password = encrypt(password, salt)

    #Create id
    total_users_in_db = collection.count_documents()
    user_id = str(total_users_in_db + 1)

    # Add username & password to DB
    newApplicant = models.User(user_id, username, "Applicant", salt, hashed_password)
    newManagerDBItem = {
        "user_id": newApplicant.user_id,
        "username": newApplicant.username,
        "role": newApplicant.role,
        "salt": newApplicant.salt,
        "hash": newApplicant.hashed_password,
    }
    result = collection.insert_one(newManagerDBItem)
    if result.acknowledged:
        return Response(json.dumps({key: newManagerDBItem[key] for key in ["username", "role"]}), status=status.HTTP_200_OK)
    return Response('Insertion failed', status=status.HTTP_500_INTERNAL_SERVER_ERROR)