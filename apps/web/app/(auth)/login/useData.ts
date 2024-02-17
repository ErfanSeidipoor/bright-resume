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
  } = useForm<SignInAuthInputs>({
    resolver: classValidatorResolver(SignInAuthInputs),
    mode: "onChange",
  });

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
  };
};
