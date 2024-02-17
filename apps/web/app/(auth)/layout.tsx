import "reflect-metadata";
import classes from "./index.module.scss";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={classes.page}>
      <div className={classes.hero}>
        <div />
      </div>
      <div className={classes.container}>
        <div className={classes.wrapper}>{children}</div>
      </div>
    </div>
  );
}
