import { JsonDB, Config } from 'node-json-db';
import { from, Observable } from 'rxjs';
import { PollenEntry, PollenRepository } from '../../domain';

export class PollenJSONDBRepository implements PollenRepository {
  private readonly db = new JsonDB(
    new Config('pollenmad@pollen__pollen', false, false, '/')
  );
  private readonly DB_KEY = 'POLLEN';

  getPollen(): Observable<PollenEntry[]> {
    return from(this.db.getData(this.DB_KEY));
  }

  updatePollen(pollenEntries: PollenEntry[]): Observable<void> {
    for (const entry of pollenEntries) {
      this.db.push(
        `${this.DB_KEY}/${entry.catcher}__${
          entry.pollenType
        }__${entry.readDate.toISOString()}`,
        entry
      );
    }
    return from(this.db.save());
  }
}
