"use client";
import { signUpAction } from "./actions";
import classes from "../index.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { useFormState, useFormStatus } from "react-dom";
import { SignUpAuthInputs } from "@dto";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@bright-resume/components";

const initialState = {
  message: "",
};

export default async function SignUp() {
  const router = useRouter();
  // const [state, formAction] = useFormState(signUpAction, initialState);
  // const { pending } = useFormStatus();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<SignUpAuthInputs>();

  const processForm: SubmitHandler<SignUpAuthInputs> = async (data) => {
    const { message } = await signUpAction(data);

    if (message === "success") {
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(processForm)} className={classes.form}>
      <div className={classes.inputField}>
        <label htmlFor="name">Name</label>
        <input type="name" name="name" placeholder="Enter your name" />
      </div>

      <div className={classes.inputField}>
        <label htmlFor="email">Username</label>
        <input
          type="username"
          name="username"
          placeholder="What do we call you?"
          autoComplete="on"
        />
      </div>
      <div className={classes.inputField}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password" />
      </div>
      <div className={classes.terms}>
        <input type="checkbox" />
        <div>I agree to all Term, Privacy Policy and Fees</div>
      </div>
      <Button
        type="submit"
        className={classes.submitButton}
        disabled={isLoading}
      >
        Sign up
      </Button>
      <div className={classes.signup}>
        <span>Already have an account? </span>{" "}
        <Link href="/login">Sign in</Link>
      </div>
    </form>
  );
}
