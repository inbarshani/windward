import { Test, TestingModule } from '@nestjs/testing';
import { FleetVesselsController } from './fleet-vessels.controller';

describe('FleetVesselsController', () => {
  let controller: FleetVesselsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FleetVesselsController],
    }).compile();

    controller = module.get<FleetVesselsController>(FleetVesselsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
