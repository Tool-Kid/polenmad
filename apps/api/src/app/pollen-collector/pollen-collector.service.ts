import { Injectable, Logger } from '@nestjs/common';
import { PythonShell } from 'python-shell';

import { PollenCategoryType } from './data';
import { getPythonFilePath } from '../utils';
import { InjectAwsService } from 'nest-aws-sdk';
import { Lambda } from 'aws-sdk';

@Injectable()
export class PollenCollectorService {
  private readonly logger = new Logger(PollenCollectorService.name);

  constructor(@InjectAwsService(Lambda) private readonly lambda: Lambda) {}

  async getPollenDataForPollenCategory(
    category: PollenCategoryType
  ): Promise<any[]> {
    const data = await new Promise((resolve, reject) => {
      this.lambda.invoke(
        {
          FunctionName: 'pdf_processor',
          Payload: {
            category,
          },
        },
        (err, data) => {
          if (err) {
            reject(err);
          }
          console.log(err, data);
          resolve(data.Payload);
        }
      );
    });
    return data as any[];
  }
}
