"use client";
import logo from "@bright-resume/assets/image/logo-with-typography-horizontal.png";
import Image from "next/image";
import { useState } from "react";
import classes from "./index.module.scss";
import Link from "next/link";
import { MenuIcon } from "@bright-resume/components/Icons";
import { Sidebar } from "../sidebar";
import { useOutsideClick } from "./index.hooks";
import { useSession } from "next-auth/react";
import { handleSignOut } from "./action";

export default function MainNav() {
  const { update, data, status } = useSession();
  const [open, setOpen] = useState(false);
  console.log("status", { status, update, data });

  const ref = useOutsideClick(() => setOpen(false));

  return (
    <div className={classes.container}>
      <div>
        <Link href="/" className={classes.links}>
          <Image
            className={classes.logo}
            src={logo}
            alt="logo-with-typography-horizontal"
          />
        </Link>
      </div>

      <div className={classes.tabs}>
        <a className={classes.links} href="#feature-section">
          Features
        </a>
        <a className={classes.links} href="#faq-section">
          FAG
        </a>

        {status === "unauthenticated" ? (
          <Link className={classes.login_button} href="/login">
            Login/Sign up
          </Link>
        ) : (
          <form className={classes.login_button} action={handleSignOut}>
            Sign out
          </form>
        )}
      </div>

      <div ref={ref} className={classes.menu} onClick={() => setOpen(!open)}>
        <div className={classes.icon}>
          <MenuIcon begin={open ? 1 : "reverse.begin"} />
        </div>
        <Sidebar open={open} onClick={() => setOpen(false)} />
      </div>
    </div>
  );
}
