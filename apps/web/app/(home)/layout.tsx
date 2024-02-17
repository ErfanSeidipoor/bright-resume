import "reflect-metadata";

import React from "react";
import { MainLayout } from "apps/web/components/layouts";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return <MainLayout>{children}</MainLayout>;
}
