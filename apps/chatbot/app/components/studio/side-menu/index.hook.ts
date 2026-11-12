"use client";

import { QUERY_GET_RESUMES_RESUME } from "./gql";
import { useQuery } from "@apollo/client";
import {
  GetResumesQuery,
  GetResumesQueryVariables,
  GetResumesResumeArgsGql,
  PaginationArgsGql,
} from "@chatbot/gql/graphql";
import { GetResumesResumeArgs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStudioContext } from "../use-context";

export const useData = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    resumes,
    setResumes,
    setSelectedResume,
    selectedResume,
    setSelectedResumeId,
    selectedResumeId,
    setInitialLoading,
  } = useStudioContext();

  const [getResumesResumeArgs, setGetResumesResumeArgs] =
    useState<GetResumesResumeArgsGql>({ title: "" });
  const [paginationArgs] = useState<PaginationArgsGql>({
    limit: 20,
    page: 1,
  });

  const { loading, refetch } = useQuery<
    GetResumesQuery,
    GetResumesQueryVariables
  >(QUERY_GET_RESUMES_RESUME, {
    fetchPolicy: "no-cache",
    variables: {
      getResumesResumeArgs,
      paginationArgs,
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
    onCompleted: async ({ getResumes: { edges } }) => {
      if (!selectedResumeId && paginationArgs.page === 1 && edges.length) {
        setSelectedResumeId(edges[0].id!);
      }
      setResumes(edges);
      setInitialLoading(false);
    },
  });

  const form = useForm<GetResumesResumeArgs>({
    resolver: classValidatorResolver(GetResumesResumeArgs),
    mode: "onChange",
    defaultValues: {
      title: "",
    },
  });

  const onSubmit: SubmitHandler<GetResumesResumeArgs> = (
    getResumesResumeArgs
  ) => {
    setGetResumesResumeArgs(getResumesResumeArgs);
    refetch();
  };

  return {
    onSubmit,
    form,
    loading,
    errorMessage,
    resumes,
    getResumesResumeArgs,
    paginationArgs,
    selectedResume,
    setSelectedResume,
    setSelectedResumeId,
  };
};
