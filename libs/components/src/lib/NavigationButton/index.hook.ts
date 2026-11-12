import { useState, useEffect } from "react";

export const useData = () => {
  const [page, setPage] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [hasPrevPage, setHasPrevPage] = useState<boolean>(false);

  const onNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const onPrevPage = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    if (page <= 0) {
      setHasPrevPage(true);
    } else if (page >= 5) {
      setHasNextPage(true);
    } else {
      setHasPrevPage(false);
      setHasNextPage(false);
    }
  }, [page, hasPrevPage, hasNextPage]);

  return {
    page,
    hasPrevPage,
    onPrevPage,
    hasNextPage,
    onNextPage,
  };
};
