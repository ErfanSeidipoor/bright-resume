import {
  DatePickerSectionsEnum,
  DatePickerProps,
} from "@bright-resume/components";
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import classNames from "classnames";

import RadioButton from "../RadioButton";
import {
  ArrowDropdownLeftDatePicker,
  ArrowLeftDatePicker,
  ArrowRightDatePicker,
} from "../Icons";
import Typography from "../Typography";
import React from "react";
import { texts } from "./texts";

export const DatePicker: React.FC<DatePickerProps> = ({
  month = undefined,
  year = undefined,
  onChangeMonth,
  onChangeYear,
  placeholder = "Pick your date!",
  disabled = false,
}) => {
  const data = useData({ month, year, onChangeMonth, onChangeYear });

  const renderYearSection = () => {
    if (data.datePickerTab !== DatePickerSectionsEnum.Year) return;
    return (
      <>
        <div className={classes.header}>
          <div
            className={classes.title}
            onClick={() => data.setDatePickerTab(DatePickerSectionsEnum.Month)}
          >
            <ArrowDropdownLeftDatePicker />
            <Typography className={classes.text} component={"p"}>
              {data.displayDate(texts.select_a_year, true)}
            </Typography>
          </div>
          <div className={classes.actions}>
            <ArrowLeftDatePicker
              className={classNames(
                classes.image,
                data.isThereBeforeYearsAvailable ? classes.disableImage : ""
              )}
              onClick={() =>
                !data.isThereBeforeYearsAvailable &&
                data.setYearPageIndex((prevYearPage) => prevYearPage - 1)
              }
            />
            <ArrowRightDatePicker
              className={classNames(
                classes.image,
                data.isTherePastYearsAvailable ? classes.disableImage : ""
              )}
              onClick={() =>
                !data.isTherePastYearsAvailable &&
                data.setYearPageIndex((prevYearPage) => prevYearPage + 1)
              }
            />
          </div>
        </div>
        <div className={classes.items}>
          {data.years
            .filter(data.filterYearsInCurrentPageHandler)
            .map((yearValue) => (
              <Typography
                key={yearValue}
                className={classNames(
                  year === yearValue ? classes.selectedItem : ""
                )}
                rootClassName={classes.item}
                component={"span"}
                onClick={() => data.onChangeYear(yearValue)}
              >
                {yearValue}
              </Typography>
            ))}
        </div>
      </>
    );
  };

  const renderMonthSection = () => {
    if (data.datePickerTab !== DatePickerSectionsEnum.Month) return;
    return (
      <>
        <div className={classes.header}>
          <Typography className={classes.text} component={"p"}>
            {texts.select_a_month}
          </Typography>
          <RadioButton
            checked={
              data.month === data.currentMonth && data.year === data.currentYear
            }
            onClick={() => {
              data.onChangeYear(data.currentYear);
              data.onChangeMonth(data.currentMonth);
              data.setDatePickerTab(DatePickerSectionsEnum.Year);
            }}
            label={texts.present}
          />
        </div>
        <div className={classes.itemsMonth}>
          {data.months.map((monthValue) => (
            <Typography
              key={monthValue}
              className={classNames(
                classes.itemMonth,
                month === monthValue ? classes.selectedItemMonth : ""
              )}
              component={"span"}
              onClick={() => {
                data.setDatePickerTab(DatePickerSectionsEnum.Year);
                data.onChangeMonth(monthValue);
              }}
            >
              {monthValue}
            </Typography>
          ))}
        </div>
      </>
    );
  };

  const renderPopUp = () => {
    return (
      <>
        {data.isShowPopup && (
          <div
            className={classes.popUpCloseZone}
            onClick={() => {
              data.setPopup(false);
            }}
          />
        )}
        <div
          className={classNames(
            !data.isShowPopup ? classes.hidden : classes.content,
            classes?.[data.buttonPositionClass]
          )}
        >
          {renderYearSection()}
          {renderMonthSection()}
        </div>
      </>
    );
  };

  return (
    <div className={classNames(classes.root)}>
      <button
        className={classNames(classes.button, disabled ? classes.disabled : "")}
        onClick={() => {
          !disabled && data.setPopup(true);
        }}
        ref={data.buttonRef}
      >
        {data.displayDate(placeholder)}
      </button>
      {renderPopUp()}
    </div>
  );
};
