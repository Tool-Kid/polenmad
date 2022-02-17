import { Controller, Get } from '@nestjs/common';
import { CollectPollenUseCase } from '../../pollen-collector/collect-pollen.usecase';
import { MetricsRepository } from '../metrics.repository';
import { PollenMetrics } from './dto';

@Controller('metrics')
export class GetMetricsController {
  constructor(
    private readonly repository: MetricsRepository,
    private useCase: CollectPollenUseCase
  ) {}

  @Get()
  getMetrics() {
    return this.useCase.exec();
    // console.log('hi');
    // const lastUpdated = new Date().toISOString();
    // return new PollenMetrics({
    //   lastUpdated,
    //   entries: [
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'acer',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'alnu',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'betu',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'cory',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'cupr',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'frax',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'plat',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'poac',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'popu',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'sali',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'todos',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //     {
    //       lastUpdated,
    //       value: {
    //         type: 'ulmu',
    //         polllenGrains: {
    //           count: 150,
    //           units: 'p/m3',
    //         },
    //       },
    //     },
    //   ],
    // });
  }
}
