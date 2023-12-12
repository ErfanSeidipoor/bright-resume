import { Resume } from "@@back-resume/app/models/resume.model";
import { DeleteResumeResumeInputsGQL } from "@back-common/dto";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { RESUME_NOT_FOUND } from "@bright-resume/errors";
import { DeleteResumeResumeInputs } from "@dto";
import gql from "graphql-tag";
import mongoose from "mongoose";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";

describe("microservice:resume DeleteResume", () => {
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

  it("Should return RESUME_NOT_FOUND if a user attempts to delete a resume that does not belong to it", async () => {
    const authHeader = generateAuthorizationHeader({});

    const resume = await helperDB.createResume({});

    const deleteResumeResumeInputs: DeleteResumeResumeInputs = {
      resumeId: resume.id,
    };

    const { errors } = await request<
      { deleteResume: Resume },
      { deleteResumeResumeInputs: DeleteResumeResumeInputsGQL }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation ($deleteResumeResumeInputs: DeleteResumeResumeInputsGQL!) {
            deleteResume(deleteResumeResumeInputs: $deleteResumeResumeInputs) {
              id
            }
          }
        `
      )
      .variables({
        deleteResumeResumeInputs,
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(RESUME_NOT_FOUND.description);
  });

  it("Should return RESUME_NOT_FOUND if a user attempts to delete a resume but the ID is wrong", async () => {
    const authHeader = generateAuthorizationHeader({});

    await helperDB.createResume({});

    const deleteResumeResumeInputs: DeleteResumeResumeInputs = {
      resumeId: new mongoose.Types.ObjectId().toString(),
    };

    const { errors } = await request<
      { deleteResume: Resume },
      { deleteResumeResumeInputs: DeleteResumeResumeInputsGQL }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation ($deleteResumeResumeInputs: DeleteResumeResumeInputsGQL!) {
            deleteResume(deleteResumeResumeInputs: $deleteResumeResumeInputs) {
              id
            }
          }
        `
      )
      .variables({
        deleteResumeResumeInputs,
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(RESUME_NOT_FOUND.description);
  });

  it("deletes a resume with valid inputs", async () => {
    const authHeader = generateAuthorizationHeader({});

    const resume = await helperDB.createResume({ userId: authHeader.token.id });

    const deleteResumeResumeInputs: DeleteResumeResumeInputs = {
      resumeId: resume.id,
    };

    await request<
      { deleteResume: Resume },
      { deleteResumeResumeInputs: DeleteResumeResumeInputsGQL }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation ($deleteResumeResumeInputs: DeleteResumeResumeInputsGQL!) {
            deleteResume(deleteResumeResumeInputs: $deleteResumeResumeInputs) {
              id
            }
          }
        `
      )
      .variables({
        deleteResumeResumeInputs,
      })
      .expectNoErrors();

    const deletedResume = await helperDB.dbService.resumeModel.findById(
      resume.id
    );

    expect(deletedResume).toBeNull();
  });
});
