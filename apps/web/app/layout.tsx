import "reflect-metadata";
import React, { ReactNode } from "react";
import "./global.css";
import ProgressBar from "./progressBar";
import { SessionProvider } from "@web/app/sessionProvider";
import { auth } from "@web/auth";

export const metadata = {
  title: "Bright resume",
  description: "Build your resume to be seen by Bright resume",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <SessionProvider session={session}>
          <ProgressBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
