import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppConfigs } from './common/constant/app-config.constant';
import { Logger } from '@nestjs/common';
import { setupSwagger } from './common/helper/function/setup-swagger.helper';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  const port = configService.get(AppConfigs.APP);

  setupSwagger(app);

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  Logger.log(
    `🚀 Application documents is running on: http://localhost:${port}/docs`
  );
}

bootstrap();
