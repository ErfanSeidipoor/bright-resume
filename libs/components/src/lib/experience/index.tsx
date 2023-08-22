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

/* eslint-disable-next-line */

export const Experience: FC<ExperienceProps> = ({
  header = { placeholder: "Experience" },
  items = [
    {
      id: "child-1",
      position: { placeholder: "Position", label: "position" },
      company: { placeholder: "company name", label: "company" },
      description: {
        label: "description",
        placeholder:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
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
          className={
            data.isHoverAddBtn
              ? classes.hover__items_enable
              : classes.hover__items_disable
          }
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
