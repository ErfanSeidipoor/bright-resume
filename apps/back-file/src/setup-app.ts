import { INestApplication, ValidationPipe } from "@nestjs/common";
import { checkEnv } from "./checkEnv";

export const setupApp = async (app: INestApplication) => {
  checkEnv();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      forbidUnknownValues: true,
    })
  );
};
