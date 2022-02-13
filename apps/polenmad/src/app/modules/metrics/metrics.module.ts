import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule, TuiIslandModule } from '@taiga-ui/kit';

import { MetricCardComponent } from './components/metric-card/metric-card.component';

const TAIGA_MODULES = [TuiIslandModule, TuiAvatarModule];

@NgModule({
  declarations: [MetricCardComponent],
  imports: [CommonModule, ...TAIGA_MODULES],
  exports: [MetricCardComponent],
})
export class MetricsModule {}
