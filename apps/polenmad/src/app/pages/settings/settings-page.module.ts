import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageRoutingModule } from './settings-page-routing.module';
import { SettingsLayoutComponent } from './layout/settings-layout.component';

@NgModule({
  declarations: [SettingsLayoutComponent],
  imports: [CommonModule, SettingsPageRoutingModule],
})
export class SettingsPageModule {}
