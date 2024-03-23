import cls from "classnames";
import { FC } from "react";
// components
import {
  CheckBox,
  InvolvementProps,
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

export const Involvement: FC<InvolvementProps> = ({
  control,
  setValue,
  involvementValues = [],
  isHidden = false,
}) => {
  const data = useData(control);
  if (isHidden) return;

  const renderHeader = () => {
    return (
      <div className={classes.header__container}>
        <Controller
          control={control}
          name="involvementLabel"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="h2"
              placeholder={texts.involvement}
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
          name={`involvements.${index}.isShowCompany`}
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
          name={`involvements.${index}.isShowLocation`}
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
          name={`involvements.${index}.isShowDate`}
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
    child: FieldArrayWithId<CreateResumeResumeInputs, "involvements", "id">,
    index: number
  ) => {
    return (
      <li key={child?.id} className={classes.child__wrapper}>
        <div className={classes.title__container}>
          <div className={classes.title__wrapper}>
            <Controller
              control={control}
              name={`involvements.${index}.role`}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="h4"
                  placeholder={texts.role}
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
            {involvementValues?.[index]?.isShowDate && (
              <RangePicker
                fromMonth={involvementValues?.[index].fromMonth as MonthEnum}
                toMonth={involvementValues?.[index].toMonth as MonthEnum}
                fromYear={Number(involvementValues?.[index].fromYear)}
                toYear={Number(involvementValues?.[index].toYear)}
                onChangeFromMonth={(value) =>
                  setValue(`involvements.${index}.fromMonth`, value, {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeToMonth={(value) =>
                  setValue(`involvements.${index}.toMonth`, value, {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeFromYear={(value) =>
                  setValue(`involvements.${index}.fromYear`, value.toString(), {
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                onChangeToYear={(value) =>
                  setValue(`involvements.${index}.toYear`, value.toString(), {
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
        {involvementValues?.[index]?.isShowCompany && (
          <Controller
            control={control}
            name={`involvements.${index}.company`}
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
        {involvementValues?.[index]?.isShowLocation && (
          <Controller
            control={control}
            name={`involvements.${index}.location`}
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
          name={`involvements.${index}.points`}
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

export default Involvement;
