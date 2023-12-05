import { INestApplication } from "@nestjs/common";
import { DBService } from "../modules/db/db.service";

export class HelperDB {
  DBservice: DBService;

  constructor(public app: INestApplication) {
    this.DBservice = app.get<DBService>(DBService);
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
