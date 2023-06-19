import { FC } from 'react';

import TextField from '../textField';
// locals
import { useData } from './useData';
import classes from './index.module.scss';

/* eslint-disable-next-line */
export interface ExperienceProps {}

export const Experience: FC<ExperienceProps> = () => {
  const data = useData();
  return (
    <div className={classes.container}>
      <h1>Experience</h1>
      <div className={classes.text}>
        <TextField value={data.value} setValue={data.setValue} />
      </div>
    </div>
  );
};

export default Experience;
