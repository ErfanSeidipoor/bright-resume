import { useData } from "./index.hook";
import classes from "./index.module.scss";

import DatePicker from "../Datepicker";
import { MonthEnum } from "../Datepicker/index.hook";
import cls from "classnames";
import { texts } from "./texts";

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
  disabled?: boolean;
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
  disabled = false,
}) => {
  const data = useData({ fromMonth, fromYear });

  return (
    <div
      id={id}
      className={cls(classes.root, className, disabled ? classes.disabled : "")}
    >
      <DatePicker
        month={fromMonth}
        year={fromYear}
        onChangeMonth={onChangeFromMonth}
        onChangeYear={onChangeFromYear}
        placeholder={texts.from}
        ref={data.fromRef}
        disabled={disabled}
      />
      -
      <DatePicker
        month={toMonth}
        year={toYear}
        onChangeMonth={onChangeToMonth}
        onChangeYear={onChangeToYear}
        placeholder={texts.until}
        ref={data.toRef}
        disabled={disabled}
      />
    </div>
  );
};

export default RangePicker;
