import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoadConfigs } from './common/helper/function/config-loader.helper';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { appRoutes } from './app.routes';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [LoadConfigs],
      ignoreEnvFile: true,
    }),
    RouterModule.register(appRoutes),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
