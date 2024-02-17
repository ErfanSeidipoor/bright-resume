import { auth } from "@web/auth";
import Login from "./login";
import SocialLogin from "../social";
import classes from "../index.module.scss";

export default async function LoginPage() {
  return (
    <>
      <div className={classes.header}>
        <h1>
          Sign in to <span>Bright</span> Resume
        </h1>
        <div>Sign up with social account or enter your details</div>
      </div>
      <SocialLogin />
      <Login />
    </>
  );
}
