import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { GetPollenCatcherQry, PollenCatcher } from '@polenmad/pollen';
import { PollenCatcherDto, GetPollenCatchersDto } from './dto';

@ApiTags('pollen-catchers')
@Controller('pollen-catchers')
export class PollenCatcherController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getPollenCatchers() {
    const pollenCatchers: PollenCatcher[] = await this.queryBus.execute(
      new GetPollenCatcherQry()
    );
    return new GetPollenCatchersDto({
      data: pollenCatchers.map(
        (pollenCatcher) =>
          new PollenCatcherDto({
            id: pollenCatcher.id,
            description: pollenCatcher.description,
            reportedPollenTypes: pollenCatcher.reportedPollenTypes,
            geo: {
              building: pollenCatcher.geo.building,
              street: pollenCatcher.geo.street,
            },
          })
      ),
    });
  }
}
