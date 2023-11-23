import { EnvironmentVariablesEnum } from "@@back-file/app/enums";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MinioService as MinioServiceOriginal } from "nestjs-minio-client";
import { BucketItemStat } from "minio";

@Injectable()
export class MinioService {
  constructor(
    private readonly minioService: MinioServiceOriginal,
    private readonly configService: ConfigService
  ) {}

  async getUploadLink(fileId: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.minioService.client.presignedPutObject(
        this.configService.get(EnvironmentVariablesEnum.MINIO_BUCKET),
        fileId,
        24 * 60 * 60,
        function (error, presignedUrl) {
          if (error) reject(error);
          resolve(presignedUrl);
        }
      );
    });
  }

  async getDownloadLink(fileId: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.minioService.client.presignedGetObject(
        this.configService.get(EnvironmentVariablesEnum.MINIO_BUCKET),
        fileId,
        24 * 60 * 60,
        function (err, presignedUrl) {
          if (err) reject(err);
          resolve(presignedUrl);
        }
      );
    });
  }

  async getStatus(fileId: string): Promise<BucketItemStat | undefined> {
    try {
      return await this.minioService.client.statObject(
        this.configService.get(EnvironmentVariablesEnum.MINIO_BUCKET),
        fileId
      );
    } catch (e) {
      return undefined;
    }
  }

  async uploadFile(input: { fileId: string; path: string }): Promise<void> {
    const { fileId, path } = input;
    await this.minioService.client.fPutObject(
      this.configService.get(EnvironmentVariablesEnum.MINIO_BUCKET),
      fileId,
      path
    );
  }
}
