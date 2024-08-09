import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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
    try {
      const result =  this.masterdataService.createMainGroupNews(reqBody);
      return { success: true, message: "create main group news successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Post('sub/create')
  createSub(@Body() reqBody: createReq) {
    try {
      const result =  this.masterdataService.createSubGroupNews(reqBody);
      return { success: true, message: "create sub group news successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Post('province/create')
  createProvince(@Body() reqBody: createReq) {
    try {
      const result =  this.masterdataService.createProvince(reqBody);
      return { success: true, message: "create province successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
    
  }

  @Post('country/create')
  createCountry(@Body() reqBody: createReq) {
    try {
      const result =  this.masterdataService.createCountry(reqBody);
      return { success: true, message: "create country successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
   
  }

  @Post('subdistrict/create')
  createSubDistrict(@Body() reqBody: createReq) {
    try {
      const result =  this.masterdataService.createSubDistrict(reqBody);
      return { success: true, message: "create sub district successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
    
  }

  @Post('district/create')
  createDistrict(@Body() reqBody: createReq) {
    try {
      const result =  this.masterdataService.createDistrict(reqBody);
      return { success: true, message: "create district successful", data: result }
    } catch (err) {
        return { success: false, message: err.message}
    }
  }

  @Post('department/create')
  createDepartement(@Body() reqBody: createReq) {
    try {
      const result =  this.masterdataService.createDepartement(reqBody);
      return { success: true, message: "create department successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Post('region/create')
  createRegion(@Body() reqBody: createReq) {
    try {
      const result =  this.masterdataService.createRegion(reqBody);
      return { success: true, message: "create region successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('main/:id')
  updateMain(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  this.masterdataService.updateMainGroupNews(reqBody, id);
      return { success: true, message: "update main group news successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('sub/:id')
  updateSub(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  this.masterdataService.updateSubGroupNews(reqBody, id);
      return { success: true, message: "update sub group news successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('province/:id')
  updateProvince(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  this.masterdataService.updateProvince(reqBody, id);
      return { success: true, message: "update province successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('country/:id')
  updateCountry(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  this.masterdataService.updateCountry(reqBody, id);
      return { success: true, message: "update country successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('subdistrict/:id')
  updateSubDistrict(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  this.masterdataService.updateSubDistrict(reqBody, id);
      return { success: true, message: "update sub district successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('district/:id')
  updateDistrict(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  this.masterdataService.updateDistrict(reqBody, id);
      return { success: true, message: "update district successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('department/:id')
  updateDepartement(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  this.masterdataService.updateDepartement(reqBody, id);
      return { success: true, message: "update department successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('region/:id')
  updateRegion(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  this.masterdataService.updateRegion(reqBody, id);
      return { success: true, message: "update region successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }
  

}
