"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import FAQImage from "@bright-resume/assets/image/faq.png";
import AppleLogo from "@bright-resume/assets/image/social/apple.png";
import GoogleLogo from "@bright-resume/assets/image/social/google.png";
import FacebookLogo from "@bright-resume/assets/image/social/facebook.png";

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
    <div className={styles.login_page}>
      <div className={styles.hero}>
        <Image src={FAQImage} alt="hero" />
      </div>
      <div className={styles.login_wrapper}>
        <div className={styles.login_header}>
          <h1>
            Sign in to <span>Bright</span> Resume
          </h1>
          <div>Sign up with social account or enter your details</div>
        </div>

        <div className={styles.social}>
          <button className={styles.social_item}>
            <Image src={FacebookLogo} alt="facebook" />
          </button>
          <button className={styles.social_item}>
            <Image src={GoogleLogo} alt="google" />
          </button>
          <button className={styles.social_item}>
            <Image src={AppleLogo} alt="apple" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.login_form}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="example@space.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className={styles.forgot_password}>Forgot password?</div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
