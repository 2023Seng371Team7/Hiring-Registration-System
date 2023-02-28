from django.urls import include, path
from . import views

urlpatterns = [
    path("managerupdate", views.ManagerUpdate.as_view()),
    path("login", views.user_authenticate),
]