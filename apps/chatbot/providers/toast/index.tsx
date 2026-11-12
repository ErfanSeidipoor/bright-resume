"use client";

import { FC } from "react";
import { Toaster } from "@resume-template-components/shadcn-ui";

export const ToastProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
