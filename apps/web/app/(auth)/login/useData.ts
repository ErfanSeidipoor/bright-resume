<<<<<<< HEAD
import { SignInAuthInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { authenticate } from "../actions";
import { useState } from "react";

export const useData = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  const [serverResponse, setServerResponse] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
=======
import "reflect-metadata";
import { SignInAuthInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { signInAction } from "./actions";
import { useRouter } from "next/navigation";

export const useData = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
>>>>>>> 41a41971568212bcbc3d9e608b1411eb082b6816
  } = useForm<SignInAuthInputs>({
    resolver: classValidatorResolver(SignInAuthInputs),
    mode: "onChange",
  });

<<<<<<< HEAD
  const onSubmit = async (data: SignInAuthInputs) => {
    event?.preventDefault();

    if (errors.root) return;
    const result = await formAction(JSON.stringify(data));
    setServerResponse(result);
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    state,
    serverResponse,
=======
  const processForm: SubmitHandler<SignInAuthInputs> = async (data) => {
    const { message, token } = await signInAction(JSON.stringify(data));

    if (message === "success" && token) {
      localStorage.setItem("token", token);
      router.push("/");
    }
  };

  return {
    router,
    register,
    handleSubmit,
    errors,
    isLoading,
    processForm,
>>>>>>> 41a41971568212bcbc3d9e608b1411eb082b6816
  };
};
