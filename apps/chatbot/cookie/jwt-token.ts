import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { CookieKeyEnum } from "./enum";
import { cookies } from "next/headers";

export interface IJwtTokenCookie {
  token: string;
}

export const setJwtTokenCookieOption: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: true,
  expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  sameSite: "lax",
  path: "/",
};

const remove = () => {
  cookies().delete(CookieKeyEnum.JWT_TOKEN);
};

const set = (jwtToken: IJwtTokenCookie) => {
  cookies().set(
    CookieKeyEnum.JWT_TOKEN,
    JSON.stringify(jwtToken),
    setJwtTokenCookieOption
  );
};

const get = (): IJwtTokenCookie | undefined => {
  const cookieValue = cookies().get(CookieKeyEnum.JWT_TOKEN)?.value;
  if (cookieValue) {
    try {
      return JSON.parse(cookieValue) as IJwtTokenCookie;
    } catch (error) {
      return undefined;
    }
  }
};

export const jwtToken = { set, get, remove };
