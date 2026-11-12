import { gql } from "@apollo/client";

export const MUTATION_CREATE_RESUME_RESUME = gql`
  mutation createResume(
    $createResumeResumeInputs: CreateResumeResumeInputsGQL!
  ) {
    createResume(createResumeResumeInputs: $createResumeResumeInputs) {
      id
      title
      userId
      updatedAt
    }
  }
`;
