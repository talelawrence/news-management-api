import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './config/config.module';
import { MasterdataModule } from './masterdata/masterdata.module';
import { MysqlModule } from './provider/mysql/mysql.module';
import { NewsdataModule } from './newsdata/newsdata.module';
import { UploadsModule } from './uploads/uploads.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads', // The URL at which the files will be available
    }),
    ConfigsModule, 
    MasterdataModule,
    MysqlModule,
    NewsdataModule,
    UploadsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
