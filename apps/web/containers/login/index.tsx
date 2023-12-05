"use client";
import React, { useState } from "react";
import classes from "./index.module.scss";
import Image from "next/image";
import GoogleIcon from "@bright-resume/assets/image/social/google.png";
import FacebookIcon from "@bright-resume/assets/image/social/facebook.png";
import AppleIcon from "@bright-resume/assets/image/social/apple.png";
import Link from "next/link";

type LoginProps = Record<string, never>;

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <div className={classes.login_page}>
      <div className={classes.hero}>
        <div />
      </div>
      <div className={classes.login_container}>
        <div className={classes.login_wrapper}>
          <div className={classes.login_header}>
            <h1>
              Sign in to <span>Bright</span> Resume
            </h1>
            <div>Sign up with social account or enter your details</div>
          </div>

          <div className={classes.social}>
            <button className={classes.social_item}>
              <Image src={GoogleIcon} alt="google" />
            </button>
            <button className={classes.social_item}>
              <Image src={FacebookIcon} alt="facebook" />
            </button>
            <button className={classes.social_item}>
              <Image src={AppleIcon} alt="apple" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className={classes.login_form}>
            <div className={classes.inputField}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="example@space.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className={classes.inputField}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div className={classes.forgot_password}>Forgot password?</div>
            </div>
            <button type="submit">Login</button>
            <div className={classes.signup}>
              Don’t have an account? <Link href="signup">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
