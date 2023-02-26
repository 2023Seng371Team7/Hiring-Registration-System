# tests/factories.py
from factory import DjangoModelFactory, Faker

from backend.apis.models import User


class UserFactory(DjangoModelFactory):
    username = Faker('username')
    password = Faker('password')

    class Meta:
        model = User
