import type { NextAuthConfig, Session } from "next-auth";
import { routes } from "./utils/routes";

export const authConfig = {
  // debug: process.env.NODE_ENV !== "production",
  pages: {
    signIn: "/login",
  },
  theme: {
    logo: "https://bright-resume.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-with-typography-horizontal.2df6aa07.png&w=640&q=75",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnResume = nextUrl.pathname.startsWith(routes.resume);

      const protectedRoute = isOnResume;

      if (protectedRoute) {
        if (isLoggedIn) return true;
        return false;
      }
      if (!protectedRoute) {
        return true;
      }
      return false;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
