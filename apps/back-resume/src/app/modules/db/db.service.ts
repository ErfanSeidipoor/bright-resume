import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Resume } from "../../models";
import { Connection, Model } from "mongoose";

@Injectable()
export class DbService {
  constructor(
    @InjectConnection() public readonly connection: Connection,
    @InjectModel(Resume.name) public resumeModel: Model<Resume>
  ) {}

  getConnection(): Connection {
    return this.connection;
  }

  async transaction(fn: () => Promise<void>) {
    const session = await this.resumeModel.db.startSession();

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
