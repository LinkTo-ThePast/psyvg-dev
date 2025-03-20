from pydantic import BaseModel

class EducationRequest(BaseModel):
    institution_name: str
    degree: str
    field_of_study: str
    start_date: str
    end_date: str
    currently_studying: bool
    
    class Config:
        extra = "allow"