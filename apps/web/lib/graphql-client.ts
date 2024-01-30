import { GraphQLClient } from "graphql-request";
import { getCookie } from "@web/utils/cookie";

export const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);
