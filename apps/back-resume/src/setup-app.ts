import { INestApplication, ValidationPipe } from "@nestjs/common";
import session = require("express-session");
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

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
};
