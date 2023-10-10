import { FC } from "react";
import cls from "classnames";
// components
import { TextArea, TextField } from "@bright-resume/components";
// types
import {
  BackgroundInfoChildProps,
  BackgroundInfoProps,
} from "../types/index.type";
// icons
import { AddCircleRoundedIcon, RemoveCircleRounded } from "../Icons";
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import { texts } from "./texts";

export const BackgroundInfo: FC<BackgroundInfoProps> = ({
  header = {},
  items = [
    {
      id: "item-1",
      title: {},
      subtitle: {},
      description: {},
    },
  ],
  hoverItem = {
    id: "hover-item",
    title: {},
    subtitle: {},
    description: {},
  },
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

  const renderChild = (child: BackgroundInfoChildProps, index: number) => {
    return (
      <li key={child.id} className={classes.child__wrapper}>
        <div className={classes.title__container}>
          <TextField
            {...child.title}
            variant="h4"
            placeholder={child.title.placeholder}
            rootClassName={cls(classes.title, {
              [child.title.rootClassName || ""]: !!child.title.rootClassName,
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
        {child.subtitle && (
          <TextField
            {...child.subtitle}
            variant="h5"
            placeholder={child.subtitle.placeholder}
          />
        )}
        {child.description && (
          <TextArea
            {...child.description}
            variant="h7"
            placeholder={child.description.placeholder}
            className={cls(classes.description, {
              [child.description.className || ""]:
                !!child.description.className,
            })}
          />
        )}

        {data.handleIsLastItemOnHover(items.length, index + 1) && (
          <div className={classes.hover__line}></div>
        )}
      </li>
    );
  };

  const renderHoverItems = () => {
    return renderChild(hoverItem, -1);
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

export default BackgroundInfo;
