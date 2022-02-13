import { PollenCategoryType } from '../pollen';

export interface MetricEntry {
  lastUpdated: number;
  value: {
    type: PollenCategoryType;
    polllenGrains: {
      count: number;
      units: string;
    };
  };
}
