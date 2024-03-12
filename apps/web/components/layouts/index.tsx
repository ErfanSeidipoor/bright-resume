"use client";
import styles from "./index.module.scss";
import MainNav from "./nav";

type Props = {
  children: React.ReactNode;
  handleSignOut: any;
};

export function MainLayout({ children, handleSignOut }: Props) {
  return (
    <div className={styles.container}>
      <MainNav handleSignOut={handleSignOut} />

      {children}
    </div>
  );
}
