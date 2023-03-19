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


class Job(APIView):
    # GET
    # Create method to Send all jobs using a job model array through GET API request  based on model JobListings.
    def get(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['job_listings']
        job = collection.find({"id": request.GET['id']})
        if job is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(json.dumps({key: job[0][key] for key in [
            "id", "title", "description", "location", "salary", "company", "date_posted", "url"]}), status=status.HTTP_200_OK)

    # POST
    # Create method to create job using a job model array through POST API request  based on model JobListings.

    def post(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['job_listings']
        # create a joblisting object from the request data
        # joblisting = models.JobListing(request.data)
        data = ast.literal_eval(json.dumps(request.data))
        job = collection.insert_one(data)
        if job.acknowledged:
            return Response(request.data, status=status.HTTP_200_OK)
        return Response('Creation of Job Listing Was Not Possible', status=status.HTTP_404_NOT_FOUND)

    # PUT
    # Create method to update job using a job model array through PUT API request  based on model JobListings.
    def put(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['job_listings']
        job = collection.update_one(
            {"id": request.data['id']}, {"$set": request.data})
        return Response(job, status=status.HTTP_200_OK)

    # DELETE
    # Create method to delete job using a job model array through DELETE API request  based on model JobListings.
    def delete(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['job_listings']
        job = collection.delete_one({"id": request.data['id']})
        return Response(job, status=status.HTTP_200_OK)
