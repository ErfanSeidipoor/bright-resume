import React, { FC, useState } from "react";

// icons
import { AddCircleRoundedIcon } from "../Icons";
import { TextField } from "../TextField";
import { LanguageProps } from "../types/index.type";
import Typography from "../Typography";
// locals
import classes from "./index.module.scss";
import { texts } from "./texts";

export const Language: FC<LanguageProps> = ({
  header = { defaultValue: texts.languages },
  items = [],
}) => {
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  const handleProficiencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProficiency(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Language:", language);
    console.log("Proficiency:", proficiency);
  };

  const renderHeader = () => {
    return (
      <div className={classes.titleWrapper}>
        <TextField className={classes.header} {...header} variant="h2" />
        <div className={classes.add__icon}>
          <AddCircleRoundedIcon />
          <Typography variant="h7">{texts.add}</Typography>
        </div>
      </div>
    );
  };
  const renderItem = () => {
    return (
      <div className={classes.wrapperItems}>
        <input
          className={classes.language}
          type="text"
          value={language}
          onChange={handleLanguageChange}
          placeholder="English"
        />
        <div className={classes.proficiencyWrapper}>
          <div className={classes.proficiency}>
            <input
              type="radio"
              id="beginner"
              name={language}
              value="Beginner"
              checked={proficiency === "Beginner"}
              onChange={handleProficiencyChange}
            />
            <label className={classes.proficiencyTitle} htmlFor="beginner">
              Beginner
            </label>
          </div>
          <div className={classes.proficiency}>
            <input
              type="radio"
              id="intermediate"
              name={language}
              value="Intermediate"
              checked={proficiency === "Intermediate"}
              onChange={handleProficiencyChange}
            />
            <label className={classes.proficiencyTitle} htmlFor="intermediate">
              Intermediate
            </label>
          </div>
        </div>
        <div className={classes.proficiencyWrapper}>
          <div className={classes.proficiency}>
            <input
              type="radio"
              id="advanced"
              name={language}
              value="Advanced"
              checked={proficiency === "Advanced"}
              onChange={handleProficiencyChange}
            />
            <label className={classes.proficiencyTitle} htmlFor="advanced">
              Advanced
            </label>
          </div>
          <div className={classes.proficiency}>
            <input
              type="radio"
              id="native"
              name={language}
              value="Native"
              checked={proficiency === "Native"}
              onChange={handleProficiencyChange}
            />
            <label className={classes.proficiencyTitle} htmlFor="native">
              Native
            </label>
          </div>
        </div>
      </div>
    );
  };

  return <div className={classes.wrapper}>{renderHeader()}</div>;
};
