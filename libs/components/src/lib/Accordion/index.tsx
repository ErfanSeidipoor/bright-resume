import { FC, ReactNode } from "react";
// types
// components
// locals

type Props = {
  children: ReactNode;
  className: string;
  defaultExpanded: boolean;
  disabled: boolean;
  disableGutters: boolean;
  expanded: boolean;
  onChange: () => void;
  square: boolean;
};

export const TextArea: FC<Props> = () => {
  return <div>hello</div>;
};
