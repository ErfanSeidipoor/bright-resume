import { gql } from "@apollo/client";

export const MUTATION_SIGN_UP_AUTH = gql`
  mutation signUpAuth($signUpAuthInputs: SignUpAuthInputsGQL!) {
    signUp(signUpAuthInputs: $signUpAuthInputs) {
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
