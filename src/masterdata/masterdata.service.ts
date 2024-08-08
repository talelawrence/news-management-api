import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './entity/region';
import { Repository } from 'typeorm';
import { MainGroupNews } from './entity/maingroupnews';
import { SubGroupNews } from './entity/subgroupnews';
import { Province } from './entity/province';
import { Country } from './entity/country';
import { SubDistrict } from './entity/subdistrict';
import { District } from './entity/district';
import { Departement } from './entity/department';
import { createReq } from './dto/masterdata.dto';

@Injectable()
export class MasterdataService {

    constructor(
        @InjectRepository(MainGroupNews)
        private readonly mainGroupNewRepository: Repository<MainGroupNews>,
        @InjectRepository(SubGroupNews)
        private readonly subGroupNewsRepository: Repository<SubGroupNews>,
        @InjectRepository(Province)
        private readonly provinceRepository: Repository<Province>,
        @InjectRepository(Country)
        private readonly countryRepository: Repository<Country>,
        @InjectRepository(SubDistrict)
        private readonly subDistrictRepository: Repository<SubDistrict>,
        @InjectRepository(District)
        private readonly districtRepository: Repository<District>,
        @InjectRepository(Departement)
        private readonly departementRepository: Repository<Departement>,
        @InjectRepository(Region)
        private readonly regionRepository: Repository<Region>,
        
    ) { }
    
    async getMainGroupNewsMasterDataAll( ) {
        const data = await this.mainGroupNewRepository.find();
        return data;
    }

    async getSubGroupNewsMasterDataAll( ) {
        const data = await this.subGroupNewsRepository.find();
        return data;
    }

    async getProvinceMasterDataAll( ) {
        const data = await this.provinceRepository.find();
        return data;
    }

    async getCountryMasterDataAll( ) {
        const data = await this.countryRepository.find();
        return data;
    }

    async getSubDistrictMasterDataAll( ) {
        const data = await this.subDistrictRepository.find();
        return data;
    }

    async getDistrictMasterDataAll( ) {
        const data = await this.districtRepository.find();
        return data;
    }

    async getDepartementMasterDataAll( ) {
        const data = await this.departementRepository.find();
        return data;
    }

    async getRegionMasterDataAll( ) {
        const data = await this.regionRepository.find();
        return data;
    }

    async getSubGroupNewsMasterDataById(id: number) {
        const data = await this.subGroupNewsRepository.findBy({main_id: id});
        return data;
    }

    async createMainGroupNews(data: createReq) {
        const result = await this.mainGroupNewRepository.save(data);
        return result;
    } 

    async createSubGroupNews(data: createReq) {
        const result = await this.subGroupNewsRepository.save(data);
        return result;
    }

    async createProvince(data: createReq) {
        const result = await this.provinceRepository.save(data);
        return result;
    }

    async createCountry(data: createReq) {
        const result = await this.countryRepository.save(data);
        return result;
    }

    async createSubDistrict(data: createReq) {
        const result = await this.subDistrictRepository.save(data);
        return result;
    }

    async createDistrict(data: createReq) {
        const result = await this.districtRepository.save(data);
        return result;
    }

    async createDepartement(data: createReq) {
        const result = await this.departementRepository.save(data);
        return result;
    }

    async createRegion(data: createReq) {
        const result = await this.regionRepository.save(data);
        return result;
    }
}
