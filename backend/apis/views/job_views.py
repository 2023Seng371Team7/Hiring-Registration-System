# create a job view endpoint using django rest framework
# create get and post methods for the job view endpoint
# create using similiar structure of auth_views.py and manager_views.py
# follow job model from models.py

from apis import models
from utils import get_db_handle
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class Job(APIView):
    # GET
    # Create method to Send all jobs using a job model array through GET API request  based on model JobListings.
   # GET
    # Gets a specific job based on the id of the job
    def get(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['job_listings']
        jobs = collection.find()
        for job in jobs:
            if job['id'] == request.data['id']:
                return Response(job, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
