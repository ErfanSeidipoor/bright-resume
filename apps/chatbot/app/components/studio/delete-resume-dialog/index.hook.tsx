"use client";

import { useMutation } from "@apollo/client";

import { useToast } from "@resume-template-components/shadcn-ui";

import {
  DeleteResumeResumeMutation,
  DeleteResumeResumeMutationVariables,
} from "@chatbot/gql/graphql";

import { useStudioContext } from "../use-context";
import { MUTATION_DELETE_RESUME_RESUME } from "./gql";
import { useRouter } from "next/navigation";

export const useData = () => {
  const router = useRouter();
  const {
    setResumes,
    setSelectedResumeId,
    resumes,
    initialLoading,
    selectedResumeId,
    deleteResume,
    setDeleteResume,
  } = useStudioContext();
  const { toast } = useToast();

  const [deleteResumeResume, { loading }] = useMutation<
    DeleteResumeResumeMutation,
    DeleteResumeResumeMutationVariables
  >(MUTATION_DELETE_RESUME_RESUME, {
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
    onCompleted: async ({ deleteResume: { id, title } }) => {
      toast({
        title: "Delete Resume",
        description: "Resume Deleted Successfully!",
      });
      const resumes_ = resumes.filter(
        (resume) => resume.id !== deleteResume?.id
      );
      setResumes(resumes_);
      setDeleteResume(undefined);
      if (resumes_.length && resumes_[0]?.id) {
        setSelectedResumeId(resumes_[0].id);
      } else {
        setSelectedResumeId("");
        router.push("/studio");
      }
    },
  });

  const onDelete = () => {
    if (deleteResume?.id) {
      deleteResumeResume({
        variables: { deleteResumeResumeInputs: { resumeId: deleteResume?.id } },
      });
    }
  };

  return {
    onDelete,
    loading,
    initialLoading,
    selectedResumeId,
    deleteResume,
    setDeleteResume,
  };
};
