import { useState, useEffect } from "react";
import { useOutsideClick } from "../nav/index.hooks";

export const useSidebar = (callback: () => void) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  return { open, setOpen };
};
