import { Body, Controller, Get, Post } from '@nestjs/common';
import { MasterdataService } from './masterdata.service';
import { get } from 'http';
import { MainGroupNews } from './entity/maingroupnews';
import { SubGroupNews } from './entity/subgroupnews';
import { Province } from './entity/province';
import { Region } from './entity/region';
import { Departement } from './entity/department';
import { District } from './entity/district';
import { SubDistrict } from './entity/subdistrict';
import { Country } from './entity/country';
import { createReq } from './dto/masterdata.dto';

@Controller('masterdata')
export class MasterdataController {
  constructor(private readonly masterdataService: MasterdataService) {}

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

  @Get('/department/all')
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

  @Post('main/create')
  createMain(@Body() reqBody: createReq) {
    return this.masterdataService.createMainGroupNews(reqBody);
  }

  @Post('sub/create')
  createSub(@Body() reqBody: createReq) {
    return this.masterdataService.createSubGroupNews(reqBody);
  }

  @Post('province/create')
  createProvince(@Body() reqBody: createReq) {
    return this.masterdataService.createProvince(reqBody);
  }

  @Post('country/create')
  createCountry(@Body() reqBody: createReq) {
    return this.masterdataService.createCountry(reqBody);
  }

  @Post('subdistrict/create')
  createSubDistrict(@Body() reqBody: createReq) {
    return this.masterdataService.createSubDistrict(reqBody);
  }

  @Post('district/create')
  createDistrict(@Body() reqBody: createReq) {
    return this.masterdataService.createDistrict(reqBody);
  }

  @Post('department/create')
  createDepartement(@Body() reqBody: createReq) {
    return this.masterdataService.createDepartement(reqBody);
  }

  @Post('region/create')
  createRegion(@Body() reqBody: createReq) {
    return this.masterdataService.createRegion(reqBody);
  }

}
