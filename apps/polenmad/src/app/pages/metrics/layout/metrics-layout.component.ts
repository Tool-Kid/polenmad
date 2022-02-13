import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PollenMetrics } from '@polenmad/data-access';
import { Observable } from 'rxjs';
import { RetrieveMetrics } from '../state/metrics.actions';
import { MetricsState } from '../state/metrics.state';

@Component({
  selector: 'polenmad-metrics-layout',
  templateUrl: './metrics-layout.component.html',
  styleUrls: ['./metrics-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricsLayoutComponent implements OnInit {
  @Select(MetricsState.metrics)
  metrics$!: Observable<PollenMetrics>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new RetrieveMetrics());
  }
}
