import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { setupApp } from "./setup-app";
import { checkEnv } from "./checkEnv";

async function bootstrap() {
  checkEnv();
  const app = await NestFactory.create(AppModule);
  setupApp(app);
  const port = 4003;
  app.setGlobalPrefix("auth");
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/graphql and http://localhost:${port}/auth`
  );
}

bootstrap();
