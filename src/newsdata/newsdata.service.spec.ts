import { Test, TestingModule } from '@nestjs/testing';
import { NewsdataService } from './newsdata.service';

describe('NewsdataService', () => {
  let service: NewsdataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsdataService],
    }).compile();

    service = module.get<NewsdataService>(NewsdataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
