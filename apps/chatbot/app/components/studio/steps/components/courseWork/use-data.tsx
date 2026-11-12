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
      isShowCourseWork: !!selectedResume_?.isShowCourseWork,
      courseWorkLabel: selectedResume_?.courseWorkLabel || "",
      courseWorks:
        selectedResume_?.courseWorks?.map((courseWork) => ({
          name: courseWork.name || "",
          institute: courseWork.institute || "",
          isShowInstitute: !!courseWork.isShowInstitute,
          isShowDate: !!courseWork.isShowDate,
          year: courseWork.year || "",
          skills: courseWork.skills || "",
          isShowSkills: !!courseWork.isShowSkills,
          isShowPoints: !!courseWork.isShowPoints,
          isShow: !!courseWork.isShow,
          points: courseWork.points?.map((point) => point || "") || [],
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

  const addNewCourseWork = () => {
    form.setValue("courseWorks", [
      ...(form.getValues("courseWorks") || []),
      {
        name: "Name",
        institute: "Institute",
        isShowDate: false,
        year: "",
        isShowPoints: false,
        isShow: true,
        skills: "skills",
        points: [],
      },
    ]);

    changeSelectedCourseWorkIndex(
      (form.getValues("courseWorks")?.length || 0) - 1
    );
  };

  const removeCourseWork = (courseWorkIndex: number) => {
    form.setValue("courseWorks", [
      ...(form.getValues("courseWorks") || []).filter(
        (_, index) => index !== courseWorkIndex
      ),
    ]);
    changeSelectedCourseWorkIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const addNewPoint = (courseWorkIndex: number) => {
    form.setValue(
      "courseWorks",
      [...(form.getValues("courseWorks") || [])].map((courseWork, index) => ({
        ...courseWork,
        points:
          index === courseWorkIndex
            ? [...(courseWork.points || []), "new Point"]
            : courseWork.points,
      }))
    );
    form.trigger();
  };

  const removePoint = (courseWorkIndex: number, pointIndex: number) => {
    form.setValue(
      "courseWorks",
      [...(form.getValues("courseWorks") || [])].map((courseWork, index) => ({
        ...courseWork,
        points:
          index === courseWorkIndex
            ? [
                ...(courseWork.points || []).filter(
                  (_, index) => index !== pointIndex
                ),
              ]
            : courseWork.points,
      }))
    );
    form.trigger();
  };

  const changeSelectedCourseWorkIndex = (index: number) => {
    if (index < (form.getValues("courseWorks")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewCourseWork,
    removeCourseWork,
    changeSelectedCourseWorkIndex,
    addNewPoint,
    removePoint,
  };
};
