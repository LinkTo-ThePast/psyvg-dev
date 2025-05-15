


import urllib

import requests
from app.services.s3_service import generate_presigned_url_get


async def apply_sukarne(job_id, name, email, phone, user_id):
    cover_letter = "Aplicante interesado en la vacante"

    presigned_url = await generate_presigned_url_get("cv/" + user_id + ".pdf")

    if not presigned_url:
        raise Exception("Error generating presigned URL for CV")
    
    
    s3_response = requests.get(presigned_url, stream=True)
    if s3_response.status_code != 200:
        raise Exception("Error downloading CV from S3")
    
    
    parsed_url = urllib.parse.urlparse(presigned_url)
    file_name = urllib.parse.unquote(parsed_url.path.split("/")[-1])

    s3_response.raw.decode_content = True

    files = {
        'awsm_file': (file_name, s3_response.raw)
    }

    body = {
        'awsm_applicant_name': name,
        'awsm_applicant_email': email,
        'awsm_applicant_phone': phone,
        'awsm_applicant_letter': cover_letter,
        'awsm_form_privacy_policy': 'yes',
        'awsm_job_id': job_id,
        'action': 'awsm_applicant_form_submission',
    }

    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
    }
    response = requests.post(
        "https://www.sukarne.com/wp-admin/admin-ajax.php",
        data=body,
        headers=headers,
        files=files,
    )

    if response.status_code == 200:
        return True
    else:
        raise Exception("Error submitting application to Sukarne")

    




