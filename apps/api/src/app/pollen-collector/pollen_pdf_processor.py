import os
import sys
import camelot
import json
import requests

base_url = 'https://www.comunidad.madrid/sites/default/files/doc/sanidad/pole/dia/$.pdf'

pollen_category = str(sys.argv[1])
pdf_url = base_url.replace('$', pollen_category)
response = requests.get(pdf_url)
pdf_path = f'{pollen_category}.pdf'
with open(pdf_path, 'wb') as f:
    f.write(response.content)
    f.close()
    pdf = camelot.read_pdf(pdf_path)
    print(json.dumps(pdf[3].data))
    os.remove(pdf_path)
