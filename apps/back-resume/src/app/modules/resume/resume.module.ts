import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "../../models";
import { ResumeResolver } from "./resume.resolver";
import { ResumeService } from "./resume.service";
import { DBModule } from "../db/db.module";

@Module({
  imports: [DBModule, MongooseModule.forFeature(models)],
  providers: [ResumeService, ResumeResolver],
})
export class ResumeModule {}
