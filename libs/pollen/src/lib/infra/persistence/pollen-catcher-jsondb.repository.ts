import { JsonDB, Config } from 'node-json-db';
import { from, Observable } from 'rxjs';
import { PollenCatcher, PollenCatcherRepository } from '../../domain';

export class PollenCatcherJSONDBRepository implements PollenCatcherRepository {
  private readonly db = new JsonDB(
    new Config('pollenmad@pollen__pollen-catchers', true, false, '/')
  );

  private readonly DB_KEY = 'POLLEN_CATCHERS';

  getPollenCatchers(): Observable<PollenCatcher[]> {
    return from(this.db.getData(this.DB_KEY));
  }

  updatePollenCatchers(pollenCatchers: PollenCatcher[]): void {
    this.db.push(this.DB_KEY, pollenCatchers);
  }
}
