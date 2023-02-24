from django.test import TestCase
import unittest
from utils import get_db_handle


# Create your tests here.
class MongoTests(unittest.TestCase):
    def test_WriteToTestDatabase(self) -> None:
        db, _ = get_db_handle("HRStest")

        testCollection = db['TestCollection']
        testItem = {
            "tid": "1",
            "Name": "admin",
            "password": "newadmin"
        }
        testCollection.insert_one(testItem)
        dbItem = testCollection.find_one({"tid": "1"})
        self.assertDictEqual(testItem, dbItem)

    def tearDown(self) -> None:
        db, _ = get_db_handle("HRStest")
        testCollection = db['TestCollection']
        testCollection.delete_one({"tid": "1"})

