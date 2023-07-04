import { FC } from 'react';

// locals
import { useData } from './useData';
import classes from './index.module.scss';

export interface TextFieldProps {
  value: string;
  setValue: (value: string) => void;
  fontSize: number | string;
}

export const TextField: FC<TextFieldProps> = ({
  value = '',
  setValue = () => undefined,
  fontSize,
}) => {
  const data = useData();
  return (
    <div className={classes.container}>
      <input
        ref={data.inputRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={classes.input}
        style={{
          fontSize: fontSize,
        }}
      />
    </div>
  );
};

export default TextField;
