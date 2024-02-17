import classes from "../index.module.scss";
import Signup from "./signup";
import SocialLogin from "../social";

export default async function SignupPage() {
  return (
    <>
      <div className={classes.header}>
        <h1>
          Sign in to <span>Bright</span> Resume
        </h1>
        <div>Sign up with social account or enter your details</div>
      </div>

      <SocialLogin />
      <Signup />
    </>
  );
}
