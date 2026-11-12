import { INestApplication, ValidationPipe } from "@nestjs/common";

export const setupApp = async (app: INestApplication) => {
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
