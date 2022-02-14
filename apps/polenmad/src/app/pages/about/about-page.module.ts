import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutLayoutComponent } from './layout/about-layout.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [AboutLayoutComponent],
  imports: [CommonModule, TranslocoModule, AboutPageRoutingModule],
})
export class AboutPageModule {}
