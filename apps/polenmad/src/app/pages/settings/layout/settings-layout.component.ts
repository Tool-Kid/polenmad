import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import {
  PollenCategoriesConfigMap,
  PollenCategoryType,
} from '@polenmad/data-access';
import { TogglePollenType } from '../state/settings.actions';
import { SettingsState } from '../state/settings.state';

@Component({
  selector: 'polenmad-settings-layout',
  templateUrl: './settings-layout.component.html',
  styleUrls: ['./settings-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsLayoutComponent implements OnInit {
  settingsForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get pollenTypes() {
    return this.settingsForm.get('pollenTypes') as FormArray;
  }

  private buildForm() {
    const pollenTypesSettings = this.store.selectSnapshot(
      SettingsState.pollenTypes
    );
    this.settingsForm = this.fb.group({
      pollenTypes: this.fb.array([]),
    });
    PollenCategoriesConfigMap.forEach((config) => {
      this.pollenTypes.push(
        this.fb.group({
          type: [config.type],
          name: [config.name],
          active: [
            pollenTypesSettings.find(
              (settings) => settings.type === config.type
            )?.active || false,
          ],
        })
      );
    });
  }

  onPollenTypeChanges(type: PollenCategoryType) {
    this.store.dispatch(new TogglePollenType(type));
  }
}
