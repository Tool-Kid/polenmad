import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CollectPollenUseCase } from './collect-pollen.usecase';
import { PollenCollectorService } from './pollen-collector.service';
import { PollenDataProcessorService } from './pollen-data-processor.service';

@Module({
  imports: [HttpModule],
  providers: [
    CollectPollenUseCase,
    PollenCollectorService,
    PollenDataProcessorService,
  ],
  exports: [CollectPollenUseCase],
})
export class PollenCollectorModule {}
