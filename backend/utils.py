from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv
import hashlib
import hmac
import os


def get_db_handle(db_name):
    load_dotenv(find_dotenv())
    client = MongoClient(os.environ['MongoConnectionString'])
    db_handle = client[db_name]

    return db_handle, client


def generate_salt() -> bytes:
    return os.urandom(32)


def encrypt(password, salt):
    return hash_new_password(password, salt)


def check_password(password: str, encryptedpassword: bytes, salt: bytes):
    return is_correct_password(salt, encryptedpassword, password)


def hash_new_password(password, salt: bytes):
    # Hash password using salt
    pw_hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 100000)
    return pw_hash


def is_correct_password(salt: bytes, pw_hash: bytes, password: str) -> bool:
    # Check whether password matches using hashed password and salt used
    return hmac.compare_digest(
        pw_hash,
        hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 100000)
    )