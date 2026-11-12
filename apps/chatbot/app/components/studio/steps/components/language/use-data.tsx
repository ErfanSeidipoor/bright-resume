"use client";

import { MUTATION_UPDATE_RESUME_RESUME } from "../../../gql";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { UpdateResumeResumeInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useToast } from "@resume-template-components/shadcn-ui";
import {
  UpdateResumeMutation,
  UpdateResumeMutationVariables,
} from "@chatbot/gql/graphql";
import { useStudioContext } from "../../../use-context";
import { useCallback, useEffect } from "react";

export const useData = () => {
  const {
    selectedResume,
    selectedResumeId,
    refetchSelectedResume,
    resumeSubSectionIndex,
    setResumeSubSectionIndex,
  } = useStudioContext();

  const { toast } = useToast();

  const getFormValues = useCallback(
    (selectedResumeId_: string, selectedResume_: typeof selectedResume) => ({
      resumeId: selectedResumeId_!,
      title: selectedResume_?.title || "",
      isShowLanguage: !!selectedResume_?.isShowLanguage,
      languageLabel: selectedResume_?.languageLabel || "",
      languages:
        selectedResume_?.languages?.map((language) => ({
          name: language.name || "",
          level: language.level || "",
          isShowLevel: !!language.isShowLevel,
          isShow: !!language.isShow,
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

  const [updateResumeResume, { loading }] = useMutation<
    UpdateResumeMutation,
    UpdateResumeMutationVariables
  >(MUTATION_UPDATE_RESUME_RESUME, {
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
    onCompleted: async () => {
      refetchSelectedResume();
      toast({
        title: "Welcome!",
        description: "Resume updated Successfully!",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateResumeResumeInputs> = (
    updateResumeResumeInputs
  ) => {
    updateResumeResume({ variables: { updateResumeResumeInputs } });
  };

  const addNewLanguage = () => {
    form.setValue("languages", [
      ...(form.getValues("languages") || []),
      {
        name: "language...",
        level: "Level...",
        isShow: true,
        isShowLevel: true,
      },
    ]);

    changeSelectedLanguageIndex((form.getValues("languages")?.length || 0) - 1);
  };

  const removeLanguage = (languageIndex: number) => {
    form.setValue("languages", [
      ...(form.getValues("languages") || []).filter(
        (_, index) => index !== languageIndex
      ),
    ]);
    changeSelectedLanguageIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const changeSelectedLanguageIndex = (index: number) => {
    if (index < (form.getValues("languages")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loading,
    resumeSubSectionIndex,
    addNewLanguage,
    removeLanguage,
    changeSelectedLanguageIndex,
  };
};
