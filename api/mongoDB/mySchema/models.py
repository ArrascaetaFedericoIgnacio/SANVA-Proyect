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

class Take(BaseModel):
    id : Optional[str]
    type : str
    stock : str
    inputPerDay : str
    periodOfUse : str
    provider : str
    user_id : str
    comments : Optional[str]

class Drug(BaseModel):
    id : Optional[str]
    name : str
    type : str
    doseAmount : str
    doseFrequency : str
    firstDoseHour : str
    dosingDays : int
    inventory : int
    reminder : bool
    lackOfInventoryAlert : bool

class Disease(BaseModel):
    id : Optional[str]
    name : str
    medicName : str
    treatment : str
    nextDate : str
    alertForDate : bool
    comments : Optional[str]


class Allergie(BaseModel):
    id : Optional[str]
    allergieName : str
    vaccine : str
    inventory : int
    vaccineFrequency : str
    vaccineReminder : bool
    comments : Optional[str]