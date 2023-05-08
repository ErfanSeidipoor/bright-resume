import { FC } from "react";
import cls from "classnames";

import "../tailwind-imports.css";

/* eslint-disable-next-line */
export interface AboutMeProps {}

export const AboutMe: FC<AboutMeProps> = () => {
  return (
    <div className={cls(
      "p-1",
      "rounded-lg",
      "border",
      "text-slate-400",
      "bg-black"
    )}
    >
      <h1>Welcome to AboutMe!</h1>
    </div>
  );
}

export default AboutMe;
