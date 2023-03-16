# create a job view endpoint using django rest framework
# create get and post methods for the job view endpoint
# create using similiar structure of auth_views.py and manager_views.py
# follow job model from models.py

from backend.apis import models
from backend.utils import get_db_handle
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class JobListings(APIView):
    # GET
    # Create method to Send all jobs using a job model array through GET API request  based on model JobListings.
    def get(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['job_listings']
        jobs = collection.find()
        job_list = []
        for job in jobs:
            job_list.append(models.JobListing(job['id'], job['title'], job['description'],
                            job['location'], job['salary'], job['company'], job['date_posted'], job['url']))
        return Response(job_list, status=status.HTTP_200_OK)
