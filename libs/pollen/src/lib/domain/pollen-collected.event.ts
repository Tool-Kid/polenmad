import { PollenEntry } from './pollen';

export class PollenColledtedEvent {
  constructor(
    private readonly data: {
      pollen: PollenEntry[];
    }
  ) {}
}
