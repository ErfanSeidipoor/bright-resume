import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { File } from "@@back-file/app/models";
import { Connection, Model } from "mongoose";

@Injectable()
export class DBService {
  constructor(
    @InjectConnection() public readonly connection: Connection,
    @InjectModel(File.name) public fileModel: Model<File>
  ) {}

  getConnection(): Connection {
    return this.connection;
  }

  async transaction(fn: () => Promise<void>) {
    const session = await this.fileModel.db.startSession();

    try {
      session.startTransaction();
      await fn();
      await session.commitTransaction();
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}
