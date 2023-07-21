import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppConfigs } from './common/constant/app-config.constant';
import { Logger } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  const GLOBAL_PREFIX = 'api';

  app.setGlobalPrefix(GLOBAL_PREFIX);

  const port = configService.get(AppConfigs.APP);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${GLOBAL_PREFIX}`
  );
  Logger.log(
    `🚀APIs documents is running on: http://localhost:${port}/${GLOBAL_PREFIX}/doc`
  );
}

bootstrap();
