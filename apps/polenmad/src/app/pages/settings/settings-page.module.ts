import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageRoutingModule } from './settings-page-routing.module';
import { SettingsLayoutComponent } from './layout/settings-layout.component';
import { NgxsModule } from '@ngxs/store';
import { TranslocoModule } from '@ngneat/transloco';
import {
  TuiCheckboxLabeledModule,
  TuiDataListWrapperModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiDataListModule } from '@taiga-ui/core';

const TAIGA_MODULES = [
  TuiCheckboxLabeledModule,
  TuiSelectModule,
  TuiDataListWrapperModule,
  TuiDataListModule,
];

@NgModule({
  declarations: [SettingsLayoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgxsModule.forFeature(),
    SettingsPageRoutingModule,
    ...TAIGA_MODULES,
  ],
})
export class SettingsPageModule {}
