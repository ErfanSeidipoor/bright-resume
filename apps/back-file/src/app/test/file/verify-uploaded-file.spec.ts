import { File } from "@@back-file/app/models";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import {
  FILE_NOT_FOUND,
  THE_FILE_HAS_ALREADY_BEEN_APPROVED,
  THE_FILE_HAS_NOT_BEEN_UPLOADED_YET,
} from "@bright-resume/errors";
import { VerifyUploadedFileFileInputs } from "@dto";
import gql from "graphql-tag";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";
import { MinioService } from "@@back-file/app/modules/minio/minio.service";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import { FileStatusEnum } from "@enums";

describe("microservice:file VerifyUploadedFile", () => {
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

  it("should return the verified file", async () => {
    jest.spyOn(minioService, "getStatus").mockReturnValue(
      Promise.resolve({
        size: faker.number.int({ min: 1, max: 1000 }),
        etag: faker.string.uuid(),
        lastModified: faker.date.past(),
        metaData: {},
        versionId: null,
      })
    );

    const authHeader = generateAuthorizationHeader({});
    const file = await helperDB.createFile({
      isVerified: false,
      userId: authHeader.token.id,
    });

    const { data, errors } = await request<
      { verifyUploadedFile: File },
      {
        verifyUploadedFileFileInputs: VerifyUploadedFileFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation (
            $verifyUploadedFileFileInputs: VerifyUploadedFileFileInputsGQL!
          ) {
            verifyUploadedFile(
              verifyUploadedFileFileInputs: $verifyUploadedFileFileInputs
            ) {
              id
              userId
              resumeId
              path
              type
              reason
              status
              isVerified
              size
              hash
              name
              uploadLink
            }
          }
        `
      )
      .variables({
        verifyUploadedFileFileInputs: {
          fileId: file.id,
        },
      });

    expect(errors).toBeUndefined();
    expect(data.verifyUploadedFile.isVerified).toBeTruthy();
    expect(data.verifyUploadedFile.userId).toBe(file.userId);
    expect(data.verifyUploadedFile.resumeId).toBe(file.resumeId);
    expect(data.verifyUploadedFile.path).toBe(file.path);
    expect(data.verifyUploadedFile.type).toBe(file.type);
    expect(data.verifyUploadedFile.reason).toBe(file.reason);
    expect(data.verifyUploadedFile.status).toBe(FileStatusEnum.uploaded);
  });

  it("Should return FILE_NOT_FOUND if the file verified before", async () => {
    const authHeader = generateAuthorizationHeader({});
    await helperDB.createFile({
      isVerified: true,
      userId: authHeader.token.id,
    });

    const { errors } = await request<
      { verifyUploadedFile: File },
      {
        verifyUploadedFileFileInputs: VerifyUploadedFileFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation (
            $verifyUploadedFileFileInputs: VerifyUploadedFileFileInputsGQL!
          ) {
            verifyUploadedFile(
              verifyUploadedFileFileInputs: $verifyUploadedFileFileInputs
            ) {
              id
            }
          }
        `
      )
      .variables({
        verifyUploadedFileFileInputs: {
          fileId: new mongoose.Types.ObjectId().toString(),
        },
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(FILE_NOT_FOUND.description);
  });

  it("Should return THE_FILE_HAS_ALREADY_BEEN_APPROVED if the file verified before", async () => {
    const authHeader = generateAuthorizationHeader({});
    const file = await helperDB.createFile({
      isVerified: true,
      userId: authHeader.token.id,
    });

    const { errors } = await request<
      { verifyUploadedFile: File },
      {
        verifyUploadedFileFileInputs: VerifyUploadedFileFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation (
            $verifyUploadedFileFileInputs: VerifyUploadedFileFileInputsGQL!
          ) {
            verifyUploadedFile(
              verifyUploadedFileFileInputs: $verifyUploadedFileFileInputs
            ) {
              id
            }
          }
        `
      )
      .variables({
        verifyUploadedFileFileInputs: {
          fileId: file.id,
        },
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(
      THE_FILE_HAS_ALREADY_BEEN_APPROVED.description
    );
  });

  it("Should return THE_FILE_HAS_NOT_BEEN_UPLOADED_YET if the file didn't upload before", async () => {
    jest
      .spyOn(minioService, "getStatus")
      .mockReturnValue(Promise.resolve(undefined));

    const authHeader = generateAuthorizationHeader({});
    const file = await helperDB.createFile({
      isVerified: false,
      userId: authHeader.token.id,
    });

    const { errors } = await request<
      { verifyUploadedFile: File },
      {
        verifyUploadedFileFileInputs: VerifyUploadedFileFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation (
            $verifyUploadedFileFileInputs: VerifyUploadedFileFileInputsGQL!
          ) {
            verifyUploadedFile(
              verifyUploadedFileFileInputs: $verifyUploadedFileFileInputs
            ) {
              id
            }
          }
        `
      )
      .variables({
        verifyUploadedFileFileInputs: {
          fileId: file.id,
        },
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(
      THE_FILE_HAS_NOT_BEEN_UPLOADED_YET.description
    );
  });
});
