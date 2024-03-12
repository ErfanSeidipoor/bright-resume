import "reflect-metadata";
import React from "react";
import { MainLayout } from "apps/web/components/layouts";
import { handleSignOut } from "./action";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <MainLayout
      handleSignOut={async () => {
        "use server";
        await handleSignOut();
      }}
    >
      {children}
    </MainLayout>
  );
}
