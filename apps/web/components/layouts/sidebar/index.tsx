import classes from "./index.module.scss";
import cs from "classnames";
import Link from "next/link";
import { texts } from "./text";
import { useSession } from "next-auth/react";

type Props = {
  open: boolean;
  onClick: () => void;
};

export function Sidebar({ open, onClick }: Props) {
  const session = useSession()
  return (
    <>
      {!open ? <div className={classes.backdrop} /> : null}
      <div
        className={cs(classes.container, {
          [classes.active]: open,
        })}
      >
        <Link href="#feature-section" onClick={onClick}>
          {texts.features}
        </Link>
        <Link href="#faq-section" onClick={onClick}>
          {texts.faq}
        </Link>
        <div>
          {session ? (
            <div className={classes.login_button}>hello</div>
          ) : (
            <Link className={classes.login_button} href="/login">
              Login/Sign up
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
