import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityRequestStatusController } from './availability-request-status.controller';

describe('AvailabilityRequestStatusController', () => {
  let controller: AvailabilityRequestStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailabilityRequestStatusController],
    }).compile();

    controller = module.get<AvailabilityRequestStatusController>(AvailabilityRequestStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
