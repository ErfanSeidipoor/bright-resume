import { cookie } from "@chatbot/cookie";
import { IUserCookie } from "@chatbot/cookie/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: IUserCookie;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
  cookie.user.set(body);
  return NextResponse.json({ status: 200 });
}
