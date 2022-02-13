import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

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
  config!: MetricConfig;

  metric!: MetricConfig;

  constructor() {}

  ngOnInit(): void {
    this.setConfig();
  }

  setConfig() {
    this.metric = this.config;
  }
}
