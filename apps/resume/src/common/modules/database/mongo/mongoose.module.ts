import { Module } from '@nestjs/common';
import { MongooseModule as InnerMongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import paginate from 'mongoose-paginate-v2';
import { TimestampPlugin } from './plugins/mongo-timestamp.Plugin';
import { IdPlugin } from './plugins/mongo-id.Plugin';
import { AppConfigs } from '../../../constant/app-config.constant';
import { MongodbConfig } from '../../../interface/config/mongo-config.interface';
import { Connection } from 'mongoose';
import MongooseDelete from 'mongoose-delete';
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
          connectionFactory: (connection: Connection): Connection => {
            connection.plugin(IdPlugin);
            connection.plugin(TimestampPlugin);
            connection.plugin(paginate);
            connection.plugin(MongooseDelete, {
              deletedAt: true,
              overrideMethods: 'all',
            });
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
