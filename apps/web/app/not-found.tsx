import { Typography } from "@bright-resume/components";
import Link from "next/link";

import classes from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={classes.notfound__container}>
      <Typography variant="h1" className={classes.notfound__title}>
        404
      </Typography>
      <Typography variant="h5" className={classes.notfound__text}>
        Page Not Found
      </Typography>
      <Link href={"/"} className={classes.notfound__link}>
        Back
      </Link>
    </div>
  );
}
