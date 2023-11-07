import cls from "classnames";

import classes from "./index.module.scss";

import {
  ButtonVariant,
  NavigationButtonProps,
  PositionIcon,
} from "../../index.type";
import BlogButton from "../BlogButton";
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
      <BlogButton
        variant={ButtonVariant.bordered}
        text={texts.previous}
        icon={<ChevronLeft />}
        positionIcon={PositionIcon.left}
        onClick={onPrevPage}
        className={className}
        disabled={hasPrevPage}
        {...props}
      />
      <BlogButton
        variant={ButtonVariant.bordered}
        text={texts.next}
        icon={<ChevronRight />}
        positionIcon={PositionIcon.right}
        onClick={onNextPage}
        className={className}
        disabled={hasNextPage}
        {...props}
      />
    </div>
  );
};

export default NavigationButton;
