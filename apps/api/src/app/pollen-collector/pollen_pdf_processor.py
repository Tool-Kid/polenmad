import sys
import camelot
import json
import os
pollen_type = str(sys.argv[1])
pdf = camelot.read_pdf(f'./tmp/collector/{pollen_type}.pdf')
print(json.dumps(pdf[3].data))
