import cls from "classnames";

import classes from "./index.module.scss";

import { NavigationButtonProps } from "../../index.type";
import { Button } from "../Button";
import { texts } from "./text";
import { ChevronLeft } from "../Icons/chevronLeft";
import { ChevronRight } from "../Icons/chevronRight";

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  className,
  hasPrevPage,
  hasNextPage,
  onPrevPage = () => null,
  onNextPage = () => null,
  ...props
}) => {
  return (
    <div className={cls(classes.root)}>
      <Button
        variant={"outlined"}
        text={texts.previous}
        iconLeft={<ChevronLeft />}
        onClick={onPrevPage}
        className={className}
        disabled={hasPrevPage}
        {...props}
      />
      <Button
        variant={"outlined"}
        text={texts.next}
        iconRight={<ChevronRight />}
        onClick={onNextPage}
        className={className}
        disabled={hasNextPage}
        {...props}
      />
    </div>
  );
};

export default NavigationButton;
