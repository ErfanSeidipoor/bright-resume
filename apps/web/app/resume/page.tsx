import { auth, signOut } from "@web/auth";
import styles from "./page.module.scss";
import { handleSignOut } from "@web/components/layouts/nav/action";

/* eslint-disable-next-line */
export interface ResumeProps {}

export default async function Index(props: ResumeProps) {
  const session = await auth();

  return (
    <div className={styles["container"]}>
      <h1>Welcome to Resume!</h1>
      {session && session.user ? (
        <div>
          <h2>Hi {JSON.stringify(session)}!</h2>
          <p>
            You are signed in! <span onClick={handleSignOut}>Sign out</span>
          </p>
        </div>
      ) : (
        <div>Not signed in</div>
      )}
    </div>
  );
}
