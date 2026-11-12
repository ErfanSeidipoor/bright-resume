"use client";

import { QUERY_SIGN_IN_WITH_OATH_AUTH } from "./gql";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { client } from "@chatbot/app/api/client";
import { useToast } from "@resume-template-components/shadcn-ui";
import { SignInWithOAuthTokenQuery } from "@chatbot/gql/graphql";
import { useEffect } from "react";

export const useData = (token: string | undefined) => {
  const { toast } = useToast();
  const router = useRouter();

  const { loading } = useQuery<SignInWithOAuthTokenQuery>(
    QUERY_SIGN_IN_WITH_OATH_AUTH,
    {
      skip: !token,
      context: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message,
        });
      },
      onCompleted: async ({
        signInWithOAuthToken: { username, email, id, name, picture },
      }) => {
        await client.setUserCookie({ email, id, name, picture, username });
        router.push("/studio");
      },
    }
  );

  useEffect(() => {
    if (!token) {
      router.push("/sign-in");
    }
  }, [token, router]);

  return {
    loading,
  };
};
