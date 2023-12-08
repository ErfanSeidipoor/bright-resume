import { AppModule } from "@@back-file/app/app.module";
import { setupApp } from "@@back-file/setup-app";
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { HelperDB } from "./helper.db";

export class IntegrationTestManager {
  app: INestApplication;
  helperDB: HelperDB;
  httpServer: any;

  async beforeAll(): Promise<void> {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    this.app = module.createNestApplication();
    setupApp(this.app);

    this.httpServer = this.app.getHttpServer();
    await this.app.init();

    this.helperDB = new HelperDB(this.app);
  }

  async afterAll() {
    await this.app.close();
  }

  async beforeEach() {
    await this.helperDB.dropAllCollections();
  }

  async afterEach() {
    await this.helperDB.dropAllCollections();
    await this.helperDB.dropDatabase();
  }
}
