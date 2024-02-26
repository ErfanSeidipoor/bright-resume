import cls from "classnames";
import { FC } from "react";
import { Controller, FieldArrayWithId } from "react-hook-form";
// dtos
import { CreateResumeResumeInputs } from "@dto";
// components
import {
  CheckBox,
  CertificationProps,
  TextArea,
  TextField,
  DatePicker,
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

export const Certification: FC<CertificationProps> = ({
  control,
  fields = [],
  onDecrease = () => undefined,
  onIncrease = () => undefined,
  setValue,
  certificationValues = [],
}) => {
  const data = useData();
  const renderHeader = () => {
    return (
      <div className={classes.header__container}>
        <Controller
          control={control}
          name="certificationLabel"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="h2"
              placeholder={texts.certification}
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
              onIncrease();
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
          name={`certifications.${index}.isShowInstitute`}
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
          name={`certifications.${index}.isShowDate`}
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
    child: FieldArrayWithId<CreateResumeResumeInputs, "certifications", "id">,
    index: number
  ) => {
    return (
      <li key={child.id} className={classes.child__wrapper}>
        <div className={classes.title__container}>
          <div className={classes.title__wrapper}>
            <Controller
              control={control}
              name={`certifications.${index}.name`}
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
            {fields.length > 1 && (
              <RemoveCircleRounded
                width="20px"
                height="20px"
                className={classes.remove__icon}
                onClick={() => onDecrease(index)}
              />
            )}
            {certificationValues?.[index]?.isShowDate && (
              <DatePicker
                month={undefined}
                year={Number(certificationValues?.[index].year)}
                onChangeMonth={() => undefined}
                onChangeYear={(value) =>
                  setValue(`certifications.${index}.year`, value.toString(), {
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
              {renderMenu(child.id, index)}
            </div>
          </div>
        </div>
        {certificationValues?.[index]?.isShowInstitute && (
          <Controller
            control={control}
            name={`certifications.${index}.institute`}
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

        <Controller
          control={control}
          name={`certifications.${index}.points`}
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

        {data.handleIsLastItemOnHover(fields.length, index + 1) && (
          <div className={classes.hover__line}></div>
        )}
      </li>
    );
  };

  const renderHoverItems = () => {
    return renderFields(fields[0], 0);
  };

  const renderItems = () => {
    return (
      <ul className={classes.child__container}>
        {fields.map((child, index) => renderFields(child, index))}
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

export default Certification;
