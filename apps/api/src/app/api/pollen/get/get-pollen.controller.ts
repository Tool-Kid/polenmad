import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { GetPollenQry, PollenEntry } from '@polenmad/pollen';
import { GetPollenDto, PollenEntryDto } from './dto';

@ApiTags('pollen')
@Controller('pollen')
export class GetPollenController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getPollen() {
    const pollen: PollenEntry[] = await this.queryBus.execute(
      new GetPollenQry()
    );
    return new GetPollenDto({
      data: pollen.map(
        (entry) =>
          new PollenEntryDto({
            catcher: entry.catcher,
            pollenType: entry.pollenType,
            pollenGrains: entry.pollenGrains,
            readDate: entry.readDate.toISOString(),
          })
      ),
    });
  }
}
