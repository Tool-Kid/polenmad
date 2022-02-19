import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule, TuiIslandModule } from '@taiga-ui/kit';

import { MetricCardComponent } from './components/metric-card/metric-card.component';
import { TranslocoModule } from '@ngneat/transloco';
import { PollenLevelPipe } from './pipes/pollen-level.pipe';
import { TuiTooltipModule } from '@taiga-ui/core';

const TAIGA_MODULES = [TuiIslandModule, TuiAvatarModule, TuiTooltipModule];

const COMPONENTS = [MetricCardComponent];
const PIPES = [PollenLevelPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, ...TAIGA_MODULES, TranslocoModule],
  exports: [...COMPONENTS, ...PIPES],
})
export class MetricsModule {}
