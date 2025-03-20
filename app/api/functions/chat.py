from pydantic import BaseModel

class ChatRequest(BaseModel):
    body: str
    from_webapp: bool
    
    class Config:
        extra = "allow"