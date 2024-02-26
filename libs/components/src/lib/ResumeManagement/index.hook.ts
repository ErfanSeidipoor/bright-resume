"use client";
import { ChangeEvent, useEffect, useState } from "react";

export const useData = (onClose?: () => void) => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      onClose?.();
    }, 500);
  };

  const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const emptySearchHandler = () => {
    setValue("");
  };

  const addResumeHandler = () => {};

  return {
    closeModal,
    showModal,
    value,
    searchChangeHandler,
    emptySearchHandler,
    addResumeHandler,
  };
};
