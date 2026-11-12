import { useEffect, useRef, useState } from "react";
import { texts } from "./texts";
import {
  MonthEnum,
  DatePickerSectionsEnum,
  ButtonPositionClassType,
} from "@bright-resume/components";

type useDataProps = {
  month: MonthEnum | undefined;
  year: number | undefined;
  onChangeMonth: (month: MonthEnum) => void;
  onChangeYear: (year: number) => void;
};

export const useData = ({
  month,
  year,
  onChangeMonth,
  onChangeYear,
}: useDataProps) => {
  const rangeOfYears = (start: number, end: number) =>
    Array(end - start + 1)
      .fill(start)
      .map((year, index) => year + index);

  const years: number[] = rangeOfYears(
    new Date().getFullYear() - 100,
    new Date().getFullYear() + 100
  );
  const months = Object.values(MonthEnum);

  const currentYear = new Date().getFullYear();
  const currentMonth = months[new Date().getMonth()];

  const [isShowPopup, setPopup] = useState(false);
  const [yearPageIndex, setYearPageIndex] = useState(0);

  const [datePickerTab, setDatePickerTab] = useState<DatePickerSectionsEnum>(
    DatePickerSectionsEnum.Year
  );

  const findYearPageIndex = (year: number) => {
    const yearPageIndex = (year - currentYear + 12) / 20;
    const roundedYearPageIndex = Math.floor(yearPageIndex); // or Math.ceil(yearPageIndex) for rounding up
    return roundedYearPageIndex;
  };

  const displayDate = (placeholder = "", notPresent = false) => {
    if (!notPresent && month === currentMonth && year === currentYear) {
      return texts.present;
    }
    if (month && year) {
      return `${month} ${year}`;
    }
    return placeholder;
  };

  useEffect(() => {
    if (!isShowPopup) {
      setDatePickerTab(DatePickerSectionsEnum.Year);
      setYearPageIndex(0);
    } else {
      setYearPageIndex(findYearPageIndex(new Date().getFullYear()));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowPopup]);

  useEffect(() => {
    if (year && !month) {
      onChangeMonth(currentMonth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year, months, onChangeMonth]);

  const isThereBeforeYearsAvailable =
    new Date().getFullYear() + (yearPageIndex - 1) * 20 <
    new Date().getFullYear() - 100;

  const isTherePastYearsAvailable =
    new Date().getFullYear() + (yearPageIndex + 1) * 20 >
    new Date().getFullYear() + 100;

  const filterYearsInCurrentPageHandler = (item: number) =>
    item > new Date().getFullYear() + yearPageIndex * 20 - 12 &&
    item < new Date().getFullYear() + yearPageIndex * 20 + 9;

  const [buttonPositionClass, setButtonPositionClass] =
    useState<ButtonPositionClassType>("");

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const setButtonPosition = () => {
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const isButtonOnLeft = buttonRect.left < window.innerWidth / 2;

        if (isButtonOnLeft) {
          setButtonPositionClass("left");
        } else {
          setButtonPositionClass("right");
        }
      }
    };

    setButtonPosition();
    window.addEventListener("resize", setButtonPosition);

    return () => {
      window.removeEventListener("resize", setButtonPosition);
    };
  }, []);

  return {
    isShowPopup,
    setPopup,
    months,
    years,
    datePickerTab,
    setDatePickerTab,
    yearPageIndex,
    setYearPageIndex,
    displayDate,
    isTherePastYearsAvailable,
    isThereBeforeYearsAvailable,
    filterYearsInCurrentPageHandler,
    year,
    onChangeYear,
    month,
    onChangeMonth,
    currentMonth,
    currentYear,
    buttonPositionClass,
    buttonRef,
  };
};
