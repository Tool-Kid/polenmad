import { ApiProperty } from '@nestjs/swagger';

export class PollenGrainDto {
  @ApiProperty()
  count: number;
  @ApiProperty()
  units: string;
}

export class MetricEntryValueDto {
  @ApiProperty()
  type: any;
  @ApiProperty({ type: PollenGrainDto })
  polllenGrains: PollenGrainDto;
}

export class MetricEntryDto {
  @ApiProperty()
  lastUpdated: string;

  @ApiProperty({ type: MetricEntryValueDto })
  value: MetricEntryValueDto;
}

export class GetMetricsDto {
  @ApiProperty()
  lastUpdated: string;
  @ApiProperty({ type: MetricEntryDto, isArray: true })
  entries: MetricEntryDto[];

  constructor(partial: Partial<GetMetricsDto>) {
    Object.assign(this, partial);
  }
}
