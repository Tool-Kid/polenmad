import { Injectable, Logger } from '@nestjs/common';
import { PollenCollectorService } from './pollen-collector.service';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import {
  getCatcherRegionForIndex,
  PollenCatcherEntry,
  PollenCategoryIndexRegistry,
  PollenCategoryType,
  PollenCollection,
} from './data';
import { differenceInSeconds } from 'date-fns';

@Injectable()
export class PollenDataProcessorService {
  private readonly logger = new Logger(PollenDataProcessorService.name);
  private readonly tmpPath = './tmp';
  private readonly tmpReportsPath = './tmp/reports';
  private readonly tmpCollectorPath = './tmp/collector';
  private pollenCollection: PollenCollection;

  constructor(private readonly pollenCollector: PollenCollectorService) {}

  async collect() {
    const startAt = Date.now();
    this.pollenCollection = { entries: [] };
    if (!existsSync(this.tmpCollectorPath)) {
      mkdirSync(this.tmpCollectorPath, { recursive: true });
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
    const storeFilePath = `${this.tmpReportsPath}/pollen-report-${startAt}.json`;
    if (!existsSync(this.tmpReportsPath)) {
      mkdirSync(this.tmpReportsPath, { recursive: true });
    }
    this.mapReport();
    writeFileSync(storeFilePath, JSON.stringify(this.pollenCollection));
    this.logger.log(`✅ Report stored at ${storeFilePath}`);
    rmSync(this.tmpCollectorPath, { recursive: true, force: true });
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

  private mapReport() {
    this.pollenCollection.entries = this.pollenCollection.entries
      .map((entry) => {
        const [day, month, year] = entry.date.split('/');
        return {
          ...entry,
          value: isNaN(Number(entry.value)) ? 'ND' : +entry.value,
          date: new Date(
            Date.UTC(+year + 2000, +month - 1, +day)
          ).toUTCString(),
        } as PollenCatcherEntry;
      })
      .sort((a, b) => {
        return new Date(b.date) < new Date(a.date) ? -1 : 1;
      });
  }
}
