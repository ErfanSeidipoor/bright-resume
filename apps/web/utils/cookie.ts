"use server";

import { cookies } from "next/headers";

const cookieKey = "user-token-key";

export async function setCookie(token: string) {
  const oneDay = 24 * 60 * 60 * 1000 * 30;
  cookies().set(cookieKey, token, {
    expires: Date.now() - oneDay,
  });
  console.log("cookieStore33", cookies().get(cookieKey)?.value);
}

export async function getCookie() {
  console.log("cookieStore22", await cookies().getAll());
  const token = await cookies().get(cookieKey)?.value;
  return token;
}
