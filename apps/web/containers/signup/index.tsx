"use client";
import React, { useState } from "react";
import classes from "./index.module.scss";
import Image from "next/image";
import GoogleIcon from "@bright-resume/assets/image/social/google.png";
import FacebookIcon from "@bright-resume/assets/image/social/facebook.png";
import AppleIcon from "@bright-resume/assets/image/social/apple.png";
import Link from "next/link";

type SignupProps = Record<string, never>;

const Signup: React.FC<SignupProps> = () => {
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
    // handle Signup logic here
  };

  return (
    <div className={classes.signup_page}>
      <div className={classes.hero}>
        <div />
      </div>
      <div className={classes.signup_container}>
        <div className={classes.signup_wrapper}>
          <div className={classes.signup_header}>
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

          <form onSubmit={handleSubmit} className={classes.signup_form}>
            <div className={classes.inputField}>
              <label htmlFor="name">Name</label>
              <input
                type="name"
                id="name"
                placeholder="Enter your name"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

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
            </div>
            <div className={classes.terms}>
              <input type="checkbox" />
              <div>I agree to all Term, Privacy Policy and Fees</div>
            </div>
            <button type="submit">Signup</button>
            <div className={classes.signup}>
              Already have an account? <Link href="login">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
