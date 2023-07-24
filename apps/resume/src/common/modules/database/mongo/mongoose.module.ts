import { Module } from '@nestjs/common';
import { MongooseModule as InnerMongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
// import { IdPlugin } from "./plugins/mongo-id.Plugin";
import * as paginatePlugin from 'mongoose-paginate-v2';
import { TimestampPlugin } from './plugins/mongo-timestamp.Plugin';
import { IdPlugin } from './plugins/mongo-id.Plugin';
import { AppConfigs } from '../../../constant/app-config.constant';
import { MongodbConfig } from '../../../interface/config/mongo-config.interface';

@Module({
  imports: [
    InnerMongooseModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.get<MongodbConfig>(AppConfigs.MONGO);
        return {
          uri: config.url,
          autoIndex: true,
          connectionFactory: (connection) => {
            connection.plugin(IdPlugin);
            connection.plugin(TimestampPlugin);
            connection.plugin(paginatePlugin);
            return connection;
          },
        };
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class MongooseModule {}
