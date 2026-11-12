import { Resume } from "@@back-resume/app/models/resume.model";
import { PageInfo } from "@back-common/model";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { GetResumesResumeArgs, PaginationArgs } from "@dto";
import gql from "graphql-tag";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";

describe("microservice:resume getResumes", () => {
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

  it("gets a list of resumes with valid inputs", async () => {
    const authHeader = generateAuthorizationHeader({});

    const COUNT = 10;
    const PAGE = 1;

    await helperDB.createMultipleResumes(COUNT, {
      userId: authHeader.token.id,
    });

    const { data } = await request<
      {
        getResumes: {
          edges: Resume[];
          pageInfo: PageInfo;
        };
      },
      {
        getResumesResumeArgs: GetResumesResumeArgs;
        paginationArgs: PaginationArgs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query (
            $getResumesResumeArgs: GetResumesResumeArgsGQL!
            $paginationArgs: PaginationArgsGQL!
          ) {
            getResumes(
              getResumesResumeArgs: $getResumesResumeArgs
              paginationArgs: $paginationArgs
            ) {
              edges {
                id
                userId
                name
              }
              pageInfo {
                edgeCount
                totalPages
                currentPage
              }
            }
          }
        `
      )
      .variables({
        getResumesResumeArgs: {},
        paginationArgs: { limit: COUNT, page: PAGE },
      })
      .expectNoErrors();

    expect(data.getResumes.edges).toHaveLength(COUNT);
    expect(data.getResumes.pageInfo.currentPage).toBe(PAGE);
    expect(data.getResumes.pageInfo.edgeCount).toBe(COUNT);
  });
});
