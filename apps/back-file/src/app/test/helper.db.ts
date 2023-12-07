import { INestApplication } from "@nestjs/common";
import { DbService } from "../modules/db/db.service";

export class HelperDB {
  DBservice: DbService;

  constructor(public app: INestApplication) {
    this.DBservice = app.get<DbService>(DbService);
  }

  async closeConnection() {
    await this.DBservice.connection.close();
  }

  async dropAllCollections() {
    const {
      connection: { collections },
    } = this.DBservice;

    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  }

  async dropDatabase() {
    await this.DBservice.connection.dropDatabase();
  }
}
