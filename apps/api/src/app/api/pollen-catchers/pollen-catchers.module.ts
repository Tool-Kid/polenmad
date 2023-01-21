import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  GetPollenCatcherQryHandler,
  PollenCatcherJSONDBRepository,
  PollenCatcherRepository,
  PollenCatcherService,
  PollenCatchersUpdater,
} from '@polenmad/pollen';
import { PollenCatcherController } from './get/pollen-catchers.controller';

const QUERY_HANDLERS = [GetPollenCatcherQryHandler];
const CRON_JOBS = [PollenCatchersUpdater];

@Module({
  controllers: [PollenCatcherController],
  imports: [CqrsModule, HttpModule],
  providers: [
    {
      provide: PollenCatcherRepository,
      useClass: PollenCatcherJSONDBRepository,
    },
    PollenCatcherService,
    ...QUERY_HANDLERS,
    ...CRON_JOBS,
  ],
})
export class PollenCatchersModule {}
