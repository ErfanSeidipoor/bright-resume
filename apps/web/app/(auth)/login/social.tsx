import Image from "next/image";
import GoogleIcon from "@bright-resume/assets/image/social/google.png";
import LinkedinIcon from "@bright-resume/assets/image/social/linkedin.png";
import GithubIcon from "@bright-resume/assets/image/social/github.png";
import classes from "@web/app/(auth)/index.module.scss";
import { socialLogin } from "./actions";

export default function SocialLogin() {
  return (
    <form action={socialLogin}>
      <div className={classes.social}>
        <button className={classes.social_item}>
          <Image
            src={GoogleIcon}
            alt="google"
            placeholder="empty"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            height={40}
            width={40}
          />
        </button>
        <button className={classes.social_item}>
          <Image
            src={LinkedinIcon}
            alt="linkedin"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="empty"
            priority
            height={40}
            width={50}
            style={{ marginLeft: 5 }}
          />
        </button>
        <button className={classes.social_item}>
          <Image
            src={GithubIcon}
            alt="github"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="empty"
            priority
            height={50}
            width={50}
          />
        </button>
      </div>
    </form>
  );
}
