import cls from "classnames";
import { FC } from "react";
// components
import {
  CheckBox,
  EducationChildProps,
  EducationProps,
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
import { texts } from "./texts";

export const Education: FC<EducationProps> = ({
  header = {},
  items = [
    {
      id: "item-1",
      degree: {},
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
      showGpa: {
        isShow: false,
        onToggle: () => undefined,
      },
      showInstitute: {
        isShow: false,
        onToggle: () => undefined,
      },
    },
  ],
  hoverItem = {
    id: "hover-item",
    degree: {},
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

  const renderMenu = (child: EducationChildProps) => {
    if (data.showMenuId !== child.id) return;
    return (
      <div className={classes.menu__wrapper}>
        <CheckBox
          checked={child.showInstitute?.isShow}
          onClick={child.showInstitute?.onToggle}
          onChange={child.showInstitute?.onToggle}
          label={texts.institute}
        />
        <CheckBox
          checked={child.showGpa?.isShow}
          onClick={child.showGpa?.onToggle}
          onChange={child.showGpa?.onToggle}
          label={texts.gpa}
        />
        <CheckBox
          checked={child.showLocation?.isShow}
          onClick={child.showLocation?.onToggle}
          onChange={child.showLocation?.onToggle}
          label={texts.location}
        />
        <CheckBox
          checked={child.showDate?.isShow}
          onClick={child.showDate?.onToggle}
          onChange={child.showDate?.onToggle}
          label={texts.date}
        />
        <CheckBox
          checked={child.showPoints?.isShow}
          onClick={child.showPoints?.onToggle}
          onChange={child.showPoints?.onToggle}
          label={texts.points}
        />
      </div>
    );
  };

  const renderFields = (child: EducationChildProps, index: number) => {
    return (
      <li key={child.id} className={classes.child__wrapper}>
        <div className={classes.title__container}>
          <div className={classes.title__wrapper}>
            <TextField
              {...child.degree}
              variant="h6"
              isMinimal
              placeholder={child.degree.placeholder}
              containerClassName={cls(classes.title, {
                [child.degree.containerClassName || ""]:
                  !!child.degree.containerClassName,
              })}
            />
            {child.showInstitute?.isShow && child.institute && (
              <TextField
                {...child.institute}
                variant="h6"
                isMinimal
                placeholder={child.institute.placeholder}
                containerClassName={cls(classes.title, {
                  [child.institute.containerClassName || ""]:
                    !!child.institute.containerClassName,
                })}
              />
            )}
            {child.showGpa?.isShow && child.gpa && (
              <TextField
                {...child.gpa}
                isMinimal
                variant="h6"
                placeholder={child.gpa.placeholder}
                containerClassName={cls(classes.title, {
                  [child.gpa.containerClassName || ""]:
                    !!child.gpa.containerClassName,
                })}
              />
            )}
          </div>
          <div className={classes.title__left_side}>
            <div className={classes.menu__container}>
              <MeatBallsMenuIcon
                className={classes.menu__icon}
                onClick={() => data.handleShowMenuId(child.id)}
              />
              {renderMenu(child)}
            </div>
            {child.showDate?.isShow && child.rangeDate && (
              <RangePicker {...child.rangeDate} />
            )}

            {items.length > 1 && (
              <RemoveCircleRounded
                width="20px"
                height="20px"
                className={classes.remove__icon}
                onClick={() => onDecrease(child.id)}
              />
            )}
          </div>
        </div>

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

export default Education;
