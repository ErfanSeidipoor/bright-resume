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
  );
}
