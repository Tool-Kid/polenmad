import { PollenCategoryType } from '../../pollen-collector/data';
import { IsArray, ValidateNested, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class PollenGrain {
  @IsNumber()
  count: number;
  @IsString()
  units: string;
}

export class MetricEntryValue {
  @Type()
  type: PollenCategoryType;
  @ValidateNested()
  polllenGrains: PollenGrain;
}

export class MetricEntry {
  @IsString()
  lastUpdated: string;
  @ValidateNested()
  @Type()
  value: MetricEntryValue;
}

export class PollenMetrics {
  @IsString()
  lastUpdated: string;
  @IsArray()
  entries: MetricEntry[];

  constructor(partial: Partial<PollenMetrics>) {
    Object.assign(this, partial);
  }
}
