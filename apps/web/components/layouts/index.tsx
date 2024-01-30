"use client";
import styles from "./index.module.scss";
import { MainNav } from "./nav";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <MainNav />

      {children}
    </div>
  );
}
