import { Test, TestingModule } from '@nestjs/testing';
import { GetMetricsController } from './get-metrics.controller';

describe('GetMetricsController', () => {
  let controller: GetMetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetMetricsController],
    }).compile();

    controller = module.get<GetMetricsController>(GetMetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
