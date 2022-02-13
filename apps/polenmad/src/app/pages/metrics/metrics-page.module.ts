import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricsPageRoutingModule } from './metrics-page-routing.module';
import { MetricsLayoutComponent } from './layout/metrics-layout.component';
import { MetricsModule } from '../../modules/metrics/metrics.module';
import { NgxsModule } from '@ngxs/store';
import { MetricsState } from './state/metrics.state';

const OWN_MODULES = [MetricsModule];

@NgModule({
  declarations: [MetricsLayoutComponent],
  imports: [
    CommonModule,
    ...OWN_MODULES,
    NgxsModule.forFeature([MetricsState]),
    MetricsPageRoutingModule,
  ],
})
export class MetricsPageModule {}
