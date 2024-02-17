"use client";
import "reflect-metadata";
import React, { useEffect } from "react";
import classes from "../index.module.scss";
import Link from "next/link";
import { useData } from "./useData";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={classes.submitButton} disabled={pending}>
      Login
    </button>
  );
}

export default function Login() {
  // const router = useRouter();
  const { errors, register, state, serverResponse } = useData();

  useEffect(() => {
    if (state?.status === "authenticated") {
      // router.back();
    }
  }, [state]);

  return (
    <form className={classes.form}>
      <div className={classes.inputField}>
        <label htmlFor="username">Username</label>
        <input
          type="string"
          placeholder="example@space.com"
          autoComplete="on"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className={classes.error}>{errors.username.message}</span>
        )}
      </div>
      <div className={classes.inputField}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          autoComplete="on"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className={classes.error}>{errors.password.message}</span>
        )}
        <div className={classes.forgot_password}>Forgot password?</div>
      </div>

      {errors.root && (
        <span className={classes.error}>{errors.root.message}</span>
      )}

      <Submit />

      <div className={classes.signup}>
        <span>Don’t have an account?</span> <Link href="signup">Sign up</Link>
      </div>
    </form>
  );
}
