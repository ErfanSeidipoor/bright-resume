"use server";

import { cookies } from "next/headers";

const cookieKey = "user-token-key";

export async function setCookie(token: string) {
  const oneDay = 24 * 60 * 60 * 1000 * 30;
  cookies().set(cookieKey, token, {
    expires: Date.now() - oneDay,
  });
}

export async function getCookie() {
  const token = await cookies().get(cookieKey)?.value;
  return token;
}
