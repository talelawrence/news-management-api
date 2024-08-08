import { Test, TestingModule } from '@nestjs/testing';
import { NewsdataController } from './newsdata.controller';
import { NewsdataService } from './newsdata.service';

describe('NewsdataController', () => {
  let controller: NewsdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsdataController],
      providers: [NewsdataService],
    }).compile();

    controller = module.get<NewsdataController>(NewsdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
