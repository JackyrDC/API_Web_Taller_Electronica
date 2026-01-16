import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityRequestService } from './availability-request.service';

describe('AvailabilityRequestService', () => {
  let service: AvailabilityRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailabilityRequestService],
    }).compile();

    service = module.get<AvailabilityRequestService>(AvailabilityRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
