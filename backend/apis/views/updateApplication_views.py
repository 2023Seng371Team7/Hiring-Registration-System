import ast
import json
from marshal import dumps
from apis import models
from utils import get_db_handle
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class UpdateApplication(APIView):
    # GET
    def get(self, request):
        db, _ = get_db_handle("HRS")
        collection = db['JobApplications']
        update = collection.update_one(
            {"application_id": request.GET['applicant_id']}, {"$set": {"applicant_status": request.GET['applicant_status']}})
        if update.acknowledged:
            return Response("Successfully Update", status=status.HTTP_200_OK)
        return Response("Unsuccessful Update", status=status.HTTP_404_NOT_FOUND)
