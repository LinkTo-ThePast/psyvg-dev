import secrets
import string
import bcrypt

def generate_api_key(length=32):
    """Generate a secure API key with specified length."""
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def hash_api_key(api_key):
    """Hash an API key securely for storage using bcrypt."""
    # Convert string to bytes for bcrypt
    api_key_bytes = api_key.encode('utf-8')
    # Generate salt and hash the API key
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(api_key_bytes, salt)
    # Return the hash as a string (decoded from bytes)
    return hashed.decode('utf-8')

def verify_api_key(api_key, hashed_api_key):
    """Verify if an API key matches its hashed version."""
    api_key_bytes = api_key.encode('utf-8')
    hashed_bytes = hashed_api_key.encode('utf-8')
    return bcrypt.checkpw(api_key_bytes, hashed_bytes)