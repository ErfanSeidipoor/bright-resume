"use client";

import { UpdateResumeResumeInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStudioContext } from "../../../use-context";

export const useData = () => {
  const {
    selectedResume,
    selectedResumeId,
    resumeSubSectionIndex,
    setResumeSubSectionIndex,
    updateResumeResume,
    loadingUpdateResumeResume,
  } = useStudioContext();

  const getFormValues = useCallback(
    (selectedResumeId_: string, selectedResume_: typeof selectedResume) => ({
      resumeId: selectedResumeId_!,
      title: selectedResume_?.title || "",
      isShowExperience: !!selectedResume_?.isShowExperience,
      experienceLabel: selectedResume_?.experienceLabel || "",
      experiences:
        selectedResume_?.experiences?.map((experience) => ({
          role: experience.role || "",
          company: experience.company || "",
          isShowLocation: !!experience.isShowLocation,
          location: experience.location || "",
          isShowDate: !!experience.isShowDate,
          from: experience.from || "",
          to: experience.to || "",
          isShowPoints: !!experience.isShowPoints,
          isShow: !!experience.isShow,
          points: experience.points?.map((point) => point || "") || [],
        })) || [],
    }),
    []
  );

  const form = useForm<UpdateResumeResumeInputs>({
    resolver: classValidatorResolver(UpdateResumeResumeInputs),
    mode: "onChange",
    defaultValues: getFormValues(selectedResumeId!, selectedResume),
  });

  useEffect(() => {
    form.reset(getFormValues(selectedResumeId!, selectedResume));
  }, [form, selectedResume, selectedResumeId, getFormValues]);

  const onSubmit: SubmitHandler<UpdateResumeResumeInputs> = (
    updateResumeResumeInputs
  ) => {
    updateResumeResume({ variables: { updateResumeResumeInputs } });
  };

  const addNewExperience = () => {
    form.setValue("experiences", [
      ...(form.getValues("experiences") || []),
      {
        role: "Role",
        company: "company",
        isShowLocation: false,
        location: "location",
        isShowDate: false,
        from: "",
        to: "",
        isShowPoints: false,
        isShow: true,
        points: [],
      },
    ]);

    changeSelectedExperienceIndex(
      (form.getValues("experiences")?.length || 0) - 1
    );
  };

  const removeExperience = (experienceIndex: number) => {
    form.setValue("experiences", [
      ...(form.getValues("experiences") || []).filter(
        (_, index) => index !== experienceIndex
      ),
    ]);
    changeSelectedExperienceIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const addNewPoint = (experienceIndex: number) => {
    form.setValue(
      "experiences",
      [...(form.getValues("experiences") || [])].map((experience, index) => ({
        ...experience,
        points:
          index === experienceIndex
            ? [...(experience.points || []), "new Point"]
            : experience.points,
      }))
    );
    form.trigger();
  };

  const removePoint = (experienceIndex: number, pointIndex: number) => {
    form.setValue(
      "experiences",
      [...(form.getValues("experiences") || [])].map((experience, index) => ({
        ...experience,
        points:
          index === experienceIndex
            ? [
                ...(experience.points || []).filter(
                  (_, index) => index !== pointIndex
                ),
              ]
            : experience.points,
      }))
    );
    form.trigger();
  };

  const changeSelectedExperienceIndex = (index: number) => {
    if (index < (form.getValues("experiences")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewExperience,
    removeExperience,
    changeSelectedExperienceIndex,
    addNewPoint,
    removePoint,
  };
};
