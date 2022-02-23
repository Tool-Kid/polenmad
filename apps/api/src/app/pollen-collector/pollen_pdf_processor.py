import os
import sys
import camelot
import json
import urllib.request

base_url = 'https://www.comunidad.madrid/sites/default/files/doc/sanidad/pole/dia/$.pdf'

def handler(event, context):
  pollen_category = event['category']
  pdf_url = base_url.replace('$', pollen_category)
  response = urllib.request.urlopen(pdf_url)
  pdf_path = f'/tmp/{pollen_category}.pdf'
  with open(pdf_path, 'wb') as f:
    f.write(response.content)
    f.close()
    pdf = camelot.read_pdf(pollen_category)
    print(json.dumps(pdf[3].data))
    os.remove(pdf_path)
