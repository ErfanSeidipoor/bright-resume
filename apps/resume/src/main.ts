import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppConfigs } from './common/constant/app-config.constant';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppConfig } from './common/interface/config/app-config.interface';
import { GlobalValidationPipe } from './common/pipes/global-validation.pipe';
import { SerializerInterceptor } from './common/helper/function/create-serializer-interceptor.helper';
import {
  ALL_EXCEPTION_FILTER_TOKEN,
  AllExceptionsFilter,
} from './common/filters/all-exceptions.filter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  const { port } = configService.get<AppConfig>(AppConfigs.APP);

  app.useGlobalInterceptors(SerializerInterceptor(app));
  app.useGlobalPipes(GlobalValidationPipe);

  app.useGlobalFilters(
    app.get<AllExceptionsFilter>(ALL_EXCEPTION_FILTER_TOKEN)
  );
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  Logger.log(
    `🚀 Application graphql playground is running on: http://localhost:${port}/graphql`
  );
}

bootstrap();
