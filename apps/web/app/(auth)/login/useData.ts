import { useRef } from "react";
import { SignInAuthInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { authenticate, logoutAction } from "../actions";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

export const useData = () => {
  // const router = useRouter();
  // const session = useSession();

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(authenticate, undefined);
  const form = useForm<SignInAuthInputs>({
    resolver: classValidatorResolver(SignInAuthInputs),
    mode: "onChange",
  });

  // TODO: logout in login page is only for test, should be removed
  function logout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event?.preventDefault();

    logoutAction();
  }

  return {
    form,
    state,
    formRef,
    formAction,
    logout,
  };
};
