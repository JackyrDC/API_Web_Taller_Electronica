import { Test, TestingModule } from '@nestjs/testing';
import { LendRequestService } from './lend-request.service';

describe('LendRequestService', () => {
  let service: LendRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LendRequestService],
    }).compile();

    service = module.get<LendRequestService>(LendRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
