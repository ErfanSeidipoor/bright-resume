import cls from "classnames";
import { FC } from "react";
// components
import {
  CheckBox,
  ExperienceChildProps,
  ExperienceProps,
  RangePicker,
  TextArea,
  TextField,
} from "@bright-resume/components";
// icons
import {
  AddCircleRoundedIcon,
  MeatBallsMenuIcon,
  RemoveCircleRounded,
} from "../Icons";
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";

export const Experience: FC<ExperienceProps> = ({
  header = {},
  items = [
    {
      id: "item-1",
      role: {},
      company: {},
      location: {},
      rangeDate: undefined,
      points: {},
      showLocation: {
        isShow: false,
        onToggle: () => undefined,
      },
      showDate: {
        isShow: false,
        onToggle: () => undefined,
      },
      showPoints: {
        isShow: false,
        onToggle: () => undefined,
      },
    },
  ],
  hoverItem = {
    id: "hover-item",
    role: {},
    company: {},
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
        <div>
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
      </div>
    );
  };

  const renderFields = (child: ExperienceChildProps, index: number) => {
    return (
      <li key={child.id} className={classes.child__wrapper}>
        <div className={classes.title__container}>
          <div className={classes.title__wrapper}>
            <TextField
              {...child.role}
              variant="h4"
              placeholder={child.role.placeholder}
              rootClassName={cls(classes.title, {
                [child.role.rootClassName || ""]: !!child.role.rootClassName,
              })}
            />
          </div>
          <div className={classes.title__left_side}>
            {!!index && (
              <RemoveCircleRounded
                width="20px"
                height="20px"
                className={classes.remove__icon}
                onClick={() => onDecrease(child.id)}
              />
            )}
            {child.showDate?.isShow && child.rangeDate && (
              <RangePicker {...child.rangeDate} />
            )}

            <div className={classes.menu__container}>
              <MeatBallsMenuIcon
                className={classes.menu__icon}
                onClick={() => data.handleShowMenuId(child.id)}
              />
              {data.showMenuId === child.id && (
                <div className={classes.menu__wrapper}>
                  <CheckBox
                    checked={child.showLocation?.isShow}
                    onClick={child.showLocation?.onToggle}
                    onChange={child.showLocation?.onToggle}
                    label="Location"
                  />
                  <CheckBox
                    checked={child.showDate?.isShow}
                    onClick={child.showDate?.onToggle}
                    onChange={child.showDate?.onToggle}
                    label="Date"
                  />
                  <CheckBox
                    checked={child.showPoints?.isShow}
                    onClick={child.showPoints?.onToggle}
                    onChange={child.showPoints?.onToggle}
                    label="Points"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <TextField
          {...child.company}
          variant="h5"
          placeholder={child.company.placeholder}
        />
        {child.showLocation?.isShow && child.location && (
          <TextField
            {...child.location}
            variant="h7"
            placeholder={child.location.placeholder}
          />
        )}

        {child.showPoints?.isShow && child.points && (
          <TextArea
            {...child.points}
            variant="h7"
            placeholder={child.points.placeholder}
            className={cls(classes.points, {
              [child.points.className || ""]: !!child.points.className,
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
    return renderFields(hoverItem, -1);
  };

  const renderItems = () => {
    return (
      <ul className={classes.child__container}>
        {items.map((child, index) => renderFields(child, index))}
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

  const renderBackdrop = () => {
    if (!data.showMenuId) return null;
    return (
      <div
        className={classes.backdrop}
        onClick={() => data.handleShowMenuId("")}
      />
    );
  };

  return (
    <div className={classes.container}>
      {renderBackdrop()}
      <div className={classes.wrapper}>
        {renderHeader()}
        {renderItems()}
      </div>
    </div>
  );
};

export default Experience;
