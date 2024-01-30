import { graphql } from "apps/web/gql";

export const SignInUserDocument = graphql(/* GraphQL */ `
  mutation signInUsr($username: String!, $password: String!) {
    signIn(signInAuthInputs: { username: $username, password: $password }) {
      token
    }
  }
`);

export const SignUpUserDocument = graphql(/* GraphQL */ `
  mutation SignUpUsr($name: String!, $username: String!, $password: String!) {
    signUp(
      signUpAuthInputs: {
        name: $name
        username: $username
        password: $password
      }
    ) {
      token
    }
  }
`);

export const getUserProfileDocument = graphql(/* GraphQL */ `
  query getUserProfile {
    getProfile {
      name
      username
      email
      createdAt
      updatedAt
    }
  }
`);
