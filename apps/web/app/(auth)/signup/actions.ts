"use server";

import { graphqlClient } from "apps/web/lib/graphql-client";
import { SignUpUsrDocument } from "apps/web/gql/graphql";

import { setCookie } from "@web/utils/cookie";
import { SignUpAuthInputs } from "@dto";

export async function signUpAction(data: SignUpAuthInputs) {
  const { signUp } = await graphqlClient.request(SignUpUsrDocument, data);

  if (signUp.token) {
    try {
      setCookie(signUp.token);
      return { message: "success" };
    } catch (e) {
      console.log("e", e);
      return { message: "fail" };
    }
  }

  return { message: "no token" };
}

export async function socialLogin(formData: FormData) {
  // handle social
}
