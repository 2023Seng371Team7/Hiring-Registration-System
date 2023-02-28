from django.urls import include, path
from apis.views.auth_views import user_authenticate
from apis.views.manager_views import ManagerUpdate

urlpatterns = [
    path("managerupdate", ManagerUpdate.as_view()),
    path("login", user_authenticate),
]