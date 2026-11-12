import { gql } from "@apollo/client";

export const QUERY_SIGN_IN_WITH_OATH_AUTH = gql`
  query signInWithOAuthToken {
    signInWithOAuthToken {
      id
      name
      token
      username
      email
      picture
    }
  }
`;
