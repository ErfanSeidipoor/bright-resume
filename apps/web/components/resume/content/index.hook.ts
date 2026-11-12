"use client";

import { useMemo } from "react";
import { UseFormWatch } from "react-hook-form";
import { CreateResumeResumeInputs } from "@dto";

export const useData = (watch: UseFormWatch<CreateResumeResumeInputs>) => {
  const experienceValues = useMemo(() => {
    return watch("experiences");
  }, [watch("experiences")]);

  const certificationValues = useMemo(() => {
    return watch("certifications");
  }, [watch("certifications")]);

  const educationValues = useMemo(() => {
    return watch("educations");
  }, [watch("educations")]);

  const courseWorkValues = useMemo(() => {
    return watch("courseWorks");
  }, [watch("courseWorks")]);

  const involvementValues = useMemo(() => {
    return watch("involvements");
  }, [watch("involvements")]);

  const projectValues = useMemo(() => {
    return watch("projects");
  }, [watch("projects")]);

  return {
    experienceValues,
    certificationValues,
    educationValues,
    courseWorkValues,
    involvementValues,
    projectValues,
  };
};
