"use client";
import { useState } from "react";
import { SectionsEnum } from "@bright-resume/components";

export const useData = () => {
  const [selectedSections, setSelectedSections] = useState<SectionsEnum[]>([
    SectionsEnum.about_me,
    SectionsEnum.experience,
    SectionsEnum.education,
  ]);

  const handleAppendSections = (section: SectionsEnum) => {
    setSelectedSections((prevState) => [...prevState, section]);
  };

  const handleRemoveSections = (section: SectionsEnum) => {
    setSelectedSections((prevState) =>
      prevState.filter((item) => item !== section)
    );
  };

  return {
    selectedSections,
    handleAppendSections,
    handleRemoveSections,
  };
};
