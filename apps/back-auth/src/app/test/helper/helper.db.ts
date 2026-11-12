import { User } from "@@back-auth/app/models";
import { faker } from "@faker-js/faker";
import { INestApplication } from "@nestjs/common";
import mongoose from "mongoose";
import { DbService } from "../../modules/db/db.service";
import { generateHashPassword } from "@back-common/helpers";

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

  async createUser(inputs: {
    userId?: string;
    password?: string;
  }): Promise<User> {
    const { userId, password } = inputs;

    const user = await this.dbService.userModel.create({
      userId: userId || new mongoose.Types.ObjectId().toString(),
      email: faker.internet.email(),
      password: await generateHashPassword(
        password || faker.internet.password({ length: 10 })
      ),
      name: faker.internet.displayName(),
      username: faker.internet.userName(),
      picture: faker.internet.avatar(),
    });

    return user;
  }
}
