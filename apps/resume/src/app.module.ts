import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoadConfigs } from './common/helper/function/config-loader.helper';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { appRoutes } from './app.routes';
import { DatabaseModule } from './common/modules/database/database.module';
import {
  ALL_EXCEPTION_FILTER_TOKEN,
  AllExceptionsFilter,
} from './common/filters/all-exceptions.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [LoadConfigs],
      ignoreEnvFile: true,
    }),
    RouterModule.register(appRoutes),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: ALL_EXCEPTION_FILTER_TOKEN, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
