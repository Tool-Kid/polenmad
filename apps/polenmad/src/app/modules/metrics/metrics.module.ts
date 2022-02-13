import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule, TuiIslandModule } from '@taiga-ui/kit';

import { MetricCardComponent } from './components/metric-card/metric-card.component';
import { TranslocoModule } from '@ngneat/transloco';

const TAIGA_MODULES = [TuiIslandModule, TuiAvatarModule];

@NgModule({
  declarations: [MetricCardComponent],
  imports: [CommonModule, ...TAIGA_MODULES, TranslocoModule],
  exports: [MetricCardComponent],
})
export class MetricsModule {}
