import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPollenQry } from '@polenmad/pollen';

@Controller('pollen')
export class GetPollenController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getPollen() {
    const pollen = await this.queryBus.execute(new GetPollenQry());
    return pollen;
  }
}
