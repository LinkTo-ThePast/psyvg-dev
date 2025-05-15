from json import load
import os
from threading import local
from dotenv import load_dotenv
from serpapi import search

load_dotenv()


api_key = os.getenv("SERPAPI_KEY")

def get_jobs_from_google(key_word, max_tokens=2):

    params = {
        "engine": "google_jobs",
        "q": f"{key_word}, mexico",
        "hl": "es",
        "api_key": api_key
    }

    jobs = get_jobs_helper(params, 0, "", max_tokens)
    


    return jobs

def get_jobs_helper(params, count, next_token, max_tokens):

    local_params = params.copy()

    local_params["next_page_token"] = next_token

    search_res = search(local_params)

    print("Count: ", count)
    # print("SEARCH RES: ", search_res)

    jobs = search_res.get("jobs_results", [])
    next_token = search_res.get("serpapi_pagination", {}).get("next_page_token", None)

    print("JOBS: ", len(jobs))

    if not next_token or count >= max_tokens:
        print("TYPE OF JOBS: ", type(jobs))
        return jobs

    
    
    else:

        return jobs + get_jobs_helper(params, count + 1, next_token, max_tokens)