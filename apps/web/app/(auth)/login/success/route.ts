import { GetUserProfileDocument } from "@web/gql/graphql";
import { graphqlClient } from "@web/lib/graphql-client";
import { setCookie } from "@web/utils/cookie";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (token) {
    setCookie(token);
  }

  const response = await graphqlClient.request(GetUserProfileDocument);

  return Response.json(response);
}
