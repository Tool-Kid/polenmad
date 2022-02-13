import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { MetricEntry } from '@polenmad/data-access';
import { PollenCategoriesConfigMap } from '@polenmad/data-access';

interface MetricConfig {
  icon: string;
  name: string;
  value: string;
}

@Component({
  selector: 'polenmad-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricCardComponent implements OnInit {
  @Input()
  entry!: MetricEntry;

  metric!: MetricConfig;

  constructor() {}

  ngOnInit(): void {
    this.setConfig();
  }

  setConfig() {
    const { name, icon } = PollenCategoriesConfigMap.get(
      this.entry.value.type
    ) || {
      icon: 'assets/img/trees/tree-placeholder.png',
      name: 'UNKNOWN__NAME',
      type: 'unknown',
    };
    this.metric = {
      icon,
      name,
      value: `${this.entry.value.polllenGrains.count}${this.entry.value.polllenGrains.units}`,
    };
  }
}
