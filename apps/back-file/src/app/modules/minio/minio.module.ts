import { Module } from "@nestjs/common";
import { MinioModule as MinioModuleOriginal } from "nestjs-minio-client";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EnvironmentVariablesEnum } from "@@back-file/app/enums";
import { MinioService } from "./minio.service";

@Module({
  imports: [
    MinioModuleOriginal.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          endPoint: config.get(EnvironmentVariablesEnum.MINIO_ENDPOINT),
          port: parseInt(config.get(EnvironmentVariablesEnum.MINIO_PORT)),
          useSSL: true,
          accessKey: config.get(EnvironmentVariablesEnum.MINIO_ACCESS_KEY),
          secretKey: config.get(EnvironmentVariablesEnum.MINIO_SECRET_KEY),
        };
      },
    }),
  ],
  providers: [MinioService],
  exports: [MinioService],
})
export class MinioModule {}
