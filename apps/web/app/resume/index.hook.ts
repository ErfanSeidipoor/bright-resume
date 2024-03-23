"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
// components
import { SectionsEnum } from "@bright-resume/components";
// dto
import { CreateResumeResumeInputs } from "@dto";

export const useData = () => {
  const [selectedSections, setSelectedSections] = useState<SectionsEnum[]>([
    SectionsEnum.about_me,
    SectionsEnum.experience,
    SectionsEnum.education,
  ]);
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateResumeResumeInputs>({
    mode: "onSubmit",
    resolver: classValidatorResolver(CreateResumeResumeInputs),
    defaultValues: {
      experiences: [
        {
          company: "",
          role: "",
          points: [],
        },
      ],
      experienceLabel: "Experience",
      educations: [
        {
          degree: "",
          points: [],
        },
      ],
      educationLabel: "Education",
      certifications: [
        {
          name: "",
          points: [],
        },
      ],
      certificationLabel: "Certification",
      courseWorks: [
        {
          name: "",
          points: [],
        },
      ],
      courseWorkLabel: "Course Work",
      involvements: [
        {
          role: "",
          points: [],
        },
      ],
      involvementLabel: "Involvement",
      projects: [
        {
          title: "",
          points: [],
        },
      ],
      projectLabel: "Project",
    },
  });

  const handleAppendSections = (section: SectionsEnum) => {
    setSelectedSections((prevState) => [...prevState, section]);
  };

  const handleRemoveSections = (section: SectionsEnum) => {
    setSelectedSections((prevState) =>
      prevState.filter((item) => item !== section)
    );
  };

  const handleOpenConfirmation = () => setIsOpenConfirmation(true);
  const handleCloseConfirmation = () => setIsOpenConfirmation(false);

  const handleSubmitForm = () => console.log(watch());

  return {
    selectedSections,
    handleAppendSections,
    handleRemoveSections,
    control,
    setValue,
    watch,
    isOpenConfirmation,
    handleOpenConfirmation,
    handleCloseConfirmation,
    handleSubmitForm,
  };
};
