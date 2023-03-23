from django.urls import include, path
from apis.views.auth_views import user_authenticate
from apis.views.manager_views import ManagerUpdate
from apis.views.user_views import applications, relevantpostings
from apis.views.job_views import Job
from apis.views.jobApplication_views import JobApplication
from apis.views.updateApplication_views import UpdateApplication
from apis.views.jobListings_views import JobListings

urlpatterns = [
    path("managerupdate", ManagerUpdate.as_view()),
    path("login", user_authenticate),
    path("joblisting", JobListings.as_view()),
    path("job", Job.as_view()),
    path('jobApplications', JobApplication.as_view()),
    path('updateApplication', UpdateApplication.as_view()),
    path('applications', applications),
    path('relevantpostings', relevantpostings),
]
