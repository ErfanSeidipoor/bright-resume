import type { NextAuthConfig, Session } from "next-auth";
import { routes } from "./utils/routes";

export const authConfig = {
  debug: process.env.NODE_ENV !== "production",
  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isOnHome = nextUrl.pathname.startsWith(routes.home);
      const isOnResume = nextUrl.pathname.startsWith(routes.resume);
      const isOnLogin = nextUrl.pathname.startsWith(routes.login);
      const isOnSignup = nextUrl.pathname.startsWith(routes.signup);

      const allowed = isOnHome || isOnLogin || isOnSignup;

      if (isOnResume) {
        if (isLoggedIn) return true;
        return false;
      }
      if (isLoggedIn || allowed) {
        return true;
      }
      return false;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
