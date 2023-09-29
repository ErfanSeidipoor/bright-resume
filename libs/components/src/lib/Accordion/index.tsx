import cls from "classnames";
import { FC, ReactNode, useState } from "react";
import { PlusIcon } from "../Icons/plus";
import classes from "./index.module.scss";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.container__item} role="button" aria-expanded={isOpen}>
      <div
        className={cls(classes.container__item__header, {
          [classes.container__item__header__open]: isOpen,
        })}
        onClick={handleToggle}
        aria-controls={`accordion-item-${title}`}
        aria-label={`Toggle ${title} accordion item`}
        role="heading"
        aria-level={3}
      >
        <span
          className={cls(classes.container__item__header__title, {
            [classes.container__item__header__title__open]: isOpen,
          })}
          role="contentinfo"
        >
          {title}
        </span>
        <div
          className={cls(classes.container__item__header__icon, {
            [classes.container__item__header__icon__open]: isOpen,
          })}
          id={`accordion-item-${title}`}
        >
          <PlusIcon />
        </div>
      </div>
      <div
        className={cls(classes.container__item__children, {
          [classes.container__item__children__open]: isOpen,
        })}
        role="list"
      >
        {children}
      </div>
    </div>
  );
};

interface AccordionProps {
  items?: AccordionItemProps[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  return (
    <div className={classes.container} role="tablist">
      {items?.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
};

export { Accordion, AccordionItem };
