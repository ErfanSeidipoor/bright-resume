/**
 * Description
 * @param {any} {children}:Props
 * @returns {any}
 */
import React from "react";
import { MainLayout } from "apps/web/components/layouts";

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  return <MainLayout>{children}</MainLayout>;
}
