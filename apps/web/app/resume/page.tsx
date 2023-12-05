import styles from "./page.module.scss";

/* eslint-disable-next-line */
export interface ResumeProps {}

export default async function Index(props: ResumeProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to Resume!</h1>
    </div>
  );
}
