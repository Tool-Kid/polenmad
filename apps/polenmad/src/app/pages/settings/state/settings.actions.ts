import {
  PollenCatcherRegionType,
  PollenCategoryType,
} from '@polenmad/data-access';

export class TogglePollenType {
  static readonly type = '[Settings] Toggle Pollen type';
  constructor(public readonly pollenType: PollenCategoryType) {}
}

export class SetCatcherRegion {
  static readonly type = '[Settings] Set Catcher region';
  constructor(public readonly region: PollenCatcherRegionType) {}
}
