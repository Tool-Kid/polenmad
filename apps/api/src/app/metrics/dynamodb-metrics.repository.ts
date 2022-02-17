import { InjectModel, ReturnModel } from '@skypress/nestjs-dynamodb';
import { MetricsRepository } from './metrics.repository';
import { PollenMetricsSchema } from './metrics.schema';

const Schema = ReturnModel<PollenMetricsSchema>();

export class DynamoDBMetricsRepository implements MetricsRepository {
  constructor(
    @InjectModel(PollenMetricsSchema)
    private readonly schema: typeof Schema
  ) {}

  getMetrics(): Promise<PollenMetricsSchema[]> {
    return this.schema.find();
  }

  updateMetrics(metrics: PollenMetricsSchema): Promise<PollenMetricsSchema> {
    return this.schema.create(metrics);
  }
}
