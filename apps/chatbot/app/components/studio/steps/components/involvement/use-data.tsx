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
      isShowInvolvement: !!selectedResume_?.isShowInvolvement,
      involvementLabel: selectedResume_?.involvementLabel || "",
      involvements:
        selectedResume_?.involvements?.map((involvement) => ({
          role: involvement.role || "",
          company: involvement.company || "",
          isShowLocation: !!involvement.isShowLocation,
          location: involvement.location || "",
          isShowDate: !!involvement.isShowDate,
          from: involvement.from || "",
          to: involvement.to || "",
          isShowPoints: !!involvement.isShowPoints,
          isShow: !!involvement.isShow,
          points: involvement.points?.map((point) => point || "") || [],
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

  const addNewInvolvement = () => {
    form.setValue("involvements", [
      ...(form.getValues("involvements") || []),
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

    changeSelectedInvolvementIndex(
      (form.getValues("involvements")?.length || 0) - 1
    );
  };

  const removeInvolvement = (involvementIndex: number) => {
    form.setValue("involvements", [
      ...(form.getValues("involvements") || []).filter(
        (_, index) => index !== involvementIndex
      ),
    ]);
    changeSelectedInvolvementIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const addNewPoint = (involvementIndex: number) => {
    form.setValue(
      "involvements",
      [...(form.getValues("involvements") || [])].map((involvement, index) => ({
        ...involvement,
        points:
          index === involvementIndex
            ? [...(involvement.points || []), "new Point"]
            : involvement.points,
      }))
    );
    form.trigger();
  };

  const removePoint = (involvementIndex: number, pointIndex: number) => {
    form.setValue(
      "involvements",
      [...(form.getValues("involvements") || [])].map((involvement, index) => ({
        ...involvement,
        points:
          index === involvementIndex
            ? [
                ...(involvement.points || []).filter(
                  (_, index) => index !== pointIndex
                ),
              ]
            : involvement.points,
      }))
    );
    form.trigger();
  };

  const changeSelectedInvolvementIndex = (index: number) => {
    if (index < (form.getValues("involvements")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewInvolvement,
    removeInvolvement,
    changeSelectedInvolvementIndex,
    addNewPoint,
    removePoint,
  };
};
