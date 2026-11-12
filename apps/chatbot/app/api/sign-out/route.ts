import { cookie } from "@chatbot/cookie";
import { NextResponse } from "next/server";

export async function POST() {
  cookie.user.remove();
  cookie.jwtToken.remove();
  return NextResponse.json({});
}
