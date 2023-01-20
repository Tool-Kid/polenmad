import { Observable } from 'rxjs';
import { PollenEntry } from './pollen';

export abstract class PollenRepository {
  abstract getPollen(): Observable<PollenEntry[]>;
  abstract updatePollen(pollenEntries: PollenEntry[]): void;
}
