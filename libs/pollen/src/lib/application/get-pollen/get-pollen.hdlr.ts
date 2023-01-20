import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { lastValueFrom } from 'rxjs';
import { PollenRepository } from '../../domain';
import { PollenEntry } from '../../domain/pollen';
import { GetPollenCmd } from './get-pollen.cmd';

@CommandHandler(GetPollenCmd)
export class GetPollenCmdHandler
  implements ICommandHandler<GetPollenCmd, PollenEntry[]>
{
  constructor(private readonly pollenRepository: PollenRepository) {}

  async execute(command: GetPollenCmd): Promise<PollenEntry[]> {
    const pollen = await lastValueFrom(this.pollenRepository.getPollen());
    return pollen;
  }
}
