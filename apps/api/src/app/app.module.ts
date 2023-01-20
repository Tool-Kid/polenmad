import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import {
  PollenCatcherJSONDBRepository,
  PollenCatcherRepository,
  PollenCatcherService,
  PollencatchersUpdaterService,
} from '@polenmad/pollen';

import { MetricsModule } from './api/metrics/metrics.module';
import { PollenCatchersModule } from './api/pollen-catchers/pollen-catchers.module';

const CRON_JOBS = [PollencatchersUpdaterService];

@Module({
  imports: [
    MetricsModule,
    PollenCatchersModule,
    HttpModule,
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [
    ...CRON_JOBS,
    {
      provide: PollenCatcherRepository,
      useClass: PollenCatcherJSONDBRepository,
    },
    PollenCatcherService,
  ],
})
export class AppModule {}
