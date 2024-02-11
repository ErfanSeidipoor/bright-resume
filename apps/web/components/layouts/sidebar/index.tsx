import { FC, useState } from "react";
import styles from "./index.module.scss";
import cs from "classnames";
import Link from "next/link";
import { texts } from "./text";

type Props = {
  open: boolean;
  onClick: () => void;
};

export const Sidebar: FC<Props> = ({ open, onClick }) => {
  return (
    <>
      {!open ? <div className={styles.backdrop} /> : null}
      <div
        className={cs(styles.container, {
          [styles.active]: open,
        })}
      >
        <Link href="#feature-section" onClick={onClick}>
          {texts.features}
        </Link>
        <Link href="#faq-section" onClick={onClick}>
          {texts.faq}
        </Link>
        <Link href="/blog" onClick={onClick}>
          {texts.our_blog}
        </Link>
        <Link className={styles.login_button} href="/login">
          Login/Sign up
        </Link>
      </div>
    </>
  );
};
