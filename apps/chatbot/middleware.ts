import { NextResponse, type NextRequest } from "next/server";
import { cookie } from "./cookie";
import { getNestedValue, removeKeyFromObject } from "@utils";
import { CookieKeyEnum } from "./cookie/enum";
import { IJwtTokenCookie, setJwtTokenCookieOption } from "./cookie/jwt-token";
import { EnvironmentVariablesEnum } from "./enums";

export async function middleware(request: NextRequest) {
  const jwtToken = cookie.jwtToken.get();
  const requestHeaders = new Headers(request.headers);

  let body: object | undefined;
  try {
    body = await request.json();
  } catch (error) {
    console.log("error request");
  }

  if (body) {
    try {
      let token = "";
      if (requestHeaders.get("Authorization")) {
        token = requestHeaders.get("Authorization")!;
      } else if (jwtToken) {
        token = "Bearer " + jwtToken.token;
      }

      const response = await fetch(process.env["BACK_URL"] + "/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(body),
      });

      const responseBody = await response.json();
      const tokenValue = getNestedValue(responseBody, "token");

      const responseToClient = NextResponse.json(
        process.env[EnvironmentVariablesEnum.MODE] === "local"
          ? responseBody
          : removeKeyFromObject(responseBody, "token")
      );

      if (tokenValue) {
        const jwtToken: IJwtTokenCookie = { token: tokenValue };
        responseToClient.cookies.set(
          CookieKeyEnum.JWT_TOKEN,
          JSON.stringify(jwtToken),
          setJwtTokenCookieOption
        );
      }
      return responseToClient;
    } catch (error) {
      console.log({ error });
      return NextResponse.error();
    }
  }

  return NextResponse.next();
}

// // See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/graphql",
};
