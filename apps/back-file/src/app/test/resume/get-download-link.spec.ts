import { MinioService } from "@@back-file/app/modules/minio/minio.service";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { FILE_NOT_FOUND } from "@bright-resume/errors";
import { GetDownloadLinkFileInputs } from "@dto";
import { FileStatusEnum } from "@enums";
import { faker } from "@faker-js/faker";
import gql from "graphql-tag";
import mongoose from "mongoose";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";

describe("microservice:file getDownloadLink", () => {
  const integrationTestManager = new IntegrationTestManager();
  let helperDB: HelperDB;
  let minioService: MinioService;

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
    minioService = integrationTestManager.app.get(MinioService);
    helperDB = integrationTestManager.helperDB;
  });

  afterEach(async () => {
    await integrationTestManager.afterEach();
  });

  beforeEach(async () => {
    await integrationTestManager.beforeEach();
  });

  afterAll(async () => {
    await integrationTestManager.afterAll();
  });

  it("should return download link", async () => {
    const downloadLink = faker.internet.url();

    const getDownloadLinkSpy = jest
      .spyOn(minioService, "getDownloadLink")
      .mockReturnValue(Promise.resolve(downloadLink));

    const authHeader = generateAuthorizationHeader({});

    const file = await helperDB.createFile({
      isVerified: true,
      userId: authHeader.token.id,
      status: FileStatusEnum.uploaded,
    });

    const getDownloadLinkFileInputs: GetDownloadLinkFileInputs = {
      fileId: file.id,
    };

    const { data, errors } = await request<
      { getDownloadLink: string },
      {
        getDownloadLinkFileInputs: GetDownloadLinkFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($getDownloadLinkFileInputs: GetDownloadLinkFileInputsGQL!) {
            getDownloadLink(
              getDownloadLinkFileInputs: $getDownloadLinkFileInputs
            )
          }
        `
      )
      .variables({
        getDownloadLinkFileInputs,
      });

    expect(errors).toBeUndefined();
    expect(getDownloadLinkSpy).toHaveBeenCalledWith(file.id);
    expect(data.getDownloadLink).toBe(downloadLink);
  });

  it("Should return FILE_NOT_FOUND if the file is has not been uploaded yet", async () => {
    const authHeader = generateAuthorizationHeader({});

    const file = await helperDB.createFile({
      isVerified: true,
      userId: authHeader.token.id,
      status: faker.helpers.arrayElement([
        FileStatusEnum.error,
        FileStatusEnum.waiting,
      ]),
    });

    const getDownloadLinkFileInputs: GetDownloadLinkFileInputs = {
      fileId: file.id,
    };

    const { errors } = await request<
      { getDownloadLink: string },
      {
        getDownloadLinkFileInputs: GetDownloadLinkFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($getDownloadLinkFileInputs: GetDownloadLinkFileInputsGQL!) {
            getDownloadLink(
              getDownloadLinkFileInputs: $getDownloadLinkFileInputs
            )
          }
        `
      )
      .variables({
        getDownloadLinkFileInputs,
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(FILE_NOT_FOUND.description);
  });

  it("Should return FILE_NOT_FOUND if the file is has not been verified yet", async () => {
    const authHeader = generateAuthorizationHeader({});

    const file = await helperDB.createFile({
      userId: authHeader.token.id,
      status: FileStatusEnum.uploaded,
      isVerified: false,
    });

    const getDownloadLinkFileInputs: GetDownloadLinkFileInputs = {
      fileId: file.id,
    };

    const { errors } = await request<
      { getDownloadLink: string },
      {
        getDownloadLinkFileInputs: GetDownloadLinkFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($getDownloadLinkFileInputs: GetDownloadLinkFileInputsGQL!) {
            getDownloadLink(
              getDownloadLinkFileInputs: $getDownloadLinkFileInputs
            )
          }
        `
      )
      .variables({
        getDownloadLinkFileInputs,
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(FILE_NOT_FOUND.description);
  });

  it("Should return FILE_NOT_FOUND if the file is not for the user", async () => {
    const authHeader = generateAuthorizationHeader({});

    const file = await helperDB.createFile({
      userId: new mongoose.Types.ObjectId().toString(),
      status: FileStatusEnum.uploaded,
      isVerified: true,
    });

    const getDownloadLinkFileInputs: GetDownloadLinkFileInputs = {
      fileId: file.id,
    };

    const { errors } = await request<
      { getDownloadLink: string },
      {
        getDownloadLinkFileInputs: GetDownloadLinkFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($getDownloadLinkFileInputs: GetDownloadLinkFileInputsGQL!) {
            getDownloadLink(
              getDownloadLinkFileInputs: $getDownloadLinkFileInputs
            )
          }
        `
      )
      .variables({
        getDownloadLinkFileInputs,
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(FILE_NOT_FOUND.description);
  });
});
