import { ApiProperty } from '@nestjs/swagger';

export class PollenGrainDto {
  @ApiProperty()
  value: number;

  @ApiProperty()
  units: string;

  constructor(data: PollenGrainDto) {
    Object.assign(this, data);
  }
}

export class PollenEntryDto {
  @ApiProperty()
  catcher: string;

  @ApiProperty()
  pollenType: string;

  @ApiProperty({ type: PollenEntryDto })
  pollenGrains: PollenGrainDto;

  @ApiProperty()
  readDate: string;

  constructor(data: PollenEntryDto) {
    Object.assign(this, data);
  }
}

export class GetPollenDto {
  @ApiProperty({ type: PollenEntryDto, isArray: true })
  data: PollenEntryDto[];

  constructor(data: GetPollenDto) {
    Object.assign(this, data);
  }
}
