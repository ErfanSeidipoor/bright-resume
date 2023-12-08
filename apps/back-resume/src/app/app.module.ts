import { Module } from "@nestjs/common";
import { GraphQLModule } from "./modules/graphql/graphql.module";
import { DBModule } from "./modules/db/db.module";
import { ResumeModule } from "./modules/resume/resume.module";
import { AppController } from "./app.controller";

@Module({
  imports: [GraphQLModule, DBModule, ResumeModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
