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
      {pending ? "Logging in ..." : "Log In"}
    </button>
  );
}

export default function Login() {
  const { form, formRef, state, formAction, logout } = useData();

  return (
    <>
      {state?.message && <div className={classes.error}>{state.message}</div>}

      <form
        {...form}
        ref={formRef}
        className={classes.form}
        action={formAction}
        // onSubmit={handleSubmit(() => formRef.current?.submit())}
      >
        <button onClick={logout}>logout</button>
        <div className={classes.inputField}>
          <label htmlFor="username">Username</label>
          <input
            type="string"
            placeholder="example@space.com"
            autoComplete="on"
            {...form.register("username", { required: true })}
          />
          {form.formState.errors.username && (
            <span className={classes.error}>
              {form.formState.errors.username.message}
            </span>
          )}
        </div>
        <div className={classes.inputField}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            autoComplete="on"
            {...form.register("password", { required: true })}
          />
          {form.formState.errors.password && (
            <span className={classes.error}>
              {form.formState.errors.password.message}
            </span>
          )}
          <div className={classes.forgot_password}>Forgot password?</div>
        </div>

        <Submit />

        <div className={classes.signup}>
          <span>Don’t have an account?</span> <Link href="signup">Sign up</Link>
        </div>
      </form>
    </>
  );
}
