"use client";

import { MUTATION_SIGN_UP_AUTH } from "./gql";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { SignUpAuthInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useToast } from "@resume-template-components/shadcn-ui";
import {
  SignUpAuthMutation,
  SignUpAuthMutationVariables,
} from "@chatbot/gql/graphql";
import { client } from "@chatbot/app/api/client";

export const useData = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<SignUpAuthInputs>({
    resolver: classValidatorResolver(SignUpAuthInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      password: "",
    },
  });

  const [createProductAdmin, { loading }] = useMutation<
    SignUpAuthMutation,
    SignUpAuthMutationVariables
  >(MUTATION_SIGN_UP_AUTH, {
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
    onCompleted: async ({ signUp: { email, id, name, picture, username } }) => {
      await client.setUserCookie({
        id,
        email,
        name,
        picture,
        username,
      });
      toast({
        title: "Welcome!",
        description: "Sign up Success!",
      });
      router.push("/studio");
    },
  });

  const onSubmit: SubmitHandler<SignUpAuthInputs> = (signUpAuthInputs) => {
    createProductAdmin({ variables: { signUpAuthInputs } });
  };

  return {
    form,
    onSubmit,
    loading,
  };
};
