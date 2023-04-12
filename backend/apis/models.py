from django.db import models


# Create your models here.
class User:
    user_id: str
    role: str
    username: str
    salt: bytes
    hashed_password: bytes

    def __init__(self, user_id, username, role, salt, hashed_password):
        self.user_id = user_id
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
    start_date: str
    job_type: str
    url: str

    def __init__(self, id, title, description, location, salary, company, date_posted, url, start_date, job_type):
        self.id = id
        self.title = title
        self.description = description
        self.location = location
        self.salary = salary
        self.company = company
        self.date_posted = date_posted
        self.start_date = start_date
        self.job_type = job_type
        self.url = url

# create model for job application that has a field for rejected or accepted and a field for applicants as a list and fields such as job id, applicant name and email and education and experience


class JobApplication:
    application_id: int
    job_id: int
    applicant_name: str
    applicant_email: str
    applicant_education: str
    applicant_experience: str
    applicant_status: str
    date_applied: str

    def __init__(self, application_id, job_id, applicant_name, applicant_email, applicant_education, applicant_experience, applicant_status, date_applied):
        self.application_id = application_id
        self.job_id = job_id
        self.applicant_name = applicant_name
        self.applicant_email = applicant_email
        self.applicant_education = applicant_education
        self.applicant_experience = applicant_experience
        self.applicant_status = applicant_status
        self.date_applied = date_applied
