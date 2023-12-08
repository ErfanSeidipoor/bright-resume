import { User } from "@@back-auth/app/models";
import request from "supertest-graphql";
import gql from "graphql-tag";
import { HelperDB, IntegrationTestManager } from "../helper";
import { SignUpAuthInputs } from "@dto";
import { faker } from "@faker-js/faker";
import { USER_WITH_THIS_USERNAME_ALREADY_EXISTS } from "@bright-resume/errors";

describe("microservice:auth SignUp", () => {
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

  it("should return USER_WITH_THIS_USERNAME_ALREADY_EXISTS if a user with this username already exists", async () => {
    const user = await helperDB.createUser({});

    const signUpAuthInputs: SignUpAuthInputs = {
      name: faker.internet.displayName(),
      username: user.username,
      password: faker.internet.password(),
    };

    const { errors } = await request<
      { signUp: User },
      { signUpAuthInputs: SignUpAuthInputs }
    >(integrationTestManager.httpServer)
      .mutate(
        gql`
          mutation ($signUpAuthInputs: SignUpAuthInputsGQL!) {
            signUp(signUpAuthInputs: $signUpAuthInputs) {
              id
              name
              username
              token
            }
          }
        `
      )
      .variables({
        signUpAuthInputs,
      });
    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(
      USER_WITH_THIS_USERNAME_ALREADY_EXISTS.description
    );
  });

  it("should create new user with given information", async () => {
    const signUpAuthInputs: SignUpAuthInputs = {
      name: faker.internet.displayName(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
    };

    const { data } = await request<
      { signUp: User },
      { signUpAuthInputs: SignUpAuthInputs }
    >(integrationTestManager.httpServer)
      .mutate(
        gql`
          mutation ($signUpAuthInputs: SignUpAuthInputsGQL!) {
            signUp(signUpAuthInputs: $signUpAuthInputs) {
              id
              name
              username
              token
            }
          }
        `
      )
      .variables({
        signUpAuthInputs,
      })
      .expectNoErrors();

    expect(data.signUp).toBeDefined();
    expect(data.signUp.username).toBeDefined();
    expect(data.signUp.token).toBeDefined();
    expect(data.signUp.name).toBeDefined();
    expect(data.signUp.password).not.toBeDefined();
  });
});
