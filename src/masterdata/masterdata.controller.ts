import { Controller, Get } from '@nestjs/common';
import { MasterdataService } from './masterdata.service';

@Controller('masterdata')
export class MasterdataController {
  constructor(private readonly masterdataService: MasterdataService) {}

  @Get()
  getHello(): string {
    return "helle masterdata";
  }

  @Get('/test-api')
  testApi() {
    this.masterdataService.testapi();
  }
}
