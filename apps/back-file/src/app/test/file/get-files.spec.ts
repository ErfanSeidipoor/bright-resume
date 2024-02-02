import { PageInfo } from "@back-common/model";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { GetFilesFileInputs, PaginationArgs } from "@dto";
import gql from "graphql-tag";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";
import { File } from "@@back-file/app/models";

describe("microservice:file getFiles", () => {
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

  it("gets a list of files with valid inputs", async () => {
    const authHeader = generateAuthorizationHeader({});

    const COUNT = 10;
    const PAGE = 1;

    await helperDB.createMultipleFiles(COUNT, {
      userId: authHeader.token.id,
      isVerified: true,
    });

    const { data } = await request<
      {
        getFiles: {
          edges: File[];
          pageInfo: PageInfo;
        };
      },
      {
        getFilesFileInputs: GetFilesFileInputs;
        paginationArgs: PaginationArgs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .query(
        gql`
          query (
            $getFilesFileInputs: GetFilesFileInputsGQL!
            $paginationArgs: PaginationArgsGQL!
          ) {
            getFiles(
              getFilesFileInputs: $getFilesFileInputs
              paginationArgs: $paginationArgs
            ) {
              edges {
                id
                userId
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
        getFilesFileInputs: {},
        paginationArgs: { limit: COUNT, page: PAGE },
      })
      .expectNoErrors();

    expect(data.getFiles.edges).toHaveLength(COUNT);
    expect(data.getFiles.pageInfo.currentPage).toBe(PAGE);
    expect(data.getFiles.pageInfo.edgeCount).toBe(COUNT);
  });
});
