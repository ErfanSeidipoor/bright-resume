import { gql } from "@apollo/client";

export const MUTATION_SIGN_IN_AUTH = gql`
  mutation signInAuth($signInAuthInputs: SignInAuthInputsGQL!) {
    signIn(signInAuthInputs: $signInAuthInputs) {
      id
      name
      username
      email
      token
      picture
      createdAt
    }
  }
`;
