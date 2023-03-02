from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from utils import get_db_handle

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
    if recreated_hash == hash_from_db:
        return Response('', status=status.HTTP_200_OK)
    return Response('', status=status.HTTP_500_INTERNAL_SERVER_ERROR)
