import { ApiProperty } from '@nestjs/swagger';

export class PollenCatcherGeoDto {
  @ApiProperty()
  street: string;

  @ApiProperty()
  building: string;

  constructor(data: GetPollenCatchersDto) {
    Object.assign(this, data);
  }
}

export class PollenCatcherDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  reportedPollenTypes: string[];

  @ApiProperty({ type: PollenCatcherGeoDto })
  geo: PollenCatcherGeoDto;

  constructor(data: PollenCatcherDto) {
    Object.assign(this, data);
  }
}

export class GetPollenCatchersDto {
  @ApiProperty({ type: PollenCatcherDto, isArray: true })
  data: PollenCatcherDto[];

  constructor(data: GetPollenCatchersDto) {
    Object.assign(this, data);
  }
}
