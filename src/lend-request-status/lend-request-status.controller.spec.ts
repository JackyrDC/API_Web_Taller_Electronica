import { Test, TestingModule } from '@nestjs/testing';
import { LendRequestStatusController } from './lend-request-status.controller';

describe('LendRequestStatusController', () => {
  let controller: LendRequestStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LendRequestStatusController],
    }).compile();

    controller = module.get<LendRequestStatusController>(LendRequestStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
