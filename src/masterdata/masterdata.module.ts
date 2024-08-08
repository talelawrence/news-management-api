import { Module } from '@nestjs/common';
import { MasterdataService } from './masterdata.service';
import { MasterdataController } from './masterdata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { region } from './entity/region';

@Module({
  imports: [TypeOrmModule.forFeature([region])],
  controllers: [MasterdataController],
  providers: [MasterdataService],
  exports: [MasterdataService],
})
export class MasterdataModule {}
