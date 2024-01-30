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
  } = useForm<SignInAuthInputs>({
    resolver: classValidatorResolver(SignInAuthInputs),
    mode: "onChange",
  });

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
  };
};
