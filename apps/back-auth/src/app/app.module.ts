import { Module } from "@nestjs/common";
import { GraphQLModule } from "./modules/graphql/graphql.module";
import { DBModule } from "./modules/db/db.module";
import { JWTModule } from "./modules/jwt/jwt.module";
import { AppController } from "./app.controller";
import { UserModule } from "./modules/user/user.module";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [GraphQLModule, DBModule, UserModule, PassportModule, JWTModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
