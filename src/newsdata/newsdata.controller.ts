import { Controller, Get } from '@nestjs/common';
import { NewsdataService } from './newsdata.service';

@Controller('newsdata')
export class NewsdataController {
  constructor(private readonly newsdataService: NewsdataService) {}

  @Get('/all')
  getAll() {
    return this.newsdataService.getNewsDataAll();
  }
  
}
