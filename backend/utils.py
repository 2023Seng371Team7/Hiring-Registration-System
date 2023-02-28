from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv
import os


def get_db_handle(db_name):
    load_dotenv(find_dotenv())
    client = MongoClient(os.environ['MongoConnectionString'])
    db_handle = client[db_name]

    return db_handle, client


def generate_salt():
    return str(os.urandom(32))


