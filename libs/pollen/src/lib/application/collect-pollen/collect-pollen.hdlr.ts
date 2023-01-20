import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { lastValueFrom } from 'rxjs';
import { PollenRepository } from '../../domain';
import { PollenEntry } from '../../domain/pollen';
import { CollectPollenCmd } from './collect-pollen.cmd';

@CommandHandler(CollectPollenCmd)
export class CollectPollenCmdHandler
  implements ICommandHandler<CollectPollenCmd, PollenEntry[]>
{
  constructor(private readonly pollenCollectorRepository: PollenRepository) {}

  async execute(command: CollectPollenCmd): Promise<PollenEntry[]> {
    const pollen = await lastValueFrom(
      this.pollenCollectorRepository.getPollen()
    );
    return pollen;
  }
}
