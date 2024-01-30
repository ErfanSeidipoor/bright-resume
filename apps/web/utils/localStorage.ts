/**
 * localStorage wrapper
 */

import { isBrowser } from "./is-browser";

export const localStorage = {
  getItem: (key: string) => {
    if (!isBrowser) return null;
    return window.localStorage.getItem(key);
  },
  setItem: (key: string, value: string) => {
    if (!isBrowser) return;
    return window.localStorage.setItem(key, value);
  },
  removeItem: (key: string) => {
    if (!isBrowser) return;
    return window.localStorage.removeItem(key);
  },
};
