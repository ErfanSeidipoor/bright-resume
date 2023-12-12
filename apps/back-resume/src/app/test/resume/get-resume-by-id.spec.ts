import { Resume } from "@@back-resume/app/models/resume.model";
import { DeleteResumeResumeInputsGQL } from "@back-common/dto";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { RESUME_NOT_FOUND } from "@bright-resume/errors";
import { DeleteResumeResumeInputs, GetResumeByIdResumeArgs } from "@dto";
import gql from "graphql-tag";
import mongoose from "mongoose";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";

describe("microservice:resume getResumeById", () => {
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

  it("Should return RESUME_NOT_FOUND if a user attempts to get a resume that does not belong to it", async () => {
    const authHeader = generateAuthorizationHeader({});

    const resume = await helperDB.createResume({});

    const {
      errors: [error],
    } = await request<{ getResumeById: Resume }, { resumeId: string }>(
      integrationTestManager.httpServer
    )
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($resumeId: String!) {
            getResumeById(resumeId: $resumeId) {
              id
              userId
            }
          }
        `
      )
      .variables({ resumeId: resume.id });

    expect(error).toBeDefined();
    expect(error.message).toBe(RESUME_NOT_FOUND.description);
  });

  it("Should return RESUME_NOT_FOUND if a user attempts to get a resume but the ID is wrong", async () => {
    const authHeader = generateAuthorizationHeader({});

    await helperDB.createResume({ userId: authHeader.token.id });

    const { errors } = await request<
      { getResumeById: Resume },
      { resumeId: string }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($resumeId: String!) {
            getResumeById(resumeId: $resumeId) {
              id
              userId
            }
          }
        `
      )
      .variables({ resumeId: new mongoose.Types.ObjectId().toString() });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(RESUME_NOT_FOUND.description);
  });

  it("gets a resume with valid id", async () => {
    const authHeader = generateAuthorizationHeader({});

    const resume = await helperDB.createResume({ userId: authHeader.token.id });

    const { data } = await request<
      { getResumeById: Resume },
      { resumeId: string }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query ($resumeId: String!) {
            getResumeById(resumeId: $resumeId) {
              id
              userId
            }
          }
        `
      )
      .variables({ resumeId: resume.id })
      .expectNoErrors();

    expect(data.getResumeById.id).toBe(resume.id);
  });
});
