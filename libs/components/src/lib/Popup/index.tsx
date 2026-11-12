import React from "react";
import cls from "classnames";
// local
import classes from "./index.module.scss";

export type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
} & React.HtmlHTMLAttributes<HTMLElement>;

export const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  className,
  children,
  ...props
}) => {
  const rootClasses = cls(classes.root, className, { [classes.open]: isOpen });

  return (
    <>
      {isOpen && <div className={classes.backdrop} onClick={onClose} />}
      <div {...props} className={rootClasses}>
        {children}
      </div>
    </>
  );
};

export default Popup;
