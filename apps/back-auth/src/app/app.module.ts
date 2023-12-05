import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { DBModule } from "./modules/db/db.module";
import { JWTModule } from "./modules/jwt/jwt.module";
import { GraphQLModule } from "./modules/graphql/graphql.module";
import { AuthModule } from "./modules/auth/auth.module";
import { JWTStrategy } from "@back-common/strategies";
import { PassportModule } from "@nestjs/passport";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "./models";
import { GoogleStrategy } from "./strategies";

@Module({
  imports: [
    GraphQLModule,
    PassportModule,
    JWTModule,
    DBModule,
    AuthModule,
    MongooseModule.forFeature(models),
  ],
  controllers: [AppController],
  providers: [JWTStrategy, GoogleStrategy],
})
export class AppModule {}
