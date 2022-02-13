import { PollenCategoryType } from '@polenmad/data-access';

export interface PollenTypeSettings {
  type: PollenCategoryType;
  active: boolean;
}

export interface SettingsStateModel {
  pollenTypes: PollenTypeSettings[];
}
