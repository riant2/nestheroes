import { Test, TestingModule } from '@nestjs/testing';
import { FactionsController } from './factions.controller';

describe('Factions Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [FactionsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: FactionsController = module.get<FactionsController>(FactionsController);
    expect(controller).toBeDefined();
  });
});
