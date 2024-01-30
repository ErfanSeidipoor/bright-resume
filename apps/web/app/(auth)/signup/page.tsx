import React from "react";
import classes from "../index.module.scss";
import SocialLogin from "@web/app/(auth)/login/social";
import SignUp from "./form";

export default async function SignUpPage() {
  return (
    <div className={classes.pageContainer}>
      <div className={classes.hero}>
        <div />
      </div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.header}>
            <h1>
              Sign in to <span>Bright</span> Resume
            </h1>
            <div>Sign up with social account or enter your details</div>
          </div>
          <SocialLogin />
          <SignUp />
        </div>
      </div>
    </div>
  );
}
