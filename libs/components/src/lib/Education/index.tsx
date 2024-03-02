import cls from "classnames";
import { FC } from "react";
// components
import {
  CheckBox,
  EducationProps,
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
import { texts } from "./texts";
import { Controller, FieldArrayWithId } from "react-hook-form";
import { CreateResumeResumeInputs } from "@dto";

export const Education: FC<EducationProps> = ({
  control,
  educationValues = [],
  setValue,
  isHidden = false,
}) => {
  const data = useData(control);
  if (isHidden) return;

  const renderHeader = () => {
    return (
      <div className={classes.header__container}>
        <Controller
          control={control}
          name="educationLabel"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="h2"
              placeholder={texts.education}
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
          name={`educations.${index}.isShowInstitute`}
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
          name={`educations.${index}.isShowGpa`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label={texts.gpa}
            />
          )}
        />
        <Controller
          control={control}
          name={`educations.${index}.isShowLocation`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label={texts.location}
            />
          )}
        />
        <Controller
          control={control}
          name={`educations.${index}.isShowDate`}
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
      </div>
    );
  };

  const renderFields = (
    child: FieldArrayWithId<CreateResumeResumeInputs, "educations", "id">,
    index: number
  ) => {
    return (
      <li key={child?.id} className={classes.child__wrapper}>
        <div className={classes.title__container}>
          <div className={classes.title__wrapper}>
            <Controller
              control={control}
              name={`educations.${index}.degree`}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="h6"
                  isMinimal
                  placeholder={texts.degree}
                  containerClassName={classes.title}
                />
              )}
            />
            {educationValues?.[index]?.isShowInstitute && (
              <Controller
                control={control}
                name={`educations.${index}.institute`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="h6"
                    isMinimal
                    placeholder={texts.institute}
                    containerClassName={classes.title}
                  />
                )}
              />
            )}
            {educationValues?.[index]?.isShowGpa && (
              <Controller
                control={control}
                name={`educations.${index}.gpa`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="h6"
                    isMinimal
                    placeholder={texts.gpa}
                    containerClassName={classes.title}
                  />
                )}
              />
            )}
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
            <div className={classes.menu__container}>
              <MeatBallsMenuIcon
                className={classes.menu__icon}
                onClick={() => data.handleShowMenuId(child.id)}
              />
              {renderMenu(child?.id, index)}
            </div>
            {educationValues?.[index]?.isShowDate && (
              <RangePicker
                fromMonth={educationValues?.[index].fromMonth as MonthEnum}
                toMonth={educationValues?.[index].toMonth as MonthEnum}
                fromYear={Number(educationValues?.[index].fromYear)}
                toYear={Number(educationValues?.[index].toYear)}
                onChangeFromMonth={(value) =>
                  setValue(`educations.${index}.fromMonth`, value, {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeToMonth={(value) =>
                  setValue(`educations.${index}.toMonth`, value, {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeFromYear={(value) =>
                  setValue(`educations.${index}.fromYear`, value.toString(), {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeToYear={(value) =>
                  setValue(`educations.${index}.toYear`, value.toString(), {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
              />
            )}
          </div>
        </div>

        {educationValues?.[index]?.isShowLocation && (
          <Controller
            control={control}
            name={`educations.${index}.location`}
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
          name={`educations.${index}.points`}
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

export default Education;
