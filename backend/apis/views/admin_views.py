# create a job view endpoint using django rest framework
# create get and post methods for the job view endpoint
# create using similiar structure of auth_views.py and manager_views.py
# follow job model from models.py

import ast
import json
from apis import models
from utils import get_db_handle
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class Admin(APIView):
    # GET
    # Create method to get all users and their roles using a user model array through GET API request  based on model User.
    def get(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['credentials']
        users = collection.find()
        user_list = []
        for user in users:
            user_list.append(json.dumps({key: user[key] for key in [
                "username", "role"]}))
        return Response(user_list, status=status.HTTP_200_OK)

    # PUT
    # Create method to update job using a job model array through PUT API request  based on model JobListings.
    def put(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['credentials']
        data = ast.literal_eval(json.dumps(request.data))
        job = collection.update_one(
            {"username": request.data['username']}, {"$set": data})
        if job.acknowledged:
            return Response(request.data, status=status.HTTP_200_OK)
        return Response("Unsuccessful Update", status=status.HTTP_404_NOT_FOUND)

    # DELETE
    # Create method to delete job using a job model array through DELETE API request  based on model JobListings.
    def delete(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['credentials']
        user = collection.delete_one({"id": request.data['username']})
        if user.acknowledged:
            return Response("User Deleted", status=status.HTTP_200_OK)
        return Response("Unsuccessful Deletion", status=status.HTTP_404_NOT_FOUND)
