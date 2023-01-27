import { ApiProperty } from '@nestjs/swagger';

export class PollenCatcherDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  reportedPollenTypes: string[];

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
