import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  GetPollenCatcherQryHandler,
  PollenCatcherJSONDBRepository,
  PollenCatcherRepository,
} from '@polenmad/pollen';
import { PollenCatcherController } from './get/pollen-catchers.controller';

const QUERY_HANDLERS = [GetPollenCatcherQryHandler];

@Module({
  controllers: [PollenCatcherController],
  imports: [CqrsModule, HttpModule],
  providers: [
    GetPollenCatcherQryHandler,
    {
      provide: PollenCatcherRepository,
      useClass: PollenCatcherJSONDBRepository,
    },
    ...QUERY_HANDLERS,
  ],
})
export class PollenCatchersModule {}
