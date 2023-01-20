import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import { PollenRepository } from '../../domain';
import { PollenService } from '../../infra/pollen.service';
import { PollenCatcherService } from '../../infra/pollen-catcher.service';

@Injectable()
export class PollenUpdater {
  constructor(
    private readonly pollenService: PollenService,
    private readonly pollenRepository: PollenRepository
  ) {}

  @Cron('0 0 * * * *')
  async handleCron() {
    const pollenEntries = await lastValueFrom(
      this.pollenService.retrievePollenData()
    );
    this.pollenRepository.updatePollen(pollenEntries);
  }
}
