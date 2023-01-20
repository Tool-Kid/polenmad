import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { lastValueFrom } from 'rxjs';
import { PollenCatcher } from '../../domain/pollen-catcher';
import { PollenCatcherRepository } from '../../domain/pollen-catcher.repository';
import { GetPollenCatcherQry } from './get-pollen-catcher.qry';

@QueryHandler(GetPollenCatcherQry)
export class GetPollenCatcherQryHandler
  implements IQueryHandler<GetPollenCatcherQry, PollenCatcher[]>
{
  constructor(private readonly repository: PollenCatcherRepository) {}

  async execute(query: GetPollenCatcherQry): Promise<PollenCatcher[]> {
    const pollenCatchers = await lastValueFrom(
      this.repository.getPollenCatchers()
    );
    return pollenCatchers;
  }
}
