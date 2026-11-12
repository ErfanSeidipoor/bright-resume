import { gql } from "@apollo/client";

export const MUTATION_DELETE_RESUME_RESUME = gql`
  mutation deleteResumeResume(
    $deleteResumeResumeInputs: DeleteResumeResumeInputsGQL!
  ) {
    deleteResume(deleteResumeResumeInputs: $deleteResumeResumeInputs) {
      id
      title
    }
  }
`;
