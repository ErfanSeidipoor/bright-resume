import { Resume } from "@bright-resume/back-resume/app/models/resume.model";
import gql from "graphql-tag";
import { afterEach } from "node:test";
import request from "supertest-graphql";
import { CreateResumeInputsGQL } from "@bright-resume/back-resume/app/modules/resume/dto";
import { IntegrationTestManager } from "../IntegrationTestManager";

describe("microservice:resume CreateResume", () => {
  const integrationTestManager = new IntegrationTestManager();

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
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

  it("creates a resume with valid inputs", async () => {
    const { data } = await request<
      { createResume: Resume },
      { createResumeInputs: CreateResumeInputsGQL }
    >(integrationTestManager.httpServer)
      .mutate(
        gql`
          mutation ($createResumeInputs: CreateResumeInputsGQL!) {
            createResume(createResumeInputs: $createResumeInputs) {
              name
            }
          }
        `
      )
      .variables({
        createResumeInputs: {
          name: "test2",
        },
      })
      .expectNoErrors();

    console.log({ data });
  });
});
