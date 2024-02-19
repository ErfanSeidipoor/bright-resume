import { SignUpAuthInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { authenticate } from "../actions";

export const useData = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpAuthInputs>({
    resolver: classValidatorResolver(SignUpAuthInputs),
    mode: "onChange",
  });

  const onSubmit = async (data: SignUpAuthInputs) => {
    event?.preventDefault();

    if (errors.root) return;
    await formAction(JSON.stringify(data));
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    state,
  };
};
