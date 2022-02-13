import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageRoutingModule } from './settings-page-routing.module';
import { SettingsLayoutComponent } from './layout/settings-layout.component';
import { NgxsModule } from '@ngxs/store';
import { SettingsState } from './state/settings.state';
import { TranslocoModule } from '@ngneat/transloco';
import { TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

const TAIGA_MODULES = [TuiCheckboxLabeledModule];

@NgModule({
  declarations: [SettingsLayoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgxsModule.forFeature([SettingsState]),
    SettingsPageRoutingModule,
    ...TAIGA_MODULES,
  ],
})
export class SettingsPageModule {}
