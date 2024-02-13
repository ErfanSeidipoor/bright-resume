import cls from "classnames";

import classes from "./index.module.scss";
import { DotLoadingProps } from "../../index.type";

export const DotLoading: React.FC<DotLoadingProps> = ({ color = "blue" }) => {
  return (
    <span
      className={cls(classes.dot__pulse, {
        [classes[color]]: color,
      })}
    ></span>
  );
};

export default DotLoading;
