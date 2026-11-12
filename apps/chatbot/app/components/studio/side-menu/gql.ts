import { gql } from "@apollo/client";

export const QUERY_GET_RESUMES_RESUME = gql`
  query getResumes(
    $getResumesResumeArgs: GetResumesResumeArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getResumes(
      getResumesResumeArgs: $getResumesResumeArgs
      paginationArgs: $paginationArgs
    ) {
      edges {
        id
        title
        userId
        updatedAt
      }
      pageInfo {
        totalEdges
        edgeCount
        edgesPerPage
        totalPages
        currentPage
      }
    }
  }
`;
