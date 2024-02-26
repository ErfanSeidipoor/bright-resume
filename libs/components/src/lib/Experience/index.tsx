import cls from "classnames";
import { FC } from "react";
// components
import {
  CheckBox,
  ExperienceProps,
  MonthEnum,
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
import { Controller, FieldArrayWithId } from "react-hook-form";
import { texts } from "./texts";
import { CreateResumeResumeInputs } from "@dto";

export const Experience: FC<ExperienceProps> = ({
  control,
  setValue,
  experienceValues = [],
}) => {
  const data = useData(control);
  const renderHeader = () => {
    return (
      <div className={classes.header__container}>
        <Controller
          control={control}
          name="experienceLabel"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="h2"
              placeholder={texts.experience}
              rootClassName={classes.header}
            />
          )}
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
              data.handleIncrease();
            }}
          />
        </div>
      </div>
    );
  };

  const renderMenu = (childId: string, index: number) => {
    if (data.showMenuId !== childId) return;
    return (
      <div className={classes.menu__wrapper}>
        <Controller
          control={control}
          name={`experiences.${index}.isShowLocation`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label="Location"
            />
          )}
        />
        <Controller
          control={control}
          name={`experiences.${index}.isShowDate`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label="Date"
            />
          )}
        />
        {/* <CheckBox
          checked={child.showPoints?.isShow}
          onClick={child.showPoints?.onToggle}
          onChange={child.showPoints?.onToggle}
          label="Points"
        /> */}
      </div>
    );
  };

  const renderFields = (
    child: FieldArrayWithId<CreateResumeResumeInputs, "experiences", "id">,
    index: number
  ) => {
    return (
      <li key={child?.id} className={classes.child__wrapper}>
        <div className={classes.title__container}>
          <div className={classes.title__wrapper}>
            <Controller
              control={control}
              name={`experiences.${index}.role`}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="h4"
                  placeholder={texts.position}
                  containerClassName={classes.title}
                />
              )}
            />
          </div>
          <div className={classes.title__left_side}>
            {data.fields.length > 1 && (
              <RemoveCircleRounded
                width="20px"
                height="20px"
                className={classes.remove__icon}
                onClick={() => data.handleDecrease(index)}
              />
            )}
            {experienceValues?.[index]?.isShowDate && (
              <RangePicker
                fromMonth={experienceValues?.[index].fromMonth as MonthEnum}
                toMonth={experienceValues?.[index].toMonth as MonthEnum}
                fromYear={Number(experienceValues?.[index].fromYear)}
                toYear={Number(experienceValues?.[index].toYear)}
                onChangeFromMonth={(value) =>
                  setValue(`experiences.${index}.fromMonth`, value, {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeToMonth={(value) =>
                  setValue(`experiences.${index}.toMonth`, value, {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeFromYear={(value) =>
                  setValue(`experiences.${index}.fromYear`, value.toString(), {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeToYear={(value) =>
                  setValue(`experiences.${index}.toYear`, value.toString(), {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
              />
            )}

            <div className={classes.menu__container}>
              <MeatBallsMenuIcon
                className={classes.menu__icon}
                onClick={() => data.handleShowMenuId(child.id)}
              />
              {renderMenu(child?.id, index)}
            </div>
          </div>
        </div>
        <Controller
          control={control}
          name={`experiences.${index}.company`}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="h5"
              placeholder={texts.company}
            />
          )}
        />
        {experienceValues?.[index]?.isShowLocation && (
          <Controller
            control={control}
            name={`experiences.${index}.location`}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="h7"
                placeholder={texts.location}
              />
            )}
          />
        )}
        <Controller
          control={control}
          name={`experiences.${index}.points`}
          render={({ field }) => (
            <TextArea
              getSeparatedValues={field.onChange}
              value={field.value?.join("")}
              variant="h7"
              placeholder={texts.points}
              className={classes.points}
            />
          )}
        />

        {data.handleIsLastItemOnHover(data.fields.length, index + 1) && (
          <div className={classes.hover__line}></div>
        )}
      </li>
    );
  };

  const renderHoverItems = () => {
    return renderFields(
      data.fields[data.fields.length + 1],
      data.fields.length + 1
    );
  };

  const renderItems = () => {
    return (
      <ul className={classes.child__container}>
        {data.fields.map((child, index) => renderFields(child, index))}
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
