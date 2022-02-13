import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { updateItem, patch, append } from '@ngxs/store/operators';
import { TogglePollenType } from './settings.actions';
import { SETTINGS_STATE__DEFAULTS } from './settings.defaults';
import { PollenTypeSettings, SettingsStateModel } from './settings.model';

@State({
  name: 'settings',
  defaults: SETTINGS_STATE__DEFAULTS,
})
@Injectable()
export class SettingsState {
  @Selector()
  static pollenTypes(state: SettingsStateModel) {
    return state.pollenTypes;
  }

  @Action(TogglePollenType)
  togglePollenType(
    ctx: StateContext<SettingsStateModel>,
    action: TogglePollenType
  ) {
    const pollenType = ctx
      .getState()
      .pollenTypes.find((pollen) => pollen.type === action.pollenType);
    if (pollenType) {
      ctx.setState(
        patch({
          pollenTypes: updateItem<PollenTypeSettings>(
            (setting) => setting?.type === action.pollenType,
            { type: action.pollenType, active: !pollenType.active }
          ),
        })
      );
    } else {
      ctx.setState(
        patch({
          pollenTypes: append<PollenTypeSettings>([
            { type: action.pollenType, active: true },
          ]),
        })
      );
    }
  }
}
