import { Module } from '@nestjs/common';
import { NewsdataService } from './newsdata.service';
import { NewsdataController } from './newsdata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsData } from './entity/newsdata';

@Module({
  imports: [TypeOrmModule.forFeature([NewsData])],
  controllers: [NewsdataController],
  providers: [NewsdataService],
})
export class NewsdataModule {}
