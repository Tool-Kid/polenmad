import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricsPageRoutingModule } from './metrics-page-routing.module';
import { MetricsLayoutComponent } from './layout/metrics-layout.component';

@NgModule({
  declarations: [MetricsLayoutComponent],
  imports: [CommonModule, MetricsPageRoutingModule],
})
export class MetricsPageModule {}
