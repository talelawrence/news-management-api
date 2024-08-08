import { Controller, Get } from '@nestjs/common';
import { MasterdataService } from './masterdata.service';
import { get } from 'http';

@Controller('masterdata')
export class MasterdataController {
  constructor(private readonly masterdataService: MasterdataService) {}

  @Get()
  getHello(): string {
    return "helle masterdata";
  }

  @Get('/main/all')
  getMainAll() {
    return this.masterdataService.getMainGroupNewsMasterDataAll();
  }

  @Get('/sub/all')
  getSubAll() {
    return this.masterdataService.getSubGroupNewsMasterDataAll();
  }

  @Get('/province/all')
  getProvinceAll() {
    return this.masterdataService.getProvinceMasterDataAll();
  }

  @Get('/country/all')
  getCountryAll() {
    return this.masterdataService.getCountryMasterDataAll();
  }

  @Get('/subdistrict/all')
  getSubDistrictAll() {
    return this.masterdataService.getSubDistrictMasterDataAll();
  }

  @Get('/district/all')
  getDistrictAll() {
    return this.masterdataService.getDistrictMasterDataAll();
  }

  @Get('/departement/all')
  getDepartementAll() {
    return this.masterdataService.getDepartementMasterDataAll();
  }

  @Get('/region/all')
  getRegionAll() {
    return this.masterdataService.getRegionMasterDataAll();
  }

  @Get('sub/:id')
  getSubById(id: number) {
    return this.masterdataService.getSubGroupNewsMasterDataById(id);
  }

}
