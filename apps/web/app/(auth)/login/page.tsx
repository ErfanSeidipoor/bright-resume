<<<<<<< HEAD
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
=======
import Login from "./form";
import classes from "../index.module.scss";
import SocialLogin from "./social";

export default async function LoginPage() {
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
            <p>Sign up with social account or enter your details</p>
          </div>
          <SocialLogin />
          <Login />
        </div>
      </div>
    </div>
>>>>>>> 41a41971568212bcbc3d9e608b1411eb082b6816
  );
}
