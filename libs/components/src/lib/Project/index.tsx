import cls from "classnames";
import { FC } from "react";
// components
import {
  CheckBox,
  MonthEnum,
  ProjectProps,
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

export const Project: FC<ProjectProps> = ({
  control,
  setValue,
  projectValues = [],
  isHidden = false,
}) => {
  const data = useData(control);
  if (isHidden) return;

  const renderHeader = () => {
    return (
      <div className={classes.header__container}>
        <Controller
          control={control}
          name="projectLabel"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="h2"
              placeholder={texts.project}
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
          name={`projects.${index}.isShowRole`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label={texts.role}
            />
          )}
        />
        <Controller
          control={control}
          name={`projects.${index}.isShowCompany`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label={texts.company}
            />
          )}
        />
        <Controller
          control={control}
          name={`projects.${index}.isShowLocation`}
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
          name={`projects.${index}.isShowUrl`}
          render={({ field }) => (
            <CheckBox
              checked={field.value}
              onChange={() =>
                field.value ? field.onChange(false) : field.onChange(true)
              }
              label={texts.url}
            />
          )}
        />
        <Controller
          control={control}
          name={`projects.${index}.isShowDate`}
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
    child: FieldArrayWithId<CreateResumeResumeInputs, "projects", "id">,
    index: number
  ) => {
    return (
      <li key={child?.id} className={classes.child__wrapper}>
        <div className={classes.title__container}>
          <div className={classes.title__wrapper}>
            <Controller
              control={control}
              name={`projects.${index}.title`}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="h4"
                  placeholder={texts.title}
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

            {projectValues?.[index]?.isShowDate && (
              <RangePicker
                fromMonth={projectValues?.[index].fromMonth as MonthEnum}
                toMonth={projectValues?.[index].toMonth as MonthEnum}
                fromYear={Number(projectValues?.[index].fromYear)}
                toYear={Number(projectValues?.[index].toYear)}
                onChangeFromMonth={(value) =>
                  setValue(`projects.${index}.fromMonth`, value, {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeToMonth={(value) =>
                  setValue(`projects.${index}.toMonth`, value, {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeFromYear={(value) =>
                  setValue(`projects.${index}.fromYear`, value.toString(), {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeToYear={(value) =>
                  setValue(`projects.${index}.toYear`, value.toString(), {
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
        {projectValues?.[index]?.isShowRole && (
          <Controller
            control={control}
            name={`projects.${index}.role`}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="h5"
                placeholder={texts.role}
              />
            )}
          />
        )}
        {projectValues?.[index]?.isShowCompany && (
          <Controller
            control={control}
            name={`projects.${index}.company`}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="h5"
                placeholder={texts.company}
              />
            )}
          />
        )}
        {projectValues?.[index]?.isShowLocation && (
          <Controller
            control={control}
            name={`projects.${index}.location`}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="h5"
                placeholder={texts.location}
              />
            )}
          />
        )}
        {projectValues?.[index]?.isShowUrl && (
          <Controller
            control={control}
            name={`projects.${index}.url`}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="h5"
                placeholder={texts.url}
              />
            )}
          />
        )}

        <Controller
          control={control}
          name={`projects.${index}.points`}
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

export default Project;
