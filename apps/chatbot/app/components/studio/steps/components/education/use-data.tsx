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
      isShowEducation: !!selectedResume_?.isShowEducation,
      educationLabel: selectedResume_?.educationLabel || "",
      educations:
        selectedResume_?.educations?.map((education) => ({
          degree: education.degree || "",
          institute: education.institute || "",
          isShowInstitute: !!education.isShowInstitute,
          isShowLocation: !!education.isShowLocation,
          location: education.location || "",
          isShowDate: !!education.isShowDate,
          from: education.from || "",
          to: education.to || "",
          gpa: education.gpa || "",
          isShowGpa: !!education.isShowGpa,
          isShowPoints: !!education.isShowPoints,
          isShow: !!education.isShow,
          points: education.points?.map((point) => point || "") || [],
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

  const addNewEducation = () => {
    form.setValue("educations", [
      ...(form.getValues("educations") || []),
      {
        degree: "Degree",
        institute: "Institute",
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

    changeSelectedEducationIndex(
      (form.getValues("educations")?.length || 0) - 1
    );
  };

  const removeEducation = (educationIndex: number) => {
    form.setValue("educations", [
      ...(form.getValues("educations") || []).filter(
        (_, index) => index !== educationIndex
      ),
    ]);
    changeSelectedEducationIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const addNewPoint = (educationIndex: number) => {
    form.setValue(
      "educations",
      [...(form.getValues("educations") || [])].map((education, index) => ({
        ...education,
        points:
          index === educationIndex
            ? [...(education.points || []), "new Point"]
            : education.points,
      }))
    );
    form.trigger();
  };

  const removePoint = (educationIndex: number, pointIndex: number) => {
    form.setValue(
      "educations",
      [...(form.getValues("educations") || [])].map((education, index) => ({
        ...education,
        points:
          index === educationIndex
            ? [
                ...(education.points || []).filter(
                  (_, index) => index !== pointIndex
                ),
              ]
            : education.points,
      }))
    );
    form.trigger();
  };

  const changeSelectedEducationIndex = (index: number) => {
    if (index < (form.getValues("educations")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewEducation,
    removeEducation,
    changeSelectedEducationIndex,
    addNewPoint,
    removePoint,
  };
};
