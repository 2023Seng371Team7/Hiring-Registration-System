import unittest
from django.test import Client
from rest_framework import status
from unittest.mock import Mock, patch


# Create your tests here.
class ManagerViewsTestCase(unittest.TestCase):
    def setUp(self):
        self.client = Client()

    @patch('pymongo.collection.Collection.insert_one')
    def test_get_managerupdate(self, mock_db):
        """GET request to insert manager user."""
        mock_db.return_value = DB_return_mock()
        response = self.client.get('/api/managerupdate?username=testuser1&password=1234')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    @patch('pymongo.collection.Collection.delete_one')
    @patch('pymongo.collection.Collection.find_one')
    def test_delete_managerupdate(self, mock_db_delete, mock_db_find):
        """DELETE manager user"""
        mock_db_delete.return_value = DB_return_mock()
        mock_db_find.return_value = not None
        response = self.client.delete('/api/managerupdate?username=testuser1')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        mock_db_delete.assert_called_once_with({'username': 'testuser1'})
        mock_db_find.assert_called_once_with({'username': 'testuser1'})


class DB_return_mock():
    def __init__(self):
        self.acknowledged = True
