import { PollenCategoryType } from '@polenmad/data-access';

export class TogglePollenType {
  static readonly type = '[Settings] Toggle Pollen type';
  constructor(public readonly pollenType: PollenCategoryType) {}
}
