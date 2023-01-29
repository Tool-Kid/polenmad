import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Cron } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import { PollenColledtedEvent, PollenRepository } from '../../domain';
import { PollenService } from '../../infra/pollen.service';

@Injectable()
export class PollenUpdater {
  constructor(
    private readonly pollenService: PollenService,
    private readonly pollenRepository: PollenRepository,
    private readonly eventBus: EventBus
  ) {}

  @Cron('0 0 * * * *')
  async handleCron() {
    const pollenEntries = await lastValueFrom(
      this.pollenService.retrievePollenData()
    );
    await lastValueFrom(this.pollenRepository.updatePollen(pollenEntries));
    this.eventBus.publish(new PollenColledtedEvent({ pollen: pollenEntries }));
  }
}
