import React from "react";

// components
import {
  RadioButton,
  TextField,
  LanguageProps,
  ProficiencyEnum,
} from "@bright-resume/components";

// icons
import { AddCircleRoundedIcon, RemoveCircleRounded } from "../Icons";
import Typography from "../Typography";
// locals
import classes from "./index.module.scss";
import { texts } from "./texts";
import { useData } from "./index.hook";
import { Controller, FieldArrayWithId } from "react-hook-form";
import { CreateResumeResumeInputs } from "@dto";

export const Language: React.FC<LanguageProps> = ({ control }) => {
  const data = useData(control);

  const renderHeader = () => {
    return (
      <div className={classes.title__wrapper}>
        <Typography className={classes.header} variant="h2">
          {texts.languages}
        </Typography>
        <div className={classes.add__icon} onClick={data.handleIncrease}>
          <AddCircleRoundedIcon />
          <Typography className={classes.add__text} variant="h7">
            {texts.add}
          </Typography>
        </div>
      </div>
    );
  };

  const renderItem = (
    item: FieldArrayWithId<CreateResumeResumeInputs, "languages", "id">,
    index: number
  ) => {
    return (
      <Controller
        control={control}
        name={`languages.${index}.isShowLevel`}
        render={({ field: showField }) => (
          <div
            key={item.id}
            className={classes.wrapper__items}
            onMouseEnter={() => showField.onChange(true)}
            onMouseLeave={() => showField.onChange(false)}
          >
            <div className={classes.language__container}>
              <Controller
                control={control}
                name={`languages.${index}.name`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    rootClassName={classes.language}
                    variant="h4"
                  />
                )}
              />
              {data.fields.length > 1 && (
                <RemoveCircleRounded
                  className={classes.remove__icon}
                  onClick={() => data.handleDecrease(index)}
                />
              )}
            </div>

            {!showField.value && (
              <Controller
                control={control}
                name={`languages.${index}.level`}
                render={({ field }) => (
                  <TextField {...field} variant="h9" disabled />
                )}
              />
            )}
            <div className={classes.proficiency__wrapper}>
              {showField.value &&
                Object.values(ProficiencyEnum).map((proficiency) => (
                  <div
                    key={`level-${proficiency}`}
                    className={classes.proficiency}
                  >
                    <Controller
                      control={control}
                      name={`languages.${index}.level`}
                      render={({ field }) => (
                        <RadioButton
                          value={proficiency}
                          id={`${proficiency}-${item.id}`}
                          checked={field.value === proficiency}
                          onChange={(e) =>
                            e.target.checked && field.onChange(proficiency)
                          }
                          label={proficiency}
                        />
                      )}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      />
    );
  };

  const renderItems = () => {
    return (
      <div>{data.fields.map((item, index) => renderItem(item, index))}</div>
    );
  };

  return (
    <div className={classes.wrapper}>
      {renderHeader()}
      {renderItems()}
    </div>
  );
};
