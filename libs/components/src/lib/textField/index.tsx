import { FC } from 'react';
import cls from 'classnames';

import '../tailwind-imports.css';
// locals
import { useData } from './useData';

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
    <div className={cls('bg-white', 'font-bold', 'text-black')}>
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
          // onBlur={() => data.setShowInput(false)}
          className={cls(
            'p-1',
            'bg-white',
            'font-bold',
            'text-black',
            'outline-none',
            'focus:border-blue-300',
            'focus:border-solid',
            'focus:border-2',
            'focus:rounded-md'
          )}
        />
      )}
    </div>
  );
};

export default TextField;
