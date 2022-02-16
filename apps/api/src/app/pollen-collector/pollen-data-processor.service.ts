import { Injectable, Logger } from '@nestjs/common';
import { PollenCollectorService } from './pollen-collector.service';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import {
  getCatcherRegionForIndex,
  PollenCategoryIndexRegistry,
  PollenCategoryType,
  PollenCollection,
} from './data';
import { differenceInSeconds } from 'date-fns';

@Injectable()
export class PollenDataProcessorService {
  private readonly logger = new Logger(PollenDataProcessorService.name);
  private readonly tmpPath = './tmp/collector';
  private pollenCollection: PollenCollection;

  constructor(private readonly pollenCollector: PollenCollectorService) {}

  async collect() {
    const startAt = Date.now();
    this.pollenCollection = { entries: [] };
    if (!existsSync(this.tmpPath)) {
      mkdirSync(this.tmpPath, { recursive: true });
    }
    for (const category of PollenCategoryIndexRegistry) {
      await this.collectPollenCategory(category.type);
      this.logger.log(
        `✅ Processing for <${category.type}> pollen type completed`
      );
    }
    this.logger.log(
      `✅ Processor completed in ${differenceInSeconds(
        Date.now(),
        startAt
      )} seconds with new ${this.pollenCollection.entries.length} entries found`
    );
    const storeFilePath = `${this.tmpPath}/pollen-report-${startAt}.json`;
    writeFileSync(storeFilePath, JSON.stringify(this.pollenCollection));
    this.logger.log(`✅ Report stored at ${storeFilePath}`);
    rmSync(this.tmpPath, { recursive: true, force: true });
  }

  private async collectPollenCategory(category: PollenCategoryType) {
    const data = await this.pollenCollector.getPollenDataForPollenCategory(
      category
    );
    for (let i = 1; i < data.length; i++) {
      const entry = data[i];
      for (let j = 1; j < entry.length; j++) {
        this.pollenCollection.entries.push({
          date: entry[0],
          value: entry[j],
          pollen: category,
          catcher: getCatcherRegionForIndex(j),
        });
      }
    }
  }
}
