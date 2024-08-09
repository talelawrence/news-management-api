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
    try {
      const result = this.masterdataService.getMainGroupNewsMasterDataAll();
      return { success: true, message: "get main group news successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }

  }

  @Get('/sub/all')
  getSubAll() {
    try {
      const result = this.masterdataService.getSubGroupNewsMasterDataAll();
      return { success: true, message: "get sub group news successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }

  @Get('/province/all')
  getProvinceAll() {
    try {
      const result = this.masterdataService.getProvinceMasterDataAll();
      return { success: true, message: "get province successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }

  @Get('/country/all')
  getCountryAll() {
    try {
      const result = this.masterdataService.getCountryMasterDataAll();
      return { success: true, message: "get country successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }

  }

  @Get('/subdistrict/all')
  getSubDistrictAll() {
    try {
      const result = this.masterdataService.getSubDistrictMasterDataAll();
      return { success: true, message: "get sub district successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }

  }

  @Get('/district/all')
  getDistrictAll() {
    try {
      const result = this.masterdataService.getDistrictMasterDataAll();
      return { success: true, message: "get district successful", data: result }
    } catch (err) {
      return { success: false, message: err.message } 
    }
  }

  @Get('/department/all')
  getDepartementAll() {
    try {
      const result = this.masterdataService.getDepartementMasterDataAll();
      return { success: true, message: "get department successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }

  }

  @Get('/region/all')
  getRegionAll() {
    try {
      const result = this.masterdataService.getRegionMasterDataAll();
      return { success: true, message: "get region successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }

  @Get('sub/:id')
  getSubById(id: number) {
    try {
      const result = this.masterdataService.getSubGroupNewsMasterDataById(id);
      return { success: true, message: "get sub group news by id successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }
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
