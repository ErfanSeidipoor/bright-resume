import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { FILE_NOT_FOUND } from "@errors";
import gql from "graphql-tag";
import mongoose from "mongoose";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";
import { File } from "@@back-file/app/models";
import { GetFileByIdFileInputs } from "@dto";

describe("microservice:file getFileById", () => {
  const integrationTestManager = new IntegrationTestManager();
  let helperDB: HelperDB;

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
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

  it("should return FILE_NOT_FOUND if a user attempts to get a file that does not belong to it", async () => {
    const authHeader = generateAuthorizationHeader({});

    const file = await helperDB.createFile({});

    const { errors } = await request<
      { getFileById: File },
      { getFileByIdFileInputs: GetFileByIdFileInputs }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($getFileByIdFileInputs: GetFileByIdFileInputsGQL!) {
            getFileById(getFileByIdFileInputs: $getFileByIdFileInputs) {
              id
              userId
            }
          }
        `
      )
      .variables({ getFileByIdFileInputs: { fileId: file.id } });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(FILE_NOT_FOUND.description);
  });

  it("Should return FILE_NOT_FOUND if a user attempts to get a file but the id is wrong", async () => {
    const authHeader = generateAuthorizationHeader({});

    await helperDB.createFile({});

    const { errors } = await request<
      { getFileById: File },
      { getFileByIdFileInputs: GetFileByIdFileInputs }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($getFileByIdFileInputs: GetFileByIdFileInputsGQL!) {
            getFileById(getFileByIdFileInputs: $getFileByIdFileInputs) {
              id
              userId
            }
          }
        `
      )
      .variables({
        getFileByIdFileInputs: {
          fileId: new mongoose.Types.ObjectId().toString(),
        },
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(FILE_NOT_FOUND.description);
  });

  it("gets a file with valid id", async () => {
    const authHeader = generateAuthorizationHeader({});

    const file = await helperDB.createFile({
      userId: authHeader.token.id,
      isVerified: true,
    });

    const { data, errors } = await request<
      { getFileById: File },
      { getFileByIdFileInputs: GetFileByIdFileInputs }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($getFileByIdFileInputs: GetFileByIdFileInputsGQL!) {
            getFileById(getFileByIdFileInputs: $getFileByIdFileInputs) {
              id
              userId
            }
          }
        `
      )
      .variables({
        getFileByIdFileInputs: {
          fileId: file.id,
        },
      });

    expect(errors).toBeUndefined();
    expect(data.getFileById.id).toBe(file.id);
  });
});
