"use client";

import { MUTATION_SIGN_IN_AUTH } from "./gql";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { SignInAuthInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useToast } from "@resume-template-components/shadcn-ui";
import {
  SignInAuthMutation,
  SignInAuthMutationVariables,
} from "@chatbot/gql/graphql";
import { client } from "@chatbot/app/api/client";

export const useData = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<SignInAuthInputs>({
    resolver: classValidatorResolver(SignInAuthInputs),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [signInAuth, { loading }] = useMutation<
    SignInAuthMutation,
    SignInAuthMutationVariables
  >(MUTATION_SIGN_IN_AUTH, {
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
    onCompleted: async ({ signIn: { email, id, name, picture, username } }) => {
      await client.setUserCookie({
        id,
        email,
        name,
        picture,
        username,
      });
      toast({
        title: "Welcome!",
        description: "Sign In Success!",
      });
      router.push("/studio");
    },
  });

  const onSubmit: SubmitHandler<SignInAuthInputs> = (signInAuthInputs) => {
    signInAuth({ variables: { signInAuthInputs } });
  };

  return {
    form,
    onSubmit,
    loading,
  };
};
