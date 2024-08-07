import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './config/config.module';

@Module({
  imports: [ConfigsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
