import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { GraphQLModule } from "./modules/graphql/graphql.module";
import { DBModule } from "./modules/db/db.module";
import { ResumeModule } from "./modules/resume/resume.module";
import { AppController } from "./app.controller";
import { JWTStrategy } from "@back-common/strategies";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule,
    DBModule,
    ResumeModule,
    PassportModule,
  ],
  controllers: [AppController],
  providers: [JWTStrategy],
})
export class AppModule {}
