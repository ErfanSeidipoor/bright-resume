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
      isShowProject: !!selectedResume_?.isShowProject,
      projectLabel: selectedResume_?.projectLabel || "",
      projects:
        selectedResume_?.projects?.map((project) => ({
          role: project.role || "",
          company: project.company || "",
          isShowLocation: !!project.isShowLocation,
          location: project.location || "",
          isShowDate: !!project.isShowDate,
          from: project.from || "",
          to: project.to || "",
          isShowPoints: !!project.isShowPoints,
          isShow: !!project.isShow,
          points: project.points?.map((point) => point || "") || [],
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

  const addNewProject = () => {
    form.setValue("projects", [
      ...(form.getValues("projects") || []),
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

    changeSelectedProjectIndex((form.getValues("projects")?.length || 0) - 1);
  };

  const removeProject = (projectIndex: number) => {
    form.setValue("projects", [
      ...(form.getValues("projects") || []).filter(
        (_, index) => index !== projectIndex
      ),
    ]);
    changeSelectedProjectIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const addNewPoint = (projectIndex: number) => {
    form.setValue(
      "projects",
      [...(form.getValues("projects") || [])].map((project, index) => ({
        ...project,
        points:
          index === projectIndex
            ? [...(project.points || []), "new Point"]
            : project.points,
      }))
    );
    form.trigger();
  };

  const removePoint = (projectIndex: number, pointIndex: number) => {
    form.setValue(
      "projects",
      [...(form.getValues("projects") || [])].map((project, index) => ({
        ...project,
        points:
          index === projectIndex
            ? [
                ...(project.points || []).filter(
                  (_, index) => index !== pointIndex
                ),
              ]
            : project.points,
      }))
    );
    form.trigger();
  };

  const changeSelectedProjectIndex = (index: number) => {
    if (index < (form.getValues("projects")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewProject,
    removeProject,
    changeSelectedProjectIndex,
    addNewPoint,
    removePoint,
  };
};
