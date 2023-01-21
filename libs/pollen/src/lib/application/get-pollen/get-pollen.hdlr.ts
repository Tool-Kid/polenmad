import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { lastValueFrom } from 'rxjs';
import { PollenRepository } from '../../domain';
import { PollenEntry } from '../../domain/pollen';
import { GetPollenQry } from './get-pollen.qry';

@QueryHandler(GetPollenQry)
export class GetPollenQryHandler
  implements IQueryHandler<GetPollenQry, PollenEntry[]>
{
  constructor(private readonly pollenRepository: PollenRepository) {}

  async execute(query: GetPollenQry): Promise<PollenEntry[]> {
    const pollen = await lastValueFrom(this.pollenRepository.getPollen());
    return pollen;
  }
}
