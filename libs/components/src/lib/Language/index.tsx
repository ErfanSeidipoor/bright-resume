import React, {
  FC,
  useState,
} from "react";

import { LanguageProps } from "../types/index.type";
import classes from "./index.module.scss";

export const Language: FC<LanguageProps> = () => {
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

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.header}>Languages</h2>
        {/* using typography  */}
        <button type="submit" className={classes.add__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12 17.5C12.2833 17.5 12.521 17.404 12.713 17.212C12.9043 17.0207 13 16.7833 13 16.5V13.5H16.025C16.3083 13.5 16.5417 13.404 16.725 13.212C16.9083 13.0207 17 12.7833 17 12.5C17 12.2167 16.904 11.979 16.712 11.787C16.5207 11.5957 16.2833 11.5 16 11.5H13V8.475C13 8.19167 12.9043 7.95833 12.713 7.775C12.521 7.59167 12.2833 7.5 12 7.5C11.7167 7.5 11.4793 7.59567 11.288 7.787C11.096 7.979 11 8.21667 11 8.5V11.5H7.975C7.69167 11.5 7.45833 11.5957 7.275 11.787C7.09167 11.979 7 12.2167 7 12.5C7 12.7833 7.09567 13.0207 7.287 13.212C7.479 13.404 7.71667 13.5 8 13.5H11V16.525C11 16.8083 11.096 17.0417 11.288 17.225C11.4793 17.4083 11.7167 17.5 12 17.5ZM12 22.5C10.6167 22.5 9.31667 22.2373 8.1 21.712C6.88333 21.1873 5.825 20.475 4.925 19.575C4.025 18.675 3.31267 17.6167 2.788 16.4C2.26267 15.1833 2 13.8833 2 12.5C2 11.1167 2.26267 9.81667 2.788 8.6C3.31267 7.38333 4.025 6.325 4.925 5.425C5.825 4.525 6.88333 3.81233 8.1 3.287C9.31667 2.76233 10.6167 2.5 12 2.5C13.3833 2.5 14.6833 2.76233 15.9 3.287C17.1167 3.81233 18.175 4.525 19.075 5.425C19.975 6.325 20.6873 7.38333 21.212 8.6C21.7373 9.81667 22 11.1167 22 12.5C22 13.8833 21.7373 15.1833 21.212 16.4C20.6873 17.6167 19.975 18.675 19.075 19.575C18.175 20.475 17.1167 21.1873 15.9 21.712C14.6833 22.2373 13.3833 22.5 12 22.5Z"
              fill="#3A86FF"
            />
          </svg>
          Add
        </button>
      </div>
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
    </form>
  );
};


