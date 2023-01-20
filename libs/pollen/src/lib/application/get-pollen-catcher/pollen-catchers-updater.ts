import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import { PollenCatcherRepository } from '../../domain';
import { PollenCatcherService } from '../../infra/pollen-catcher.service';

@Injectable()
export class PollenCatchersUpdater {
  constructor(
    private readonly pollenCatcherService: PollenCatcherService,
    private readonly pollenCatcherRepository: PollenCatcherRepository
  ) {}

  @Cron('0 0 * * * *')
  async handleCron() {
    const data = await lastValueFrom(
      this.pollenCatcherService.retrievePollenCatchers()
    );
    this.pollenCatcherRepository.updatePollenCatchers(data);
  }
}
