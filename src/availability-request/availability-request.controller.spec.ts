import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityRequestController } from './availability-request.controller';

describe('AvailabilityRequestController', () => {
  let controller: AvailabilityRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailabilityRequestController],
    }).compile();

    controller = module.get<AvailabilityRequestController>(AvailabilityRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
