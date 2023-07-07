import classes from './index.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, title, ...rootProps } = props;

  return (
    <button className={classes.root} {...rootProps}>
      {children}
    </button>
  );
};

export default Button;
