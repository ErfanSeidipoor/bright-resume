import NextAuth, { User } from "next-auth";
import { authConfig } from "./auth.config";
import { graphqlClient } from "./lib/graphql-client";
import { SignInUsrDocument } from "./gql/graphql";
import { SignInAuthInputs } from "@dto";
import { validate } from "class-validator";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      username: string;
      token: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } & User;
  }
}

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
          const { signIn } = await graphqlClient.request(SignInUsrDocument, {
            username,
            password,
          });
          if (!signIn || !signIn.token) return null;
          return {
            name: signIn.username,
            email: signIn.email,
            token: signIn.token,
          };
        }

        return null;
      },
    }),
  ],
});
