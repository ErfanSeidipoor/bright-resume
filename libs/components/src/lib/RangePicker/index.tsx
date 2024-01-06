import { useData } from "./index.hook";
import classes from "./index.module.scss";
import { DatePicker, RangePickerProps } from "@bright-resume/components";
import cls from "classnames";
import { texts } from "./texts";

export const RangePicker: React.FC<RangePickerProps> = ({
  id = "",
  className = "",
  fromMonth = undefined,
  fromYear = undefined,
  onChangeFromMonth = () => undefined,
  onChangeFromYear = () => undefined,
  toMonth = undefined,
  toYear = undefined,
  onChangeToMonth = () => undefined,
  onChangeToYear = () => undefined,
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
