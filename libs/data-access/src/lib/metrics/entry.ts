import { PollenCategoryType } from '../pollen';
import { PollenLevelType } from './pollen-level';

export interface MetricEntry {
  lastUpdated: number;
  value: {
    type: PollenCategoryType;
    polllenGrains: {
      count: number;
      level: PollenLevelType;
      units: string;
    };
  };
}
