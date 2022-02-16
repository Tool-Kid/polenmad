import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { createWriteStream } from 'fs';
import { PythonShell } from 'python-shell';
import { PollenCategoryType } from './data';
import { getPythonFilePath } from '../utils';

@Injectable()
export class PollenCollectorService {
  private readonly logger = new Logger(PollenCollectorService.name);
  private readonly baseUrl =
    'https://www.comunidad.madrid/sites/default/files/doc/sanidad/pole/dia/$.pdf';
  private readonly tmpPath = './tmp/collector';

  constructor(private readonly http: HttpService) {}

  async getPollenDataForPollenCategory(
    category: PollenCategoryType
  ): Promise<any[]> {
    const fileURL = this.baseUrl.replace('$', category);
    const pdfResponse = await this.http.axiosRef({
      url: fileURL,
      method: 'GET',
      responseType: 'stream',
    });

    const writer = createWriteStream(`./${this.tmpPath}/${category}.pdf`);
    await pdfResponse.data.pipe(writer);
    this.logger.log(`✅ File ${fileURL} downloaded successfully`);

    return new Promise((resolve, reject) => {
      PythonShell.run(
        getPythonFilePath('pollen-collector/pollen_pdf_processor.py'),
        { pythonPath: 'python3', args: [category] },
        (err, result) => {
          if (err) {
            reject(err);
          }
          this.logger.log(
            `✅ Data extraction from file ${fileURL} completed succesfully`
          );
          resolve(JSON.parse(result[0]));
        }
      );
    });
  }
}
