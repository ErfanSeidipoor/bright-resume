import logo from "@bright-resume/assets/image/logo-with-typography-horizontal.png";
import Image from "next/image";
import { FC } from "react";
import styles from "./MainNav.module.scss";

const MainNav: FC = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={logo} alt="logo-with-typography-horizontal"  />

      <div className={styles.tabs}>
        <div>Features</div>
        <div>FAG</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export { MainNav };
