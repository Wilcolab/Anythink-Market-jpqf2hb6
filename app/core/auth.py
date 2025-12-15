"""
Authentication and authorization utilities
"""
from datetime import datetime, timedelta
from typing import Optional
from jose import JWTError, jwt
from passlib.context import CryptContext
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from config import settings

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

# JWT configuration
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 24 hours


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a password against its hash"""
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    """Hash a password"""
    return pwd_context.hash(password)


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    """
    Create a JWT access token
    
    TODO: Implement refresh token mechanism
    TODO: Add token revocation/blacklist support
    TODO: Include user permissions in token claims
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.secret_key, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: str = Depends(oauth2_scheme)):
    """
    Dependency to get current authenticated user
    
    TODO: Implement actual user lookup from database
    TODO: Add role-based access control (RBAC)
    TODO: Implement permission checking for meeting access
    TODO: Add rate limiting per user
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    try:
        payload = jwt.decode(token, settings.secret_key, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
        # TODO: Fetch user from database
        return {"user_id": user_id}
    except JWTError:
        raise credentials_exception


def check_permission(user: dict, resource: str, action: str) -> bool:
    """
    Check if user has permission to perform action on resource
    
    TODO: Implement comprehensive permission system
    TODO: Support for:
    - Meeting summary access (only authorized participants)
    - Action item management
    - Dashboard viewing by role (Sales, PM, Customer Success)
    TODO: Integration with SparkFleet's existing permission schema
    """
    # Placeholder implementation
    return True


# TODO: Implement SSO integration if required by SparkFleet
# TODO: Add multi-factor authentication (MFA) support
# TODO: Implement session management and concurrent session limits
