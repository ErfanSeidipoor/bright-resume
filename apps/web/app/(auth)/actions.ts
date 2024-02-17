"use server";

import { signIn } from "@web/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function authenticate(prevState: any, data: string) {
  try {
    const user = await signIn("credentials", JSON.parse(data));

    return { message: "success", user: JSON.stringify(user) };
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Invalid credentials.",
          };
        default:
          return {
            message: "Something went wrong.",
          };
      }
    }

    return { message: "fail", errors: JSON.stringify(error) };
  }
}

export async function signUpAction(prevState: any, data: string) {
  try {
    const user = await signIn("credentials", JSON.parse(data));

    return { message: "success", user: JSON.stringify(user) };
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Invalid credentials.",
          };
        default:
          return {
            message: "Something went wrong.",
          };
      }
    }

    return { message: "fail", errors: JSON.stringify(error) };
  }
}

export async function socialLogin(formData: FormData) {
  const google = formData.get("google");
  const github = formData.get("github");
  const linkedin = formData.get("linkedin");

  if (google) {
    redirect("https://auth-development.bright-resume.com/auth/login/google");
  }
  if (github) {
    redirect("https://auth-development.bright-resume.com/auth/login/github");
  }

  if (linkedin) {
    redirect("https://auth-development.bright-resume.com/auth/login/linkedin");
  }
}
