import { MetricsStateModel } from './metrics.model';

export const METRICS_STATE__DEFAULTS: MetricsStateModel = {
  metrics: {
    lastUpdated: 0,
    entries: [],
  },
};
