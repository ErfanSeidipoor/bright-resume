import { User } from "@@back-auth/app/models";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { USER_NOT_FOUND } from "@bright-resume/errors";
import gql from "graphql-tag";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";

describe("microservice:auth GetProfile", () => {
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

  it("should return user information", async () => {
    const user = await helperDB.createUser({});
    const authHeader = generateAuthorizationHeader({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    const { data, errors } = await request<{ getProfile: User }>(
      integrationTestManager.httpServer
    )
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query {
            getProfile {
              id
              name
              username
              email
              token
            }
          }
        `
      );

    expect(errors).not.toBeDefined();
    expect(data.getProfile).toBeDefined();
    expect(data.getProfile.username).toBeDefined();
    expect(data.getProfile.token).toBeNull();
    expect(data.getProfile.name).toBeDefined();
    expect(data.getProfile.password).not.toBeDefined();
  });

  it("should return USER_NOT_FOUND if user doesn't exist", async () => {
    const authHeader = generateAuthorizationHeader({});

    const { errors } = await request<{ getProfile: User }>(
      integrationTestManager.httpServer
    )
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query {
            getProfile {
              id
              name
              username
              email
              token
            }
          }
        `
      );

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(USER_NOT_FOUND.description);
  });

  it("should return UNAuthenticated if user doesn't exist", async () => {
    const { errors } = await request<{ getProfile: User }>(
      integrationTestManager.httpServer
    ).query(
      gql`
        query {
          getProfile {
            id
            name
            username
            email
            token
          }
        }
      `
    );

    expect(errors).toBeDefined();
    expect(errors[0].extensions.code).toBe("UNAUTHENTICATED");
  });
});
