"use client";
import React from "react";
import classes from "@web/app/(auth)/index.module.scss";
import Link from "next/link";
import { LoadingCircle } from "@bright-resume/components/Icons";
import { Button } from "@bright-resume/components";
import { useData } from "./useData";

type LoginProps = Record<string, never>;

const Login: React.FC<LoginProps> = () => {
  const { handleSubmit, processForm, register, errors, isLoading } = useData();

  return (
    <form onSubmit={handleSubmit(processForm)} className={classes.form}>
      <div className={classes.inputField}>
        <label htmlFor="username">username</label>
        <input
          type="string"
          placeholder="example@space.com"
          autoComplete="on"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className={classes.error}>This field is required</span>
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
          <span className={classes.error}>This field is required</span>
        )}
        <div className={classes.forgot_password}>Forgot password?</div>
      </div>
      <Button
        type="submit"
        className={classes.submitButton}
        disabled={isLoading}
      >
        Login
      </Button>

      {isLoading && <LoadingCircle height="16px" width="16px" />}
      <div className={classes.signup}>
        <span>Don’t have an account?</span> <Link href="signup">Sign up</Link>
      </div>
    </form>
  );
};

export default Login;
