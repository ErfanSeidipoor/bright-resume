"use client";

import { FC } from "react";

import {
  ApolloClient,
  ApolloProvider as Provider,
  createHttpLink,
} from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const ApolloProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const client = new ApolloClient({
    link: createHttpLink({
      uri: "/api/graphql",
    }),
    cache: new InMemoryCache({
      dataIdFromObject: (object) => object["id"] as string,
      addTypename: true,
    }),
  });

  return <Provider client={client}>{children}</Provider>;
};
