import { Injectable, Logger } from '@nestjs/common';
import {
  getCatcherRegionForIndex,
  PollenCatcherEntry,
  PollenCategoryType,
} from './data';

@Injectable()
export class PollenDataProcessorService {
  private readonly logger = new Logger(PollenDataProcessorService.name);

  public async processPollenData(category: PollenCategoryType, data: any[]) {
    const entries: PollenCatcherEntry[] = [];

    data
      .filter((value, index) => index !== 0)
      .filter((value) => value[0])
      .map((entry: any[]) =>
        entry
          .filter((value, index) => index !== 0)
          .map((entry, index) => ({
            date: entry[0],
            value: entry[index],
            pollen: category,
            catcher: getCatcherRegionForIndex(index),
          }))
      );

    const mappedEntries = this.mapReport(entries);
    this.logger.log(`✅ Processing for <${category}> pollen type completed`);
    return mappedEntries;
  }

  private mapReport(entries: PollenCatcherEntry[]) {
    return entries
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
