import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './config/config.module';
import { MasterdataModule } from './masterdata/masterdata.module';
import { MysqlModule } from './provider/mysql/mysql.module';

@Module({
  imports: [
    ConfigsModule, 
    MasterdataModule,
    MysqlModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
