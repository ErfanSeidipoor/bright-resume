"use client";
import logo from "@bright-resume/assets/image/logo-with-typography-horizontal.png";
import Image from "next/image";
import { FC } from "react";
import styles from "./MainNav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav: FC = () => {
  const pathname = usePathname();

  if (pathname.includes("login")) {
    return <div className={styles.container} />;
  }

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
          FAG
        </a>
        <Link className={styles.login_button} href="/login">
          Login/Sign up
        </Link>
      </div>
    </div>
  );
};

export { MainNav };
