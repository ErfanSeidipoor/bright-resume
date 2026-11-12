"use client";

import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import { CreateResumeResumeInputs } from "@dto";
import { useToast } from "@resume-template-components/shadcn-ui";

import {
  CreateResumeMutation,
  CreateResumeMutationVariables,
  CreateResumeResumeInputsGql,
} from "@chatbot/gql/graphql";

import { MUTATION_CREATE_RESUME_RESUME } from "./gql";
import { useStudioContext } from "../use-context";
import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

export const useData = () => {
  const {
    isOpenNewResumeDialog,
    setIsOpenNewResumeDialog,
    setResumes,
    setSelectedResumeId,
    resumes,
    initialLoading,
    selectedResumeId,
  } = useStudioContext();
  const { toast } = useToast();

  const form = useForm<CreateResumeResumeInputs>({
    resolver: classValidatorResolver(CreateResumeResumeInputs),
    mode: "onChange",
    defaultValues: {
      title: "",

      name: "Your Name",
      role: "Your Role",
      fontFamily: ResumeFontFamilyEnum.Arial,
      color: ResumeColorEnum.Black,
      fontSize: ResumeFontSizeEnum.Medium,

      summaryLabel: "Summary",
      summary: "Your summary",
      summaryOrder: 1,
      isShowSummary: true,

      experienceLabel: "Experiences",
      experienceOrder: 2,
      isShowExperience: true,
      experiences: [
        {
          company: "Company",
          role: "Role",
          from: "from",
          to: "to",
          location: "Location",
          isShowDate: true,
          isShow: true,
          isShowLocation: true,
          isShowPoints: true,
          points: ["Point ....."],
        },
      ],

      isShowInvolvement: true,
      involvementLabel: "Involvements",
      involvementOrder: 3,
      involvements: [
        {
          company: "Involvement",
          role: "Role",
          from: "from",
          to: "to",
          location: "Location",
          isShowDate: true,
          isShow: true,
          isShowLocation: true,
          isShowPoints: true,
          points: ["point ....."],
        },
      ],

      projectLabel: "Projects",
      isShowProject: true,
      projectOrder: 4,
      projects: [
        {
          company: "Company",
          role: "Role",
          from: "from",
          to: "to",
          isShowCompany: true,
          isShowDate: true,
          isShow: true,
          isShowPoints: true,
          isShowLocation: true,
          title: "Project Title",
          isShowRole: true,
          isShowUrl: true,
          url: "url address",
          points: ["point 1 ....", "point 2 ...."],
        },
      ],

      educationLabel: "Educations",
      isShowEducation: true,
      educationOrder: 5,
      educations: [
        {
          degree: "Degree",
          from: "from",
          to: "to",
          gpa: "GPA",
          isShowInstitute: true,
          isShowLocation: true,
          isShowPoints: true,
          location: "Location",
          institute: "Institute",
          isShowDate: true,
          isShow: true,
          isShowGpa: true,
          points: ["point 1 ....", "point 2 ...."],
        },
      ],

      skillLabel: "Skills",
      skillOrder: 6,

      certificationLabel: "Certifications",
      isShowCertification: true,
      certificationOrder: 7,
      certifications: [
        {
          institute: "Institute",
          name: "Name",
          year: "Year",
          points: ["point 1 ....", "point 2 ...."],
          isShowDate: true,
          isShow: true,
          isShowInstitute: true,
          isShowPoints: true,
        },
      ],

      courseWorkLabel: "CourseWork",
      courseWorkOrder: 8,

      languageLabel: "Languages",
      languageOrder: 9,

      hobbyLabel: "Hobbies",
      hobbyOrder: 10,
    },
  });

  const [createResume, { loading }] = useMutation<
    CreateResumeMutation,
    CreateResumeMutationVariables
  >(MUTATION_CREATE_RESUME_RESUME, {
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
    onCompleted: async ({ createResume: { id, title, userId, updatedAt } }) => {
      toast({
        title: "Welcome!",
        description: "Resume Created Successfully!",
      });
      setIsOpenNewResumeDialog(false);
      setResumes((prev) => [{ id, title, userId, updatedAt }, ...prev]);
      setSelectedResumeId(id!);
    },
  });

  const onSubmit: SubmitHandler<CreateResumeResumeInputsGql> = (
    createResumeResumeInputs
  ) => {
    createResume({ variables: { createResumeResumeInputs } });
  };

  return {
    form,
    onSubmit,
    loading,
    isOpenNewResumeDialog,
    setIsOpenNewResumeDialog,
    resumes,
    initialLoading,
    selectedResumeId,
  };
};
