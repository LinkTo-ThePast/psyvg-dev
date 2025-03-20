from pydantic import BaseModel
from typing import List, Optional

class CompanyRequest(BaseModel):
    name: str
    rfc: str
    industry: str
    size: str
    logo: str
    website: str
    state: str
    city: str

    class Config:
        extra = "allow"

class UpdateCompanyRequest(BaseModel):
    name: Optional[str] = None
    rfc: Optional[str] = None
    industry: Optional[str] = None
    size: Optional[str] = None
    logo: Optional[str] = None
    website: Optional[str] = None
    state: Optional[str] = None
    city: Optional[str] = None

    class Config:
        extra = "allow"

class UpdateCompanyLogoRequest(BaseModel):
    logo: str

    class Config:
        extra = "allow"