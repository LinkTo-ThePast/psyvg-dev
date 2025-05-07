

import os
from dotenv import load_dotenv
import requests


load_dotenv()


cp_api_url = os.getenv("CP_API_URL") 

def get_location_from_cp(cp:str):


    response = requests.post(cp_api_url, json={"cp": cp})

    if response.status_code != 200:
        return {"city": "", "state": ""}
    
    cp_data = response.json()

    return {"city": cp_data["city"], "state": cp_data["state"]}

