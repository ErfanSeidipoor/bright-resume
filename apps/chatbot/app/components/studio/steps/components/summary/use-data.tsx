"use client";

import { UpdateResumeResumeInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStudioContext } from "../../../use-context";

export const useData = () => {
  const {
    selectedResume,
    selectedResumeId,
    updateResumeResume,
    loadingUpdateResumeResume,
  } = useStudioContext();

  const form = useForm<UpdateResumeResumeInputs>({
    resolver: classValidatorResolver(UpdateResumeResumeInputs),
    mode: "onChange",
    defaultValues: {
      resumeId: selectedResumeId!,
      title: selectedResume?.title || "",
      summary: selectedResume?.summary || "",
    },
  });

  useEffect(() => {
    form.reset({
      resumeId: selectedResumeId!,
      title: selectedResume?.title || "",
      summary: selectedResume?.summary || "",
    });
  }, [form, selectedResume, selectedResumeId]);

  const onSubmit: SubmitHandler<UpdateResumeResumeInputs> = (
    updateResumeResumeInputs
  ) => {
    updateResumeResume({ variables: { updateResumeResumeInputs } });
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    updateResumeResume,
  };
};
