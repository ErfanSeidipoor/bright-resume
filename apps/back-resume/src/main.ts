import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { setupApp } from "./setup-app";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupApp(app);
  const port = 4001;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/graphql`);
}

bootstrap();
