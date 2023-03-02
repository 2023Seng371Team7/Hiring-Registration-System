from django.db import models


# Create your models here.
class User:
    role: str
    username: str
    salt: str
    hashed_password: str

    def __init__(self, username, role, salt, hashed_password):
        self.username = username
        self.role = role
        self.salt = salt
        self.hashed_password = hashed_password
