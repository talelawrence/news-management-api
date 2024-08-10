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
  async getMainAll() {
    try {
      const result = await this.masterdataService.getMainGroupNewsMasterDataAll();
      return { success: true, message: "get main group news successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }

  }

  @Get('/sub/all')
  async getSubAll() {
    try {
      const result = await this.masterdataService.getSubGroupNewsMasterDataAll();
      return { success: true, message: "get sub group news successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }

  @Get('/province/all')
  async getProvinceAll() {
    try {
      const result = await this.masterdataService.getProvinceMasterDataAll();
      return { success: true, message: "get province successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }

  @Get('/country/all')
  async getCountryAll() {
    try {
      const result = await this.masterdataService.getCountryMasterDataAll();
      return { success: true, message: "get country successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }

  }

  @Get('/subdistrict/all')
  async getSubDistrictAll() {
    try {
      const result = await this.masterdataService.getSubDistrictMasterDataAll();
      return { success: true, message: "get sub district successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }

  }

  @Get('/district/all')
  async getDistrictAll() {
    try {
      const result = await this.masterdataService.getDistrictMasterDataAll();
      return { success: true, message: "get district successful", data: result }
    } catch (err) {
      return { success: false, message: err.message } 
    }
  }

  @Get('/department/all')
  async getDepartementAll() {
    try {
      const result = await this.masterdataService.getDepartementMasterDataAll();
      return { success: true, message: "get department successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }

  }

  @Get('/region/all')
  async getRegionAll() {
    try {
      const result = await this.masterdataService.getRegionMasterDataAll();
      return { success: true, message: "get region successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }

  @Get('sub/:id')
  async getSubById(id: number) {
    try {
      const result = await this.masterdataService.getSubGroupNewsMasterDataById(id);
      return { success: true, message: "get sub group news by id successful", data: result }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }

  @Post('main/create')
  async createMain(@Body() reqBody: createReq) {
    try {
      const result = await  this.masterdataService.createMainGroupNews(reqBody);
      return { success: true, message: "create main group news successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Post('sub/create')
  async createSub(@Body() reqBody: createReq) {
    try {
      const result =  await this.masterdataService.createSubGroupNews(reqBody);
      return { success: true, message: "create sub group news successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Post('province/create')
  async createProvince(@Body() reqBody: createReq) {
    try {
      const result =  await this.masterdataService.createProvince(reqBody);
      return { success: true, message: "create province successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
    
  }

  @Post('country/create')
  async createCountry(@Body() reqBody: createReq) {
    try {
      const result =  await this.masterdataService.createCountry(reqBody);
      return { success: true, message: "create country successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
   
  }

  @Post('subdistrict/create')
  async createSubDistrict(@Body() reqBody: createReq) {
    try {
      const result =  await this.masterdataService.createSubDistrict(reqBody);
      return { success: true, message: "create sub district successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
    
  }

  @Post('district/create')
  async createDistrict(@Body() reqBody: createReq) {
    try {
      const result =  await this.masterdataService.createDistrict(reqBody);
      return { success: true, message: "create district successful", data: result }
    } catch (err) {
        return { success: false, message: err.message}
    }
  }

  @Post('department/create')
  async createDepartement(@Body() reqBody: createReq) {
    try {
      const result =  await this.masterdataService.createDepartement(reqBody);
      return { success: true, message: "create department successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Post('region/create')
  async createRegion(@Body() reqBody: createReq) {
    try {
      const result =  await this.masterdataService.createRegion(reqBody);
      return { success: true, message: "create region successful", data: result }
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('main/:id')
  async updateMain(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  await this.masterdataService.updateMainGroupNews(reqBody, id);
      return { success: true, message: "update main group news successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('sub/:id')
  async updateSub(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  await this.masterdataService.updateSubGroupNews(reqBody, id);
      return { success: true, message: "update sub group news successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('province/:id')
  async  updateProvince(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  await this.masterdataService.updateProvince(reqBody, id);
      return { success: true, message: "update province successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('country/:id')
  async updateCountry(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  await this.masterdataService.updateCountry(reqBody, id);
      return { success: true, message: "update country successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('subdistrict/:id')
  async updateSubDistrict(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  await this.masterdataService.updateSubDistrict(reqBody, id);
      return { success: true, message: "update sub district successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('district/:id')
  async updateDistrict(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  await this.masterdataService.updateDistrict(reqBody, id);
      return { success: true, message: "update district successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('department/:id')
  async updateDepartement(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result =  await this.masterdataService.updateDepartement(reqBody, id);
      return { success: true, message: "update department successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }

  @Put('region/:id')
  async updateRegion(@Body() reqBody: createReq,@Param('id') id: number) {
    try {
      const result = await this.masterdataService.updateRegion(reqBody, id);
      return { success: true, message: "update region successful" , data: result}
    } catch (err) {
        return { success: false, message: err.message }
    }
  }
  

}
