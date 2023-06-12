import { FC } from 'react';
import cls from 'classnames';

import '../tailwind-imports.css';
import TextField from '../textField';
// locals
import { useData } from './useData';

/* eslint-disable-next-line */
export interface ExperienceProps {}

export const Experience: FC<ExperienceProps> = () => {
  const data = useData();
  return (
    <div className={cls('p-1', 'bg-white', 'font-bold', 'text-black')}>
      <h1>Experience</h1>
      <div
        className={cls(
          'ml-2',
          'p-2',
          'bg-white',
          'font-semibold',
          'text-black'
        )}
      >
        <TextField value={data.value} setValue={data.setValue} />
      </div>
    </div>
  );
};

export default Experience;
