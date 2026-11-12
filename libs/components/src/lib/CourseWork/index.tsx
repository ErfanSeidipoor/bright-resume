import { FC } from "react";
import cls from "classnames";
import { Controller, FieldArrayWithId } from "react-hook-form";
// dto
import { CreateResumeResumeInputs } from "@dto";
// components
import {
  CheckBox,
  CourseWorkProps,
  DatePicker,
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

export const CourseWork: FC<CourseWorkProps> = ({
  control,
  setValue,
  courseWorkValues = [],
  isHidden = false,
}) => {
  const data = useData(control);
  if (isHidden) return;

  const renderHeader = () => {
    return (
      <div className={classes.header__container}>
        <Controller
          control={control}
          name="courseWorkLabel"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="h2"
              placeholder={texts.course_work}
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
          name={`courseWorks.${index}.isShowInstitute`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label={texts.institute}
            />
          )}
        />
        <Controller
          control={control}
          name={`courseWorks.${index}.isShowDate`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label={texts.date}
            />
          )}
        />
        <Controller
          control={control}
          name={`courseWorks.${index}.isShowSkills`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label={texts.skills}
            />
          )}
        />
      </div>
    );
  };

  const renderFields = (
    child: FieldArrayWithId<CreateResumeResumeInputs, "courseWorks", "id">,
    index: number
  ) => {
    return (
      <li key={child?.id} className={classes.child__wrapper}>
        <div className={classes.title__container}>
          <div className={classes.title__wrapper}>
            <Controller
              control={control}
              name={`courseWorks.${index}.name`}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="h4"
                  placeholder={texts.name}
                  rootClassName={classes.title}
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

            {courseWorkValues?.[index]?.isShowDate && (
              <DatePicker
                month={undefined}
                year={Number(courseWorkValues?.[index].year)}
                onChangeMonth={() => undefined}
                onChangeYear={(value) =>
                  setValue(`courseWorks.${index}.year`, value.toString(), {
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
        {courseWorkValues?.[index]?.isShowInstitute && (
          <Controller
            control={control}
            name={`courseWorks.${index}.institute`}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="h7"
                placeholder={texts.institute}
              />
            )}
          />
        )}

        {courseWorkValues?.[index]?.isShowSkills && (
          <Controller
            control={control}
            name={`courseWorks.${index}.skills`}
            render={({ field }) => (
              <TextArea
                {...field}
                variant="h7"
                placeholder={texts.skills}
                className={classes.skills}
              />
            )}
          />
        )}

        <Controller
          control={control}
          name={`courseWorks.${index}.points`}
          render={({ field }) => (
            <TextArea
              getSeparatedValues={field.onChange}
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
    return renderFields(data.fields[-1], -1);
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

export default CourseWork;
