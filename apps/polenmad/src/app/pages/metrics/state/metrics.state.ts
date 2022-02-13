import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MetricsService } from '@polenmad/data-access';
import { tap } from 'rxjs';
import { RetrieveMetrics } from './metrics.actions';
import { METRICS_STATE__DEFAULTS } from './metrics.defaults';
import { MetricsStateModel } from './metrics.model';

@State({
  name: 'metrics',
  defaults: METRICS_STATE__DEFAULTS,
})
@Injectable()
export class MetricsState {
  @Selector()
  static metrics(state: MetricsStateModel) {
    return state.metrics;
  }

  constructor(private readonly metricsService: MetricsService) {}

  @Action(RetrieveMetrics)
  retrieveMetrics(
    ctx: StateContext<MetricsStateModel>,
    action: RetrieveMetrics
  ) {
    return this.metricsService.getMetrics().pipe(
      tap((metrics) => {
        ctx.patchState({ metrics });
      })
    );
  }
}
