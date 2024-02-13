import React from "react";
import { MainLayout } from "apps/web/components/layouts";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
