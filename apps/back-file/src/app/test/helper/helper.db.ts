import { INestApplication } from "@nestjs/common";
import { faker } from "@faker-js/faker";
import { DbService } from "../../modules/db/db.service";
import mongoose from "mongoose";
import { FileReasonEnum, FileStatusEnum, FileTypeEnum } from "@enums";
import { File } from "@@back-file/app/models";

export class HelperDB {
  dbService: DbService;

  constructor(public app: INestApplication) {
    this.dbService = app.get<DbService>(DbService);
  }

  async closeConnection() {
    await this.dbService.connection.close();
  }

  async dropAllCollections() {
    const {
      connection: { collections },
    } = this.dbService;

    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  }

  async dropDatabase() {
    await this.dbService.connection.dropDatabase();
  }

  async createFile(inputs: {
    userId?: string;
    resumeId?: string;
    isVerified?: boolean;
    status?: FileStatusEnum;
  }): Promise<File> {
    const { userId, resumeId, isVerified, status } = inputs;

    const file = await this.dbService.fileModel.create({
      resumeId: resumeId || new mongoose.Types.ObjectId().toString(),
      userId: userId || new mongoose.Types.ObjectId().toString(),
      path: faker.system.filePath(),
      type: faker.helpers.arrayElement(Object.values(FileTypeEnum)),
      reason: faker.helpers.arrayElement(Object.values(FileReasonEnum)),
      status:
        status || faker.helpers.arrayElement(Object.values(FileStatusEnum)),
      isVerified:
        typeof isVerified === "boolean" ? isVerified : faker.datatype.boolean(),
      size: faker.number.int({ min: 1, max: 1000 }),
      name: faker.system.fileName(),
      uploadLink: faker.internet.url(),
    });

    return file;
  }

  async createMultipleFiles(
    count: number,
    inputs: { userId?: string; isVerified?: boolean }
  ): Promise<File[]> {
    const files = [];

    for (let i = 0; i < count; i++) {
      files.push(await this.createFile(inputs));
    }

    return files;
  }
}
