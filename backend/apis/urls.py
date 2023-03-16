from django.urls import include, path
from apis.views.auth_views import user_authenticate
from apis.views.manager_views import ManagerUpdate
from apis.views.user_views import applications, relevantpostings
from apis.views.jobs_views import JobListings

urlpatterns = [
    path("managerupdate", ManagerUpdate.as_view()),
    path("login", user_authenticate),
    path("joblisting", JobListings.as_view()),
    path('applications', applications),
    path('relevantpostings', relevantpostings),
]
