import { EnvironmentVariablesEnum } from "@chatbot/enums";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message:
      "Hello Bright-Resume.com website 🚀🚀 mode:" +
      process.env[EnvironmentVariablesEnum.MODE],
  });
}
