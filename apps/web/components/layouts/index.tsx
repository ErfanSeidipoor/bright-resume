import { FC } from "react";
import styles from "./index.module.scss";
import { MainNav } from "./nav";

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <MainNav />

      {children}
    </div>
  );
};

export { MainLayout };
