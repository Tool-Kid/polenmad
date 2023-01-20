import { JsonDB, Config } from 'node-json-db';
import { from, Observable } from 'rxjs';
import { PollenEntry, PollenRepository } from '../../domain';

export class PollenJSONDBRepository implements PollenRepository {
  private readonly db = new JsonDB(
    new Config('pollenmad__pollen', true, false, '/')
  );
  private readonly DB_KEY = 'POLLEN';

  getPollen(): Observable<PollenEntry[]> {
    return from(this.db.getData(this.DB_KEY));
  }

  updatePollen(pollenEntries: PollenEntry[]): void {
    this.db.push(this.DB_KEY, pollenEntries);
  }
}
