/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useData } from "./index.hook";
import classes from "./index.module.scss";

import DatePicker from "../Datepicker";
import { MonthEnum } from "../Datepicker/index.hook";
import cls from "classnames";

export interface RangePickerProps {
  id?: string;
  className?: string;
  fromMonth: MonthEnum | undefined;
  fromYear: number | undefined;
  onChangeFromMonth: React.Dispatch<
    React.SetStateAction<MonthEnum | undefined>
  >;
  onChangeFromYear: React.Dispatch<React.SetStateAction<number | undefined>>;
  toMonth: MonthEnum | undefined;
  toYear: number | undefined;
  onChangeToMonth: React.Dispatch<React.SetStateAction<MonthEnum | undefined>>;
  onChangeToYear: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const RangePicker: React.FC<RangePickerProps> = ({
  id = "",
  className = "",
  fromMonth = undefined,
  fromYear = undefined,
  onChangeFromMonth,
  onChangeFromYear,
  toMonth = undefined,
  toYear = undefined,
  onChangeToMonth,
  onChangeToYear,
}) => {
  const data = useData({ fromMonth, fromYear });

  return (
    <div id={id} className={cls(classes.root, className)}>
      <DatePicker
        month={fromMonth}
        year={fromYear}
        onChangeMonth={onChangeFromMonth}
        onChangeYear={onChangeFromYear}
        placeholder="From"
        ref={data.fromRef}
      />
      -
      <DatePicker
        month={toMonth}
        year={toYear}
        onChangeMonth={onChangeToMonth}
        onChangeYear={onChangeToYear}
        placeholder="Until"
        ref={data.toRef}
      />
    </div>
  );
};

export default RangePicker;
