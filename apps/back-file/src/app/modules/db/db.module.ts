import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DbService } from "./db.service";
import { models } from "../../models";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL, {
      dbName: process.env.DATABASE_NAME,
    }),
    MongooseModule.forFeature(models),
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DBModule {}
