"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateResumeResumeInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useCallback, useEffect } from "react";
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
      isShowCertification: !!selectedResume_?.isShowCertification,
      certificationLabel: selectedResume_?.certificationLabel || "",
      certifications:
        selectedResume_?.certifications?.map((certification) => ({
          name: certification.name || "",
          institute: certification.institute || "",
          isShowInstitute: !!certification.isShowInstitute,
          isShowDate: !!certification.isShowDate,
          year: certification.year || "",
          isShowPoints: !!certification.isShowPoints,
          isShow: !!certification.isShow,
          points: certification.points?.map((point) => point || "") || [],
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

  const addNewCertification = () => {
    form.setValue("certifications", [
      ...(form.getValues("certifications") || []),
      {
        name: "Name",
        institute: "Institute",
        isShowDate: false,
        year: "1900",
        isShowPoints: false,
        isShow: true,
        points: [],
      },
    ]);

    changeSelectedCertificationIndex(
      (form.getValues("certifications")?.length || 0) - 1
    );
  };

  const removeCertification = (certificationIndex: number) => {
    form.setValue("certifications", [
      ...(form.getValues("certifications") || []).filter(
        (_, index) => index !== certificationIndex
      ),
    ]);
    changeSelectedCertificationIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const addNewPoint = (certificationIndex: number) => {
    form.setValue(
      "certifications",
      [...(form.getValues("certifications") || [])].map(
        (certification, index) => ({
          ...certification,
          points:
            index === certificationIndex
              ? [...(certification.points || []), "new Point"]
              : certification.points,
        })
      )
    );
    form.trigger();
  };

  const removePoint = (certificationIndex: number, pointIndex: number) => {
    form.setValue(
      "certifications",
      [...(form.getValues("certifications") || [])].map(
        (certification, index) => ({
          ...certification,
          points:
            index === certificationIndex
              ? [
                  ...(certification.points || []).filter(
                    (_, index) => index !== pointIndex
                  ),
                ]
              : certification.points,
        })
      )
    );
    form.trigger();
  };

  const changeSelectedCertificationIndex = (index: number) => {
    if (index < (form.getValues("certifications")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewCertification,
    removeCertification,
    changeSelectedCertificationIndex,
    addNewPoint,
    removePoint,
  };
};
