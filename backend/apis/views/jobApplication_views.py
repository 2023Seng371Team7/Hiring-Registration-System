import ast
import json
from marshal import dumps
from apis import models
from utils import get_db_handle
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class JobApplication(APIView):
    # GET
    def get(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['JobApplications']
        JobApplications = collection.find({"job_id": request.GET['job_id']})
        job_application_list = []
        for job_application in JobApplications:
            job_application_list.append(json.dumps({key: job_application[key] for key in [
                "application_id", "job_id", "applicant_name", "date_applied", "applicant_status", "applicant_email", "applicant_education", "applicant_experience"]}))
        return Response(job_application_list, status=status.HTTP_200_OK)

    # POST
    def post(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['JobApplications']
        data = ast.literal_eval(json.dumps(request.data))
        JobApplication = collection.insert_one(data)
        if JobApplication.acknowledged:
            return Response(request.data, status=status.HTTP_200_OK)
        return Response('Creation of Job Application Was Not Possible', status=status.HTTP_404_NOT_FOUND)
