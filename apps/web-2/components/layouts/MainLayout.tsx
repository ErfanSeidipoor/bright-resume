import { FC } from "react";
import styles from "./MainLayout.module.scss";
import { MainNav } from "./MainNav";

type Props = {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <MainNav />

      <main className="app">{children}</main>
    </div>
  );
};

export { MainLayout };
