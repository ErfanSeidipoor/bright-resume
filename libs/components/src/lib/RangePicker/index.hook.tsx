import { useEffect, useRef } from "react";

import { MonthEnum } from "@bright-resume/components";

type useDataProps = {
  fromMonth: MonthEnum | undefined;
  fromYear: number | undefined;
};

export const useData = ({ fromMonth, fromYear }: useDataProps) => {
  const fromRef = useRef<HTMLButtonElement | null>(null);
  const toRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    console.log(fromRef, toRef);
  }, [fromRef, toRef]);

  useEffect(() => {
    if (fromMonth && fromYear) {
      fromRef && fromRef.current && fromRef.current.click();
      toRef && toRef.current && toRef.current.click();
    }
  }, [toRef, fromMonth, fromYear]);

  return { fromRef, toRef };
};
