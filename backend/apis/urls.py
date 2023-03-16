from django.urls import include, path
from apis.views.auth_views import user_authenticate
from apis.views.manager_views import ManagerUpdate
from backend.apis.models import JobListing
from apis.views.user_views import applications, relevantpostings

urlpatterns = [
    path("managerupdate", ManagerUpdate.as_view()),
    path("login", user_authenticate),
    path("joblisting", JobListing.as_view()),
    path('applications', applications),
    path('relevantpostings', relevantpostings),
]
