"use client";
import logo from "@bright-resume/assets/image/logo-with-typography-horizontal.png";
import Image from "next/image";
import { FC, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { MenuIcon } from "@bright-resume/components/Icons";
import { Sidebar } from "../sidebar";
import { useOutsideClick } from "./index.hooks";

const MainNav: FC = () => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => setOpen(false));

  return (
    <div className={styles.container}>
      <div>
        <Link href="/" className={styles.links}>
          <Image
            className={styles.logo}
            src={logo}
            alt="logo-with-typography-horizontal"
          />
        </Link>
      </div>

      <div className={styles.tabs}>
        <a className={styles.links} href="#feature-section">
          Features
        </a>
        <a className={styles.links} href="#faq-section">
          FAQ
        </a>
        <Link className={styles.links} href="/blog">
          Our blog
        </Link>
        <Link className={styles.login_button} href="/login">
          Login/Sign up
        </Link>
      </div>

      <div ref={ref} className={styles.menu} onClick={() => setOpen(!open)}>
        <div className={styles.icon}>
          <MenuIcon begin={open ? 1 : "reverse.begin"} />
        </div>
        <Sidebar open={open} onClick={() => setOpen(false)} />
      </div>
    </div>
  );
};

export { MainNav };
