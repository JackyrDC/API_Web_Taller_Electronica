import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityRequestStatusService } from './availability-request-status.service';

describe('AvailabilityRequestStatusService', () => {
  let service: AvailabilityRequestStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailabilityRequestStatusService],
    }).compile();

    service = module.get<AvailabilityRequestStatusService>(AvailabilityRequestStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
