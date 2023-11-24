import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { setupApp } from "./setup-app";
import { checkEnv } from "@back-common/check-env";
import { EnvironmentVariablesEnum } from "./app/enums";

async function bootstrap() {
  checkEnv(EnvironmentVariablesEnum);
  const app = await NestFactory.create(AppModule);
  setupApp(app);
  const port = 4001;
  app.setGlobalPrefix("auth");
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/graphql and http://localhost:${port}/auth`
  );
}

bootstrap();
