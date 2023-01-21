import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  GetPollenQryHandler,
  PollenJSONDBRepository,
  PollenRepository,
  PollenService,
  PollenUpdater,
} from '@polenmad/pollen';
import { GetPollenController } from './get/get-pollen.controller';

const QUERY_HANDLERS = [GetPollenQryHandler];
const CRON_JOBS = [PollenUpdater];

@Module({
  controllers: [GetPollenController],
  imports: [CqrsModule, HttpModule],
  providers: [
    { provide: PollenRepository, useClass: PollenJSONDBRepository },
    PollenService,
    ...QUERY_HANDLERS,
    ...CRON_JOBS,
  ],
})
export class PollenModule {}
