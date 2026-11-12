import { User } from "@@back-auth/app/models";
import request from "supertest-graphql";
import gql from "graphql-tag";
import { HelperDB, IntegrationTestManager } from "../helper";
import { SignInAuthInputs } from "@dto";
import { faker } from "@faker-js/faker";
import { USERNAME_OR_PASSWORD_IS_INCORRECT } from "@bright-resume/errors";

describe("microservice:auth SignIn", () => {
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

  it("should return USERNAME_OR_PASSWORD_IS_INCORRECT if a user with this username does not exist", async () => {
    const password = faker.internet.password();

    await helperDB.createUser({ password });

    const signInAuthInputs: SignInAuthInputs = {
      username: faker.internet.userName(),
      password,
    };

    const { errors } = await request<
      { signIn: User },
      { signInAuthInputs: SignInAuthInputs }
    >(integrationTestManager.httpServer)
      .mutate(
        gql`
          mutation ($signInAuthInputs: SignInAuthInputsGQL!) {
            signIn(signInAuthInputs: $signInAuthInputs) {
              id
              name
              username
              token
            }
          }
        `
      )
      .variables({
        signInAuthInputs,
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(
      USERNAME_OR_PASSWORD_IS_INCORRECT.description
    );
  });

  it("should return USERNAME_OR_PASSWORD_IS_INCORRECT if the password is incorrect", async () => {
    const user = await helperDB.createUser({});

    const signInAuthInputs: SignInAuthInputs = {
      username: user.username,
      password: faker.internet.password({ length: 50 }),
    };

    const {
      errors: [error],
    } = await request<{ signIn: User }, { signInAuthInputs: SignInAuthInputs }>(
      integrationTestManager.httpServer
    )
      .mutate(
        gql`
          mutation ($signInAuthInputs: SignInAuthInputsGQL!) {
            signIn(signInAuthInputs: $signInAuthInputs) {
              id
              name
              username
              token
            }
          }
        `
      )
      .variables({
        signInAuthInputs,
      });

    expect(error).toBeDefined();
    expect(error.message).toBe(USERNAME_OR_PASSWORD_IS_INCORRECT.description);
  });

  it("should return user information", async () => {
    const password = faker.internet.password();

    const user = await helperDB.createUser({ password });

    const signInAuthInputs: SignInAuthInputs = {
      username: user.username,
      password,
    };

    const { data, errors } = await request<
      { signIn: User },
      { signInAuthInputs: SignInAuthInputs }
    >(integrationTestManager.httpServer)
      .mutate(
        gql`
          mutation ($signInAuthInputs: SignInAuthInputsGQL!) {
            signIn(signInAuthInputs: $signInAuthInputs) {
              id
              name
              username
              token
            }
          }
        `
      )
      .variables({
        signInAuthInputs,
      });

    expect(errors).not.toBeDefined();
    expect(data.signIn).toBeDefined();
    expect(data.signIn.username).toBeDefined();
    expect(data.signIn.token).toBeDefined();
    expect(data.signIn.name).toBeDefined();
    expect(data.signIn.password).not.toBeDefined();
  });
});
