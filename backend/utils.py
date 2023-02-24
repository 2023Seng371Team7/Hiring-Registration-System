from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv
import os


def get_db_handle(db_name):
    #client = MongoClient('mongodb+srv://Developer:seng371@hrscluster.1wbzyii.mongodb.net/test')
    load_dotenv(find_dotenv())
    client = MongoClient(os.environ['MongoConnectionString'])
    db_handle = client[db_name]

    return db_handle, client


