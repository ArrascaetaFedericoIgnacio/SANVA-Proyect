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
    user_takes : Optional[list]
    user_drugs : Optional[list]
    user_diseases : Optional[list]
    user_allergies : Optional[list]
    user_supplies : Optional[list]
    user_services : Optional[list]

    class Config:
        allow_mutation = True

class Login(BaseModel):
    username : str
    password : str

class Take(BaseModel):
    id : Optional[str]
    type : str
    systolicValue : Optional[int]
    diastolicValue : Optional[int]
    glucoseValue : Optional[int]
    hearthFrequencyValue : Optional[int]
    date : str
    user_id : str
    comments : Optional[str]

class Drug(BaseModel):
    id : Optional[str]
    name : str
    type : str
    doseAmount : int
    doseFrequency : str
    firstDoseHour : str
    dosingDays : int
    inventory : int
    reminder : bool
    lackOfInventoryAlert : bool
    user_id : str

class Disease(BaseModel):
    id : Optional[str]
    name : str
    medicName : str
    drugName : str
    treatment : str
    nextDate : str
    alertForDate : bool
    comments : Optional[str]
    user_id : str

class Allergie(BaseModel):
    id : Optional[str]
    allergieName : str
    vaccine : str
    inventory : int
    vaccineFrequency : str
    vaccineReminder : bool
    comments : Optional[str]
    user_id : str

class Supply(BaseModel):
    id : Optional[str]
    name : str
    type : str
    stock : int
    supplyPerDay : int
    daysOfUse : str
    provider : str
    comments : Optional[str]
    user_id : str

class Service(BaseModel):
    id : Optional[str]
    name : str
    provider : str
    comments : Optional[str]
    user_id : str