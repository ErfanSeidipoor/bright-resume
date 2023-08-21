import { useEffect, useState } from 'react';

export enum MonthEnum {
  Jan = 'Jan',
  Feb = 'Feb',
  Mar = 'Mar',
  Apr = 'Apr',
  May = 'May',
  Jun = 'Jun',
  Jul = 'Jul',
  Aug = 'Aug',
  Sep = 'Sep',
  Oct = 'Oct',
  Nov = 'Nov',
  Dec = 'Dec',
}

export enum DatePickerSectionsEnum {
  Month = 'Month',
  Year = 'Year',
}

type useDataProps = {
  month: MonthEnum | undefined;
  year: number | undefined;
  onChangeMonth: React.Dispatch<React.SetStateAction<MonthEnum | undefined>>;
  onChangeYear: React.Dispatch<React.SetStateAction<number | undefined>>;
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

  const [isShowPopup, setPopup] = useState(false);
  const [yearPageIndex, setYearPageIndex] = useState(0);

  const [datePickerTab, setDatePickerTab] = useState<DatePickerSectionsEnum>(
    DatePickerSectionsEnum.Year
  );

  const findYearPageIndex = (year: number) => {
    const currentYear = new Date().getFullYear();
    const yearPageIndex = (year - currentYear + 12) / 20;
    const roundedYearPageIndex = Math.floor(yearPageIndex); // or Math.ceil(yearPageIndex) for rounding up
    return roundedYearPageIndex;
  };

  const displayDate = (placeholder = '') => {
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
  }, [isShowPopup]);

  useEffect(() => {
    if (year && !month) {
      onChangeMonth(months[new Date().getMonth()]);
    }
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
  };
};
