from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    id : Optional[str]
    username : str
    password : str
    email : str
    birthdate : str
    gender : str
    height : str
    weight : str

class Login(BaseModel):
    username : str
    password : str

class Intake(BaseModel):
    id : Optional[str]
    type : str
    stock : str
    input_per_day : str
    period_of_use : str
    provider : str
    comments : Optional[str]

class Drugs(BaseModel):
    id : Optional[str]

class Diseases(BaseModel):
    id : Optional[str]

class Allergies(BaseModel):
    id : Optional[str]