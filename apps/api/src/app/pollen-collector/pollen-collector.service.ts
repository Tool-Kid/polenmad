import { Injectable, Logger } from '@nestjs/common';
import { PythonShell } from 'python-shell';

import { PollenCategoryType } from './data';
import { getPythonFilePath } from '../utils';

@Injectable()
export class PollenCollectorService {
  private readonly logger = new Logger(PollenCollectorService.name);

  constructor() {}

  async getPollenDataForPollenCategory(
    category: PollenCategoryType
  ): Promise<any[]> {
    return new Promise((resolve, reject) => {
      console.log(
        getPythonFilePath(
          `${__dirname}/pollen-collector/pollen_pdf_processor.py`
        )
      );
      PythonShell.run(
        getPythonFilePath(
          `${__dirname}/pollen-collector/pollen_pdf_processor.py`
        ),
        { pythonPath: 'python3', args: [category] },
        (err, result) => {
          if (err) {
            reject(err);
          }
          this.logger.log(
            `✅ Data extraction for ${category} completed succesfully`
          );
          console.log('data: ', result);
          resolve(JSON.parse(result[0]));
        }
      );
    });
  }
}
