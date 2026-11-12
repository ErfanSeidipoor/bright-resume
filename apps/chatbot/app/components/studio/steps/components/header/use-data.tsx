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
      name: selectedResume?.name || "",
      role: selectedResume?.role || "",

      phoneNumber: selectedResume?.phoneNumber || "",
      isShowPhoneNumber: !!selectedResume?.isShowPhoneNumber,

      linkedin: selectedResume?.linkedin || "",
      isShowLinkedin: !!selectedResume?.isShowLinkedin,

      website: selectedResume?.website || "",
      isShowWebsite: !!selectedResume?.isShowWebsite,

      email: selectedResume?.email || "",
      isShowEmail: !!selectedResume?.isShowWebsite,

      location: selectedResume?.location || "",
      isShowLocation: !!selectedResume?.isShowWebsite,
    },
  });

  useEffect(() => {
    form.reset({
      resumeId: selectedResumeId!,
      title: selectedResume?.title || "",
      name: selectedResume?.name || "",
      role: selectedResume?.role || "",

      phoneNumber: selectedResume?.phoneNumber || "",
      isShowPhoneNumber: !!selectedResume?.isShowPhoneNumber,

      linkedin: selectedResume?.linkedin || "",
      isShowLinkedin: !!selectedResume?.isShowLinkedin,

      website: selectedResume?.website || "",
      isShowWebsite: !!selectedResume?.isShowWebsite,

      email: selectedResume?.email || "",
      isShowEmail: !!selectedResume?.isShowWebsite,

      location: selectedResume?.location || "",
      isShowLocation: !!selectedResume?.isShowWebsite,
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
  };
};
