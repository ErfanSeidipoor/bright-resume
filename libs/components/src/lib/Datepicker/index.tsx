/* eslint-disable @nx/enforce-module-boundaries */
import Image from "next/image";
import { DatePickerSectionsEnum, MonthEnum, useData } from "./index.hook";
import classes from "./index.module.scss";
import classNames from "classnames";

import ArrowDropDownLeft from "../../../../assets/src/svg/arrow-dropdown-left-datePicker.svg";
import ArrowRight from "../../../../assets/src/svg/arrow-right-datePicker.svg";
import ArrowLeft from "../../../../assets/src/svg/arrow-left-datePicker.svg";

export interface DatePickerProps {
  month: MonthEnum | undefined;
  year: number | undefined;
  onChangeMonth: React.Dispatch<React.SetStateAction<MonthEnum | undefined>>;
  onChangeYear: React.Dispatch<React.SetStateAction<number | undefined>>;
  placeholder?: string;
  placeholderColor?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  month = undefined,
  year = undefined,
  onChangeMonth,
  onChangeYear,
  placeholder = "Pick your date!",
  placeholderColor = "black",
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
            <Image
              src={ArrowDropDownLeft}
              alt="arrow-right"
              width={24}
              height={24}
            />
            <p className={classes.text}>{data.displayDate("Select a year")}</p>
          </div>
          <div className={classes.actions}>
            <Image
              src={ArrowLeft}
              className={classNames(
                classes.image,
                data.isThereBeforeYearsAvailable ? classes.disableImage : ""
              )}
              alt="arrow-right"
              width={24}
              height={24}
              onClick={() =>
                !data.isThereBeforeYearsAvailable &&
                data.setYearPageIndex((prevYearPage) => prevYearPage - 1)
              }
            />
            <Image
              src={ArrowRight}
              className={classNames(
                classes.image,
                data.isTherePastYearsAvailable ? classes.disableImage : ""
              )}
              alt="arrow-right"
              width={24}
              height={24}
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
              <span
                className={classNames(
                  classes.item,
                  year === yearValue ? classes.selectedItem : ""
                )}
                onClick={() => data.onChangeYear(yearValue)}
              >
                {yearValue}
              </span>
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
          <p className={classes.text}>Select a month</p>
        </div>
        <div className={classes.itemsMonth}>
          {data.months.map((monthValue) => (
            <span
              className={classNames(
                classes.itemMonth,
                month === monthValue ? classes.selectedItemMonth : ""
              )}
              onClick={() => {
                data.setDatePickerTab(DatePickerSectionsEnum.Year);
                data.onChangeMonth(monthValue);
              }}
            >
              {monthValue}
            </span>
          ))}
        </div>
      </>
    );
  };

  const renderPopUp = () => {
    if (!data.isShowPopup) return;
    return (
      <>
        <div
          className={classes.popUpCloseZone}
          onClick={() => {
            data.setPopup(false);
          }}
        />
        <div className={classes.content}>
          {renderYearSection()}
          {renderMonthSection()}
        </div>
      </>
    );
  };

  return (
    <>
      <button
        className={classes.root}
        onClick={(e) => {
          data.setPopup(true);
        }}
        style={{
          color: placeholderColor,
        }}
      >
        {data.displayDate(placeholder)}
      </button>

      {renderPopUp()}
    </>
  );
};

export default DatePicker;
