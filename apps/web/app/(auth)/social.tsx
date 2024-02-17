"use client";
import Image from "next/image";
import GoogleIcon from "@bright-resume/assets/image/social/google.png";
import LinkedinIcon from "@bright-resume/assets/image/social/linkedin.png";
import GithubIcon from "@bright-resume/assets/image/social/github.png";
import classes from "./index.module.scss";
import { socialLogin } from "./actions";

export default function SocialLogin() {
  return (
    <div className={classes.social}>
      <form action={socialLogin}>
        <input name="google" value="google" type="hidden" />
        <button className={classes.social_item} type="submit">
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
      </form>
      <form action={socialLogin}>
        <input name="linkedin" value="linkedin" type="hidden" />
        <button className={classes.social_item} type="submit">
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
      </form>
      <form action={socialLogin}>
        <input name="github" value="github" type="hidden" />
        <button className={classes.social_item} type="submit">
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
      </form>
    </div>
  );
}
