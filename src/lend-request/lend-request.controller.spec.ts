import { Test, TestingModule } from '@nestjs/testing';
import { LendRequestController } from './lend-request.controller';

describe('LendRequestController', () => {
  let controller: LendRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LendRequestController],
    }).compile();

    controller = module.get<LendRequestController>(LendRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
