from django.db import models


# Create your models here.
class User:
    role: str
    username: str
    salt: bytes
    hashed_password: bytes

    def __init__(self, username, role, salt, hashed_password):
        self.username = username
        self.role = role
        self.salt = salt
        self.hashed_password = hashed_password

# create model for job listing


class JobListing:
    id: int
    title: str
    description: str
    location: str
    salary: str
    company: str
    date_posted: str
    url: str

    def __init__(self, id, title, description, location, salary, company, date_posted, url):
        self.id = id
        self.title = title
        self.description = description
        self.location = location
        self.salary = salary
        self.company = company
        self.date_posted = date_posted
        self.url = url
