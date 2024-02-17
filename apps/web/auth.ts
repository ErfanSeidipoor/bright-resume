import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { graphqlClient } from "./lib/graphql-client";
import { SignInUsrDocument } from "./gql/graphql";
import { SignInAuthInputs } from "@dto";
import { validate } from "class-validator";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { POST, GET },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const user = new SignInAuthInputs();
        user.username = username;
        user.password = password;
        const errors = await validate(user);

        if (errors.length === 0) {
          const response = await graphqlClient.request(SignInUsrDocument, {
            username,
            password,
          });
          if (!response.signIn || !response.signIn.token) return null;
          return await response.signIn;
        }

        return null;
      },
    }),
  ],
});
