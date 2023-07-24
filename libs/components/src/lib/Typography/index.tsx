import cls from 'classnames';

import classes from './index.module.scss';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: Variant;
  component?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  component: Component = 'p',
  children,
  className,
  ...props
}) => {
  const rootClasses = cls(classes.root, className, {
    [classes.h1]: variant === 'h1',
    [classes.h2]: variant === 'h2',
    [classes.h3]: variant === 'h3',
    [classes.h4]: variant === 'h4',
    [classes.h5]: variant === 'h5',
    [classes.h6]: variant === 'h6',
  });

  return (
    <Component className={rootClasses} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
