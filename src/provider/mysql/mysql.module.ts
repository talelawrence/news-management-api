import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { region } from 'src/masterdata/entity/region';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const logger = new Logger(MysqlModule.name);

                const host = configService.get<string>('db.mysql.host');
                const port = configService.get<number>('db.mysql.port');
                const user = configService.get<string>('db.mysql.user');
                const pass = configService.get<string>('db.mysql.pass');
                const name = configService.get<string>('db.mysql.name');
                const debug = configService.get<boolean>('db.mysql.debug');

                return {
                    type: 'mysql',
                    host: host,
                    port: port,
                    username: user,
                    password: pass,
                    database: name,
                    entities: [region],
                    // synchronize: true,
                    // autoLoadEntities: true,
                    logging: debug,
                    logger: 'advanced-console',
                };
            },
        }),
    ],
})
export class MysqlModule {}
