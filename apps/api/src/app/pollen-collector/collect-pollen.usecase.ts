import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { differenceInSeconds } from 'date-fns';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

import { pollenCollectedEvent } from '../shared';
import { PollenCategoryIndexRegistry, PollenCollection } from './data';
import { PollenCollectorService } from './pollen-collector.service';
import { PollenDataProcessorService } from './pollen-data-processor.service';

@Injectable()
export class CollectPollenUseCase {
  private readonly logger = new Logger(CollectPollenUseCase.name);
  private readonly tmpPath = tmpdir();
  private readonly tmpReportsPath = join(this.tmpPath, 'reports');
  private readonly tmpCollectorPath = join(this.tmpPath, 'collector');

  constructor(
    private readonly collector: PollenCollectorService,
    private readonly processor: PollenDataProcessorService,
    private readonly emitter: EventEmitter2
  ) {}

  public async exec() {
    const startAt = Date.now();
    const pollenCollection: PollenCollection = { entries: [] };
    if (!existsSync(this.tmpCollectorPath)) {
      mkdirSync(this.tmpCollectorPath, { recursive: true });
    }

    for (const category of PollenCategoryIndexRegistry) {
      const data = await this.collector.getPollenDataForPollenCategory(
        category.type
      );
      const entries = await this.processor.processPollenData(
        category.type,
        data
      );
      pollenCollection.entries.push(...entries);
    }
    this.logger.log(
      `✅ Processor completed in ${differenceInSeconds(
        Date.now(),
        startAt
      )} seconds with new ${pollenCollection.entries.length} entries found`
    );

    const storeFilePath = join(
      this.tmpReportsPath,
      `pollen-report-${startAt}.json`
    );
    if (!existsSync(this.tmpReportsPath)) {
      mkdirSync(this.tmpReportsPath, { recursive: true });
    }
    writeFileSync(storeFilePath, JSON.stringify(pollenCollection));
    this.logger.log(`✅ Report stored at ${storeFilePath}`);

    rmSync(this.tmpCollectorPath, { recursive: true, force: true });
    this.logger.log(`✅ tmp directory deleted successfully`);

    const { type, data } = pollenCollectedEvent(pollenCollection);
    this.emitter.emit(type, data);
    return {
      status: 'completed',
    };
  }
}
