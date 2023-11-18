import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "../../models";
import { FileResolver } from "./file.resolver";
import { FileService } from "./file.service";
import { DBModule } from "../db/db.module";
import { MinioModule } from "../minio/minio.module";
import { BullModule } from "../bull/bull.module";

@Module({
  imports: [
    DBModule,
    MinioModule,
    BullModule,
    MongooseModule.forFeature(models),
  ],
  providers: [FileService, FileResolver],
})
export class FileModule {}
