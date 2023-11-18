/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { checkEnv } from "@back-common/check-env";
import { EnvironmentVariablesEnum } from "./app/enums";

async function bootstrap() {
  checkEnv(EnvironmentVariablesEnum);
  const app = await NestFactory.create(AppModule);
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);
  const port = 4000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/graphql and http://localhost:${port}/gateway`
  );
}

bootstrap();
