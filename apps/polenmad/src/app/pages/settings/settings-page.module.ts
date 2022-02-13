import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageRoutingModule } from './settings-page-routing.module';
import { SettingsLayoutComponent } from './layout/settings-layout.component';
import { NgxsModule } from '@ngxs/store';
import { SettingsState } from './state/settings.state';

@NgModule({
  declarations: [SettingsLayoutComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([SettingsState]),
    SettingsPageRoutingModule,
  ],
})
export class SettingsPageModule {}
