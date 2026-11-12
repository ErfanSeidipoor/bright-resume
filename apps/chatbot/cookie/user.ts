import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { CookieKeyEnum } from "./enum";
import { cookies } from "next/headers";

export interface IUserCookie {
  id?: string | null;
  name?: string | null;
  username?: string | null;
  email?: string | null;
  picture?: string | null;
}

export const setUserCookieOption: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: true,
  expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  sameSite: "lax",
  path: "/",
};

const remove = () => {
  cookies().delete(CookieKeyEnum.USER);
};

const set = (userCookie: IUserCookie) => {
  cookies().set(
    CookieKeyEnum.USER,
    JSON.stringify(userCookie),
    setUserCookieOption
  );
};

const get = (): IUserCookie | undefined => {
  const cookieValue = cookies().get(CookieKeyEnum.USER)?.value;
  if (cookieValue) {
    try {
      return JSON.parse(cookieValue) as IUserCookie;
    } catch (error) {
      console.error(error);
    }
  }
};

export const user = { set, get, remove };
