import { INestApplication, ValidationPipe } from "@nestjs/common";
import { checkEnv } from "@back-common/check-env";
import { EnvironmentVariablesEnum } from "./app/enums";

export const setupApp = async (app: INestApplication) => {
  checkEnv(EnvironmentVariablesEnum);
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
