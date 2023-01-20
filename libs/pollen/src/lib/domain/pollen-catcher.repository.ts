import { Observable } from 'rxjs';
import { PollenCatcher } from './pollen-catcher';

export abstract class PollenCatcherRepository {
  abstract getPollenCatchers(): Observable<PollenCatcher[]>;
  abstract updatePollenCatchers(pollenCatchers: PollenCatcher[]): void;
}
