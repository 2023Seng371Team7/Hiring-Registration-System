import unittest
from django.test import Client
from rest_framework import status
from unittest.mock import Mock, patch


# Helper method
def fake_user(password: str, salt: str) -> dict:
    fake_hash = str(hash(password + salt))
    return {"hash": fake_hash, "salt": salt}


# Create your tests here.
class AuthViewsTestCase(unittest.TestCase):
    def setUp(self):
        self.client = Client()

    @patch('pymongo.collection.Collection.find_one')
    def test_auth_success(self, mock_user_to_find):
        """
        Testing a successful authentication
        """
        mock_user_to_find.return_value = fake_user(password='1234', salt='salt')
        response = self.client.get('/api/login?username=testuser1&password=1234')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    @patch('pymongo.collection.Collection.find_one')
    def test_auth_failure(self, mock_user_to_find):
        """
        Testing a failed authentication
        """
        mock_user_to_find.return_value = fake_user(password='12345', salt='salt')
        response = self.client.get('/api/login?username=testuser1&password=1234')
        self.assertEqual(response.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR)

