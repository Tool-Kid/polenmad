import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPollenCatcherQry } from '@polenmad/pollen';

@Controller('pollen-catchers')
export class PollenCatcherController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getPollenCatchers() {
    const data = this.queryBus.execute(new GetPollenCatcherQry());
    return data;
  }
}
