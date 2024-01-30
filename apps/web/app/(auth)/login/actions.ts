"use server";

import { graphqlClient } from "apps/web/lib/graphql-client";
import { SignInUsrDocument } from "apps/web/gql/graphql";
import { SignInAuthInputs } from "@dto";

export async function signInAction(data: string) {
  const { signIn } = await graphqlClient.request(
    SignInUsrDocument,
    JSON.parse(data)
  );

  if (signIn.token) {
    try {
      return { message: "success", token: signIn.token };
    } catch (e: any) {
      return { message: "fail", errors: e.message };
    }
  }

  return { message: "no token" };
}

export async function socialLogin(formData: FormData) {
  // handle social
}
