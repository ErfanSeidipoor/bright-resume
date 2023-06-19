import { FC } from 'react';
import cls from 'classnames';

// locals
import { useData } from './useData';
import classes from './index.module.scss';

/* eslint-disable-next-line */
export interface TextFieldProps {
  value: string;
  setValue: (value: string) => void;
}

export const TextField: FC<TextFieldProps> = ({
  value = '',
  setValue = () => undefined,
}) => {
  const data = useData();
  return (
    <div className={classes.container}>
      {!data.showInput && (
        <h2 className={cls('p-1')} onClick={() => data.setShowInput(true)}>
          {value}
        </h2>
      )}
      {data.showInput && (
        <input
          ref={data.inputRef}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(event) =>
            event.key === 'Enter' && data.setShowInput(false)
          }
          value={value}
          onBlur={() => data.setShowInput(false)}
          className={classes.input}
        />
      )}
    </div>
  );
};

export default TextField;
