import { ChangeEventHandler, FC } from "react";
import { Option } from "../types/index.type";
import classes from "./index.module.scss";

type SliderProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  marks?: Option[];
  onChange: ChangeEventHandler<HTMLInputElement>;
} & Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "marks" | "label"
  >;

const Slider: FC<SliderProps> = (props) => {
  return (
    <div className={classes.slider} role="form">
      <label className="flex flex-col" aria-label={props.label}>
        {props.label}
      </label>
      <input type="range" {...props} />
      {props.marks && (
        <datalist id="values">
          {props.marks.map((mark) => (
            <option
              key={mark.value}
              value={mark.value}
              label={mark.label}
            ></option>
          ))}
        </datalist>
      )}
    </div>
  );
};

export { Slider };
