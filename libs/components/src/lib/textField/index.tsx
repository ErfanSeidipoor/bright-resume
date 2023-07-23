import { FC } from 'react';
import cls from 'classnames';

// locals
import { useData } from './index.hook';
import classes from './index.module.scss';
import SolarPenBoldSvg from '../../../../assets/src/svg/solar-pen-bold.svg';
import Image from 'next/image';
import Typography from '../Typography';

export enum TextFieldVariantEnum {
  'xxl' = 'h1',
  'xl' = 'h2',
  'lg' = 'h3',
  'md' = 'h4',
  'sm' = 'h5',
  'xs' = 'h6',
  'xxs' = 'h6',
}

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: TextFieldVariantEnum;
}

export const TextField: FC<TextFieldProps> = ({
  variant = TextFieldVariantEnum.lg,
  ...props
}) => {
  const data = useData(variant);
  return (
    <div
      className={cls(classes.root, {
        [classes.enableInput]: !!data.isInputActive,
      })}
    >
      {!data.isInputActive && (
        <Typography variant={variant}>
          {props.value || props.defaultValue}
        </Typography>
      )}
      {data.isInputActive && (
        <input
          ref={data.inputRef}
          className={cls(
            classes.input,
            data.handleGetVariantClassName(variant),
            props.className
          )}
          disabled={!data.isInputActive}
          onKeyDown={(event) =>
            event.key === 'Enter' && data.setIsInputActive(false)
          }
          {...props}
        />
      )}

      {!data.isInputActive && (
        <Image
          className={classes.editIcon}
          src={SolarPenBoldSvg}
          alt="arrow-right"
          width={18}
          height={18}
          onClick={() => data.setIsInputActive(!data.isInputActive)}
        />
      )}
    </div>
  );
};

export default TextField;
