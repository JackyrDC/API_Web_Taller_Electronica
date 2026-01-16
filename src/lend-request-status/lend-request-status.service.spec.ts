import { Test, TestingModule } from '@nestjs/testing';
import { LendRequestStatusService } from './lend-request-status.service';

describe('LendRequestStatusService', () => {
  let service: LendRequestStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LendRequestStatusService],
    }).compile();

    service = module.get<LendRequestStatusService>(LendRequestStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
