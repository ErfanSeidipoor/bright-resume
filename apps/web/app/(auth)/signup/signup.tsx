"use client";

import classes from "../index.module.scss";
import Link from "next/link";
import { Button } from "@bright-resume/components";
import { useData } from "./useData";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={classes.submitButton} disabled={pending}>
      Sign up
    </button>
  );
}

export default function SignUp() {
  const { register, handleSubmit, onSubmit } = useData();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <div className={classes.inputField}>
        <label htmlFor="name">Name</label>
        <input
          type="name"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
      </div>

      <div className={classes.inputField}>
        <label htmlFor="email">Username</label>
        <input
          type="username"
          placeholder="What do we call you?"
          autoComplete="on"
          {...register("username", { required: true })}
        />
      </div>
      <div className={classes.inputField}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
      </div>
      <div className={classes.terms}>
        <input type="checkbox" />
        <div>I agree to all Term, Privacy Policy and Fees</div>
      </div>
      <Submit />
      <div className={classes.signup}>
        <span>Already have an account? </span> <Link href="login">Sign in</Link>
      </div>
    </form>
  );
}
