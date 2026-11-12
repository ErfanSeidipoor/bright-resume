import { IUserCookie } from "@chatbot/cookie/user";
import {
  GetResumeByIdQuery,
  GetResumesQuery,
  UpdateResumeMutation,
  GeneratePdfOfResumeMutation,
} from "@chatbot/gql/graphql";
import { ResumeSectionType } from "@models";
import { UpdateResumeResumeInputs, GeneratePdfOfResumeFileInputs } from "@dto";
import { Dispatch, SetStateAction, createContext } from "react";
import { FetchResult } from "@apollo/client";

export interface IContext {
  user: IUserCookie;
  isOpenNewResumeDialog: boolean;
  setIsOpenNewResumeDialog: Dispatch<SetStateAction<boolean>>;
  generatePdfLoading: boolean;
  setGeneratePdfLoading: Dispatch<SetStateAction<boolean>>;
  resumes: GetResumesQuery["getResumes"]["edges"];
  setResumes: Dispatch<SetStateAction<GetResumesQuery["getResumes"]["edges"]>>;
  selectedResume: GetResumeByIdQuery["getResumeById"] | undefined;
  setSelectedResume: Dispatch<
    SetStateAction<GetResumeByIdQuery["getResumeById"] | undefined>
  >;
  selectedResumeId: string;
  setSelectedResumeId: Dispatch<SetStateAction<string>>;
  deleteResume: GetResumesQuery["getResumes"]["edges"][0] | undefined;
  setDeleteResume: Dispatch<
    SetStateAction<GetResumesQuery["getResumes"]["edges"][0] | undefined>
  >;
  loadingSelectedResume: boolean;
  loadingUpdateResumeResume: boolean;
  loadingGetFileByIdFIle: boolean;
  updateResumeResume: (variables: {
    variables: { updateResumeResumeInputs: UpdateResumeResumeInputs };
  }) => Promise<FetchResult<UpdateResumeMutation>>;
  generatePdfOfResumeFile: (variables: {
    variables: { generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputs };
  }) => Promise<FetchResult<GeneratePdfOfResumeMutation>>;
  isCollapsedSideMenu: boolean;
  setIsCollapsedSideMenu: Dispatch<SetStateAction<boolean>>;
  isOpenChat: boolean;
  setIsOpenChat: Dispatch<SetStateAction<boolean>>;
  isOpenSteps: boolean;
  setIsOpenSteps: Dispatch<SetStateAction<boolean>>;
  initialLoading: boolean;
  setInitialLoading: Dispatch<SetStateAction<boolean>>;
  resumeSection: ResumeSectionType;
  setResumeSection: Dispatch<SetStateAction<ResumeSectionType>>;
  refetchSelectedResume: () => void;
  resumeSubSectionIndex: number | undefined;
  setResumeSubSectionIndex: Dispatch<SetStateAction<number | undefined>>;
}

export const Context = createContext<IContext>({
  user: {},
  isOpenNewResumeDialog: false,
  setIsOpenNewResumeDialog: () => {},
  resumes: [],
  setResumes: () => {},
  selectedResume: undefined,
  setSelectedResume: () => {},
  selectedResumeId: "",
  setSelectedResumeId: () => {},
  deleteResume: undefined,
  setDeleteResume: () => {},
  loadingSelectedResume: false,
  loadingUpdateResumeResume: false,
  loadingGetFileByIdFIle: false,
  isCollapsedSideMenu: false,
  setIsCollapsedSideMenu: () => {},
  isOpenChat: false,
  setIsOpenChat: () => {},
  isOpenSteps: false,
  setIsOpenSteps: () => {},
  initialLoading: true,
  setInitialLoading: () => {},
  resumeSection: undefined,
  setResumeSection: () => {},
  refetchSelectedResume: () => {},
  resumeSubSectionIndex: undefined,
  setResumeSubSectionIndex: () => {},
  updateResumeResume: () => Promise.resolve({}),
  generatePdfOfResumeFile: () => Promise.resolve({}),
  generatePdfLoading: false,
  setGeneratePdfLoading: () => {},
});
