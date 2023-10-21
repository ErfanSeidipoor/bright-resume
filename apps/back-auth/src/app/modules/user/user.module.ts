import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "../../models";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { DBModule } from "../db/db.module";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [DBModule, MongooseModule.forFeature(models)],
  providers: [UserService, UserResolver, JwtService],
})
export class UserModule {}
