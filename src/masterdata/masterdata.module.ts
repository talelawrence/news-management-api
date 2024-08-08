import { Module } from '@nestjs/common';
import { MasterdataService } from './masterdata.service';
import { MasterdataController } from './masterdata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './entity/region';
import { MainGroupNews } from './entity/maingroupnews';
import { Country } from './entity/country';
import { Province } from './entity/province';
import { SubGroupNews } from './entity/subgroupnews';
import { SubDistrict } from './entity/subdistrict';
import { District } from './entity/district';
import { Departement } from './entity/department';

@Module({
  imports: [TypeOrmModule.forFeature([Region, MainGroupNews,Country,Province,SubGroupNews,SubDistrict,District,Departement])],
  controllers: [MasterdataController],
  providers: [MasterdataService],
  exports: [MasterdataService],
})
export class MasterdataModule {}
