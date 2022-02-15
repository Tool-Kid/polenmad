import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PollenCollectorService } from './pollen-collector.service';
import { PollenDataProcessorService } from './pollen-data-processor.service';

@Module({
  imports: [HttpModule],
  providers: [PollenCollectorService, PollenDataProcessorService],
  exports: [PollenDataProcessorService],
})
export class PollenCollectorModule {}
