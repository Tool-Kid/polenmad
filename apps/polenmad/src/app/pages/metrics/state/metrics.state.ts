import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MetricsService, PollenLevelType } from '@polenmad/data-access';
import { tap } from 'rxjs';
import { SettingsStateModel } from '../../settings/state/settings.model';
import { SettingsState } from '../../settings/state/settings.state';
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

  @Selector([SettingsState])
  static alergies(state: MetricsStateModel, settings: SettingsStateModel) {
    const sortLevelCriteria = new Map<PollenLevelType, number>([
      ['very_high', 0],
      ['high', 1],
      ['medium', 2],
      ['low', 3],
    ]);
    const pollenTypes = settings.pollenTypes
      .filter((pollenType) => pollenType.active)
      .map((pollenType) => pollenType.type);
    return state.metrics.entries
      .filter((entry) => pollenTypes.includes(entry.value.type))
      .sort((a, b) => {
        const aLevel = sortLevelCriteria.get(a.value.polllenGrains.level) ?? 3;
        const bLevel = sortLevelCriteria.get(b.value.polllenGrains.level) ?? 3;
        return aLevel - bLevel;
      });
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
