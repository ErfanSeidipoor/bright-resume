import { FC } from "react";
import cls from "classnames";
// components
import { TextArea, TextField } from "@bright-resume/components";
// types
import { ExperienceChildProps, ExperienceProps } from "../types/index.type";
// icons
import { AddCircleRoundedIcon, RemoveCircleRounded } from "../Icons";
// locals
import { useData } from "./useData";
import classes from "./index.module.scss";

export const Experience: FC<ExperienceProps> = ({
  header = {},
  items = [
    {
      id: "child-1",
      position: {},
      company: {},
      description: {},
    },
  ],
  onIncrease = () => null,
  onDecrease = () => null,
}) => {
  const data = useData();

  const renderHeader = () => {
    return (
      <div className={classes.header__container}>
        <TextField
          {...header}
          variant="h2"
          placeholder={header.placeholder}
          rootClassName={cls(classes.header, {
            [header.rootClassName || ""]: !!header.rootClassName,
          })}
        />
        <AddCircleRoundedIcon
          width="24px"
          height="24px"
          className={classes.add__icon}
          onMouseEnter={() => data.setIsHoverAddBtn(true)}
          onMouseLeave={() => data.setIsHoverAddBtn(false)}
          onClick={() => {
            data.setIsHoverAddBtn(false);
            onIncrease();
          }}
        />
      </div>
    );
  };

  const renderChild = (child: ExperienceChildProps, index: number) => {
    return (
      <li key={child.id} className={classes.child__wrapper}>
        <div className={classes.position__container}>
          <TextField
            {...child.position}
            variant="h4"
            placeholder={child.position.placeholder}
            rootClassName={cls(classes.position, {
              [child.position.rootClassName || ""]:
                !!child.position.rootClassName,
            })}
          />
          {!!index && (
            <RemoveCircleRounded
              width="20px"
              height="20px"
              className={classes.remove__icon}
              onClick={() => onDecrease(child.id)}
            />
          )}
        </div>
        <TextField
          {...child.company}
          variant="h5"
          placeholder={child.company.placeholder}
        />
        <TextArea
          {...child.description}
          variant="h7"
          placeholder={child.description.placeholder}
          className={cls(classes.description, {
            [child.description.className || ""]: !!child.description.className,
          })}
        />

        {data.handleIsLastItemOnHover(items.length, index + 1) && (
          <div className={classes.hover__line}></div>
        )}
      </li>
    );
  };

  const renderHoverItems = () => {
    return renderChild(data.defaultItems, -1);
  };

  const renderItems = () => {
    return (
      <ul className={classes.child__container}>
        {items.map((child, index) => renderChild(child, index))}
        <div
          className={cls(classes.hover__items, {
            [classes.hover__items_enable]: data.isHoverAddBtn,
            [classes.hover__items_disable]: !data.isHoverAddBtn,
          })}
        >
          {renderHoverItems()}
        </div>
      </ul>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {renderHeader()}
        {renderItems()}
      </div>
    </div>
  );
};

export default Experience;
