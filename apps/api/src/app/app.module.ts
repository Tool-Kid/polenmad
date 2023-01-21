import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';

import { MetricsModule } from './api/metrics/metrics.module';
import { PollenCatchersModule } from './api/pollen-catchers/pollen-catchers.module';
import { PollenModule } from './api/pollen/pollen.module';

const FEATURE_MODULES = [MetricsModule, PollenCatchersModule, PollenModule];

@Module({
  imports: [
    HttpModule,
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    ...FEATURE_MODULES,
  ],
  providers: [],
})
export class AppModule {}
