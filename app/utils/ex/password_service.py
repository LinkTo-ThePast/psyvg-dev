import bcrypt
import random
import string


def hash_password(password: str) -> str:
    salt = bcrypt.gensalt(rounds=10)
    if not password:
        return None

    return bcrypt.hashpw(password.encode(), salt).decode()

def compare_passwords(password: str, hashed_password: str) -> bool:
    if not password or not hashed_password:
        return False

    return bcrypt.checkpw(password.encode(), hashed_password.encode())


def create_password() -> str:
    allowed_chars = string.ascii_letters + string.digits + "!@#$%^&*()"
    return ''.join(random.choice(allowed_chars) for _ in range(10))