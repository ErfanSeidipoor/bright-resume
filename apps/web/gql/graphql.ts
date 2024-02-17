/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Certification = {
  __typename?: 'Certification';
  institute?: Maybe<Scalars['String']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowInstitute?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  year?: Maybe<Scalars['String']['output']>;
};

export type CourseWork = {
  __typename?: 'CourseWork';
  institute?: Maybe<Scalars['String']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowInstitute?: Maybe<Scalars['Boolean']['output']>;
  isShowSkills?: Maybe<Scalars['Boolean']['output']>;
  isSkills?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  skills?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type CreateResumeCertificationItemInputsGql = {
  institute?: InputMaybe<Scalars['String']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInstitute?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeCourseWorkItemInputsGql = {
  institute?: InputMaybe<Scalars['String']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInstitute?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSkills?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  skills?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeEducationItemInputsGql = {
  degree?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  gpa?: InputMaybe<Scalars['String']['input']>;
  institute?: InputMaybe<Scalars['String']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowGpa?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInstitute?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  untilNow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateResumeExperienceItemResumeInputsGql = {
  company?: InputMaybe<Scalars['String']['input']>;
  fromMonth?: InputMaybe<Scalars['String']['input']>;
  fromYear?: InputMaybe<Scalars['String']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
  toMonth?: InputMaybe<Scalars['String']['input']>;
  toYear?: InputMaybe<Scalars['String']['input']>;
  untilNow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateResumeInvolvementItemInputsGql = {
  company?: InputMaybe<Scalars['String']['input']>;
  fromMonth?: InputMaybe<Scalars['String']['input']>;
  fromYear?: InputMaybe<Scalars['String']['input']>;
  isShowCompany?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
  toMonth?: InputMaybe<Scalars['String']['input']>;
  toYear?: InputMaybe<Scalars['String']['input']>;
  untilNow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateResumeLanguageItemInputsGql = {
  isShowLevel?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeProjectItemInputsGql = {
  company?: InputMaybe<Scalars['String']['input']>;
  fromMonth?: InputMaybe<Scalars['String']['input']>;
  fromYear?: InputMaybe<Scalars['String']['input']>;
  isShowCompany?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowRole?: InputMaybe<Scalars['Boolean']['input']>;
  isShowUrl?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  toMonth?: InputMaybe<Scalars['String']['input']>;
  toYear?: InputMaybe<Scalars['String']['input']>;
  untilNow?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeResumeInputsGql = {
  birthDay?: InputMaybe<Scalars['String']['input']>;
  certificationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  certificationLabel?: InputMaybe<Scalars['String']['input']>;
  certificationNameLabel?: InputMaybe<Scalars['String']['input']>;
  certificationYearLabel?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<CreateResumeCertificationItemInputsGql>>;
  color?: InputMaybe<ResumeColorEnum>;
  courseWorkInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkNameLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkSkillsLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkTitleLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkYearLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorks?: InputMaybe<Array<CreateResumeCourseWorkItemInputsGql>>;
  educationDegreeLabel?: InputMaybe<Scalars['String']['input']>;
  educationGpaLabel?: InputMaybe<Scalars['String']['input']>;
  educationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  educationLabel?: InputMaybe<Scalars['String']['input']>;
  educationLocationLabel?: InputMaybe<Scalars['String']['input']>;
  educations?: InputMaybe<Array<CreateResumeEducationItemInputsGql>>;
  email?: InputMaybe<Scalars['String']['input']>;
  experienceCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLocationLabel?: InputMaybe<Scalars['String']['input']>;
  experienceRoleLabel?: InputMaybe<Scalars['String']['input']>;
  experiences?: InputMaybe<Array<CreateResumeExperienceItemResumeInputsGql>>;
  fontFamily?: InputMaybe<ResumeFontFamilyEnum>;
  fontSize?: InputMaybe<ResumeFontSizeEnum>;
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  hobbyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLocationLabel?: InputMaybe<Scalars['String']['input']>;
  involvementRoleLabel?: InputMaybe<Scalars['String']['input']>;
  involvements?: InputMaybe<Array<CreateResumeInvolvementItemInputsGql>>;
  isShowBirthDay?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCertification?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCourseWork?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEducation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isShowExperience?: InputMaybe<Scalars['Boolean']['input']>;
  isShowHobby?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInvolvement?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLanguage?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLinkedin?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  isShowProject?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSkill?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSummary?: InputMaybe<Scalars['Boolean']['input']>;
  isShowWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  languageLabel?: InputMaybe<Scalars['String']['input']>;
  languageLevelLabel?: InputMaybe<Scalars['String']['input']>;
  languageNameLabel?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<CreateResumeLanguageItemInputsGql>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  projectCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  projectLabel?: InputMaybe<Scalars['String']['input']>;
  projectLocationLabel?: InputMaybe<Scalars['String']['input']>;
  projectRoleLabel?: InputMaybe<Scalars['String']['input']>;
  projectTitleLabel?: InputMaybe<Scalars['String']['input']>;
  projectUrlLabel?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<CreateResumeProjectItemInputsGql>>;
  role?: InputMaybe<Scalars['String']['input']>;
  skillLabel?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summaryLabel?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteResumeResumeInputsGql = {
  resumeId: Scalars['String']['input'];
};

export type Education = {
  __typename?: 'Education';
  degree?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  gpa?: Maybe<Scalars['String']['output']>;
  institute?: Maybe<Scalars['String']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowGpa?: Maybe<Scalars['Boolean']['output']>;
  isShowInstitute?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  to?: Maybe<Scalars['String']['output']>;
  untilNow?: Maybe<Scalars['Boolean']['output']>;
};

export type Experience = {
  __typename?: 'Experience';
  company?: Maybe<Scalars['String']['output']>;
  fromMonth?: Maybe<Scalars['String']['output']>;
  fromYear?: Maybe<Scalars['String']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Scalars['String']['output']>;
  toMonth?: Maybe<Scalars['String']['output']>;
  toYear?: Maybe<Scalars['String']['output']>;
  untilNow?: Maybe<Scalars['Boolean']['output']>;
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<FileReasonEnum>;
  resumeId: Scalars['ID']['output'];
  size?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<FileStatusEnum>;
  type?: Maybe<FileTypeEnum>;
  updatedAt: Scalars['DateTime']['output'];
  uploadLink?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export enum FileReasonEnum {
  ResumePdf = 'resume_PDF',
  ResumeProfileImage = 'resume_profile_image'
}

export enum FileStatusEnum {
  Error = 'error',
  Uploaded = 'uploaded',
  Waiting = 'waiting'
}

export enum FileTypeEnum {
  Pdf = 'PDF',
  Image = 'image'
}

export type GeneratePdfOfResumeFileInputsGql = {
  birthDay?: InputMaybe<Scalars['String']['input']>;
  certificationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  certificationLabel?: InputMaybe<Scalars['String']['input']>;
  certificationNameLabel?: InputMaybe<Scalars['String']['input']>;
  certificationYearLabel?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<CreateResumeCertificationItemInputsGql>>;
  courseWorkInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkNameLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkSkillsLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkTitleLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkYearLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorks?: InputMaybe<Array<CreateResumeCourseWorkItemInputsGql>>;
  educationDegreeLabel?: InputMaybe<Scalars['String']['input']>;
  educationGpaLabel?: InputMaybe<Scalars['String']['input']>;
  educationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  educationLabel?: InputMaybe<Scalars['String']['input']>;
  educationLocationLabel?: InputMaybe<Scalars['String']['input']>;
  educations?: InputMaybe<Array<CreateResumeEducationItemInputsGql>>;
  email?: InputMaybe<Scalars['String']['input']>;
  experienceCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLocationLabel?: InputMaybe<Scalars['String']['input']>;
  experienceRoleLabel?: InputMaybe<Scalars['String']['input']>;
  experiences?: InputMaybe<Array<CreateResumeExperienceItemResumeInputsGql>>;
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  hobbyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLocationLabel?: InputMaybe<Scalars['String']['input']>;
  involvementRoleLabel?: InputMaybe<Scalars['String']['input']>;
  involvements?: InputMaybe<Array<CreateResumeInvolvementItemInputsGql>>;
  isShowBirthDay?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCertification?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCourseWork?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEducation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isShowExperience?: InputMaybe<Scalars['Boolean']['input']>;
  isShowHobby?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInvolvement?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLanguage?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLinkedin?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  isShowProject?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSkill?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSummary?: InputMaybe<Scalars['Boolean']['input']>;
  isShowWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  languageLabel?: InputMaybe<Scalars['String']['input']>;
  languageLevelLabel?: InputMaybe<Scalars['String']['input']>;
  languageNameLabel?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<CreateResumeLanguageItemInputsGql>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  projectCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  projectLabel?: InputMaybe<Scalars['String']['input']>;
  projectLocationLabel?: InputMaybe<Scalars['String']['input']>;
  projectRoleLabel?: InputMaybe<Scalars['String']['input']>;
  projectTitleLabel?: InputMaybe<Scalars['String']['input']>;
  projectUrlLabel?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<CreateResumeProjectItemInputsGql>>;
  resumeId: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  skillLabel?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summaryLabel?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type GetDownloadLinkFileInputsGql = {
  fileId: Scalars['String']['input'];
};

export type GetFileByIdFileInputsGql = {
  fileId: Scalars['String']['input'];
};

export type GetFilesFileInputsGql = {
  reason?: InputMaybe<FileReasonEnum>;
  resumeId?: InputMaybe<Scalars['String']['input']>;
};

export type GetResumesResumeArgsGql = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetUploadLinkForProfileImageFileInputsGql = {
  resumeId: Scalars['String']['input'];
};

export type Involvement = {
  __typename?: 'Involvement';
  company?: Maybe<Scalars['String']['output']>;
  fromMonth?: Maybe<Scalars['String']['output']>;
  fromYear?: Maybe<Scalars['String']['output']>;
  isShowCompany?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Scalars['String']['output']>;
  toMonth?: Maybe<Scalars['String']['output']>;
  toYear?: Maybe<Scalars['String']['output']>;
  untilNow?: Maybe<Scalars['Boolean']['output']>;
};

export type Language = {
  __typename?: 'Language';
  isShowLevel?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createResume: Resume;
  deleteResume: Resume;
  generatePdfOfResume: Scalars['String']['output'];
  getUploadLinkForProfileImage: File;
  signIn: User;
  signUp: User;
  updateResume: Resume;
  verifyUploadedFile: File;
};


export type MutationCreateResumeArgs = {
  createResumeResumeInputs: CreateResumeResumeInputsGql;
};


export type MutationDeleteResumeArgs = {
  deleteResumeResumeInputs: DeleteResumeResumeInputsGql;
};


export type MutationGeneratePdfOfResumeArgs = {
  generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputsGql;
};


export type MutationGetUploadLinkForProfileImageArgs = {
  getUploadLinkForProfileImageFileInputs: GetUploadLinkForProfileImageFileInputsGql;
};


export type MutationSignInArgs = {
  signInAuthInputs: SignInAuthInputsGql;
};


export type MutationSignUpArgs = {
  signUpAuthInputs: SignUpAuthInputsGql;
};


export type MutationUpdateResumeArgs = {
  updateResumeResumeInputs: UpdateResumeResumeInputsGql;
};


export type MutationVerifyUploadedFileArgs = {
  verifyUploadedFileFileInputs: VerifyUploadedFileFileInputsGql;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Float']['output'];
  edgeCount?: Maybe<Scalars['Float']['output']>;
  edgesPerPage: Scalars['Float']['output'];
  totalEdges: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type PaginatedFile = {
  __typename?: 'PaginatedFile';
  edges: Array<File>;
  pageInfo: PageInfo;
};

export type PaginatedResume = {
  __typename?: 'PaginatedResume';
  edges: Array<Resume>;
  pageInfo: PageInfo;
};

export type PaginationArgsGql = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Project = {
  __typename?: 'Project';
  company?: Maybe<Scalars['String']['output']>;
  fromMonth?: Maybe<Scalars['String']['output']>;
  fromYear?: Maybe<Scalars['String']['output']>;
  isShowCompany?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  isShowRole?: Maybe<Scalars['Boolean']['output']>;
  isShowUrl?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  toMonth?: Maybe<Scalars['String']['output']>;
  toYear?: Maybe<Scalars['String']['output']>;
  untilNow?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getDownloadLink: Scalars['String']['output'];
  getFileById: File;
  getFiles: PaginatedFile;
  getProfile: User;
  getResumeById: Resume;
  getResumes: PaginatedResume;
};


export type QueryGetDownloadLinkArgs = {
  getDownloadLinkFileInputs: GetDownloadLinkFileInputsGql;
};


export type QueryGetFileByIdArgs = {
  getFileByIdFileInputs: GetFileByIdFileInputsGql;
};


export type QueryGetFilesArgs = {
  getFilesFileInputs: GetFilesFileInputsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetResumeByIdArgs = {
  resumeId: Scalars['String']['input'];
};


export type QueryGetResumesArgs = {
  getResumesResumeArgs: GetResumesResumeArgsGql;
  paginationArgs: PaginationArgsGql;
};

export type Resume = {
  __typename?: 'Resume';
  birthDay?: Maybe<Scalars['String']['output']>;
  certificationInstituteLabel?: Maybe<Scalars['String']['output']>;
  certificationLabel?: Maybe<Scalars['String']['output']>;
  certificationNameLabel?: Maybe<Scalars['String']['output']>;
  certificationYearLabel?: Maybe<Scalars['String']['output']>;
  certifications?: Maybe<Array<Certification>>;
  color?: Maybe<ResumeColorEnum>;
  courseWorkInstituteLabel?: Maybe<Scalars['String']['output']>;
  courseWorkLabel?: Maybe<Scalars['String']['output']>;
  courseWorkNameLabel?: Maybe<Scalars['String']['output']>;
  courseWorkSkillsLabel?: Maybe<Scalars['String']['output']>;
  courseWorkTitleLabel?: Maybe<Scalars['String']['output']>;
  courseWorkYearLabel?: Maybe<Scalars['String']['output']>;
  courseWorks?: Maybe<Array<CourseWork>>;
  createdAt: Scalars['DateTime']['output'];
  educationDegreeLabel?: Maybe<Scalars['String']['output']>;
  educationGpaLabel?: Maybe<Scalars['String']['output']>;
  educationInstituteLabel?: Maybe<Scalars['String']['output']>;
  educationLabel?: Maybe<Scalars['String']['output']>;
  educationLocationLabel?: Maybe<Scalars['String']['output']>;
  educations?: Maybe<Array<Education>>;
  email?: Maybe<Scalars['String']['output']>;
  experienceCompanyLabel?: Maybe<Scalars['String']['output']>;
  experienceLabel?: Maybe<Scalars['String']['output']>;
  experienceLocationLabel?: Maybe<Scalars['String']['output']>;
  experienceRoleLabel?: Maybe<Scalars['String']['output']>;
  experiences?: Maybe<Array<Experience>>;
  fontFamily?: Maybe<ResumeFontFamilyEnum>;
  fontSize?: Maybe<ResumeFontSizeEnum>;
  hobbies?: Maybe<Array<Scalars['String']['output']>>;
  hobbyLabel?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  involvementCompanyLabel?: Maybe<Scalars['String']['output']>;
  involvementLabel?: Maybe<Scalars['String']['output']>;
  involvementLocationLabel?: Maybe<Scalars['String']['output']>;
  involvementRoleLabel?: Maybe<Scalars['String']['output']>;
  involvements?: Maybe<Array<Involvement>>;
  isShowBirthDay?: Maybe<Scalars['Boolean']['output']>;
  isShowCertification?: Maybe<Scalars['Boolean']['output']>;
  isShowCourseWork?: Maybe<Scalars['Boolean']['output']>;
  isShowEducation?: Maybe<Scalars['Boolean']['output']>;
  isShowEmail?: Maybe<Scalars['Boolean']['output']>;
  isShowExperience?: Maybe<Scalars['Boolean']['output']>;
  isShowHobby?: Maybe<Scalars['Boolean']['output']>;
  isShowInvolvement?: Maybe<Scalars['Boolean']['output']>;
  isShowLanguage?: Maybe<Scalars['Boolean']['output']>;
  isShowLinkedin?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  isShowPhoneNumber?: Maybe<Scalars['Boolean']['output']>;
  isShowProject?: Maybe<Scalars['Boolean']['output']>;
  isShowSkill?: Maybe<Scalars['Boolean']['output']>;
  isShowSummary?: Maybe<Scalars['Boolean']['output']>;
  isShowWebsite?: Maybe<Scalars['Boolean']['output']>;
  languageLabel?: Maybe<Scalars['String']['output']>;
  languageLevelLabel?: Maybe<Scalars['String']['output']>;
  languageNameLabel?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Language>>;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  projectCompanyLabel?: Maybe<Scalars['String']['output']>;
  projectLabel?: Maybe<Scalars['String']['output']>;
  projectLocationLabel?: Maybe<Scalars['String']['output']>;
  projectRoleLabel?: Maybe<Scalars['String']['output']>;
  projectTitleLabel?: Maybe<Scalars['String']['output']>;
  projectUrlLabel?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Project>>;
  role?: Maybe<Scalars['String']['output']>;
  skillLabel?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Scalars['String']['output']>>;
  summary?: Maybe<Scalars['String']['output']>;
  summaryLabel?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export enum ResumeColorEnum {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Gray = 'gray',
  Green = 'green',
  Orange = 'orange',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export enum ResumeFontFamilyEnum {
  Montserrat = 'montserrat',
  Nunito = 'nunito',
  Raleway = 'raleway',
  Roboto = 'roboto'
}

export enum ResumeFontSizeEnum {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XLarge = 'x_large',
  XSmall = 'x_small',
  XxLarge = 'xx_large',
  XxSmall = 'xx_small'
}

export type SignInAuthInputsGql = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type SignUpAuthInputsGql = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UpdateResumeResumeInputsGql = {
  birthDay?: InputMaybe<Scalars['String']['input']>;
  certificationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  certificationLabel?: InputMaybe<Scalars['String']['input']>;
  certificationNameLabel?: InputMaybe<Scalars['String']['input']>;
  certificationYearLabel?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<CreateResumeCertificationItemInputsGql>>;
  color?: InputMaybe<ResumeColorEnum>;
  courseWorkInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkNameLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkSkillsLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkTitleLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkYearLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorks?: InputMaybe<Array<CreateResumeCourseWorkItemInputsGql>>;
  educationDegreeLabel?: InputMaybe<Scalars['String']['input']>;
  educationGpaLabel?: InputMaybe<Scalars['String']['input']>;
  educationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  educationLabel?: InputMaybe<Scalars['String']['input']>;
  educationLocationLabel?: InputMaybe<Scalars['String']['input']>;
  educations?: InputMaybe<Array<CreateResumeEducationItemInputsGql>>;
  email?: InputMaybe<Scalars['String']['input']>;
  experienceCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLocationLabel?: InputMaybe<Scalars['String']['input']>;
  experienceRoleLabel?: InputMaybe<Scalars['String']['input']>;
  experiences?: InputMaybe<Array<CreateResumeExperienceItemResumeInputsGql>>;
  fontFamily?: InputMaybe<ResumeFontFamilyEnum>;
  fontSize?: InputMaybe<ResumeFontSizeEnum>;
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  hobbyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLocationLabel?: InputMaybe<Scalars['String']['input']>;
  involvementRoleLabel?: InputMaybe<Scalars['String']['input']>;
  involvements?: InputMaybe<Array<CreateResumeInvolvementItemInputsGql>>;
  isShowBirthDay?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCertification?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCourseWork?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEducation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isShowExperience?: InputMaybe<Scalars['Boolean']['input']>;
  isShowHobby?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInvolvement?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLanguage?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLinkedin?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  isShowProject?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSkill?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSummary?: InputMaybe<Scalars['Boolean']['input']>;
  isShowWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  languageLabel?: InputMaybe<Scalars['String']['input']>;
  languageLevelLabel?: InputMaybe<Scalars['String']['input']>;
  languageNameLabel?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<CreateResumeLanguageItemInputsGql>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  projectCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  projectLabel?: InputMaybe<Scalars['String']['input']>;
  projectLocationLabel?: InputMaybe<Scalars['String']['input']>;
  projectRoleLabel?: InputMaybe<Scalars['String']['input']>;
  projectTitleLabel?: InputMaybe<Scalars['String']['input']>;
  projectUrlLabel?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<CreateResumeProjectItemInputsGql>>;
  resumeId: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  skillLabel?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summaryLabel?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type VerifyUploadedFileFileInputsGql = {
  fileId: Scalars['String']['input'];
};

export type SignInUsrMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInUsrMutation = { __typename?: 'Mutation', signIn: { __typename?: 'User', token?: string | null, username?: string | null, email?: string | null, createdAt: any, updatedAt: any } };

export type SignUpUsrMutationVariables = Exact<{
  name: Scalars['String']['input'];
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignUpUsrMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', token?: string | null } };

export type GetUserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', name?: string | null, username?: string | null, email?: string | null, createdAt: any, updatedAt: any } };


export const SignInUsrDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signInUsr"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInAuthInputs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<SignInUsrMutation, SignInUsrMutationVariables>;
export const SignUpUsrDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpUsr"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpAuthInputs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignUpUsrMutation, SignUpUsrMutationVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Certification = {
  __typename?: 'Certification';
  institute?: Maybe<Scalars['String']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowInstitute?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  year?: Maybe<Scalars['String']['output']>;
};

export type CourseWork = {
  __typename?: 'CourseWork';
  institute?: Maybe<Scalars['String']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowInstitute?: Maybe<Scalars['Boolean']['output']>;
  isShowSkills?: Maybe<Scalars['Boolean']['output']>;
  isSkills?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  skills?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type CreateResumeCertificationItemInputsGql = {
  institute?: InputMaybe<Scalars['String']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInstitute?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeCourseWorkItemInputsGql = {
  institute?: InputMaybe<Scalars['String']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInstitute?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSkills?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  skills?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeEducationItemInputsGql = {
  degree?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  gpa?: InputMaybe<Scalars['String']['input']>;
  institute?: InputMaybe<Scalars['String']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowGpa?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInstitute?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  untilNow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateResumeExperienceItemResumeInputsGql = {
  company?: InputMaybe<Scalars['String']['input']>;
  fromMonth?: InputMaybe<Scalars['String']['input']>;
  fromYear?: InputMaybe<Scalars['String']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
  toMonth?: InputMaybe<Scalars['String']['input']>;
  toYear?: InputMaybe<Scalars['String']['input']>;
  untilNow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateResumeInvolvementItemInputsGql = {
  company?: InputMaybe<Scalars['String']['input']>;
  fromMonth?: InputMaybe<Scalars['String']['input']>;
  fromYear?: InputMaybe<Scalars['String']['input']>;
  isShowCompany?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
  toMonth?: InputMaybe<Scalars['String']['input']>;
  toYear?: InputMaybe<Scalars['String']['input']>;
  untilNow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateResumeLanguageItemInputsGql = {
  isShowLevel?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeProjectItemInputsGql = {
  company?: InputMaybe<Scalars['String']['input']>;
  fromMonth?: InputMaybe<Scalars['String']['input']>;
  fromYear?: InputMaybe<Scalars['String']['input']>;
  isShowCompany?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowRole?: InputMaybe<Scalars['Boolean']['input']>;
  isShowUrl?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  toMonth?: InputMaybe<Scalars['String']['input']>;
  toYear?: InputMaybe<Scalars['String']['input']>;
  untilNow?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeResumeInputsGql = {
  birthDay?: InputMaybe<Scalars['String']['input']>;
  certificationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  certificationLabel?: InputMaybe<Scalars['String']['input']>;
  certificationNameLabel?: InputMaybe<Scalars['String']['input']>;
  certificationYearLabel?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<CreateResumeCertificationItemInputsGql>>;
  color?: InputMaybe<ResumeColorEnum>;
  courseWorkInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkNameLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkSkillsLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkTitleLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkYearLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorks?: InputMaybe<Array<CreateResumeCourseWorkItemInputsGql>>;
  educationDegreeLabel?: InputMaybe<Scalars['String']['input']>;
  educationGpaLabel?: InputMaybe<Scalars['String']['input']>;
  educationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  educationLabel?: InputMaybe<Scalars['String']['input']>;
  educationLocationLabel?: InputMaybe<Scalars['String']['input']>;
  educations?: InputMaybe<Array<CreateResumeEducationItemInputsGql>>;
  email?: InputMaybe<Scalars['String']['input']>;
  experienceCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLocationLabel?: InputMaybe<Scalars['String']['input']>;
  experienceRoleLabel?: InputMaybe<Scalars['String']['input']>;
  experiences?: InputMaybe<Array<CreateResumeExperienceItemResumeInputsGql>>;
  fontFamily?: InputMaybe<ResumeFontFamilyEnum>;
  fontSize?: InputMaybe<ResumeFontSizeEnum>;
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  hobbyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLocationLabel?: InputMaybe<Scalars['String']['input']>;
  involvementRoleLabel?: InputMaybe<Scalars['String']['input']>;
  involvements?: InputMaybe<Array<CreateResumeInvolvementItemInputsGql>>;
  isShowBirthDay?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCertification?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCourseWork?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEducation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isShowExperience?: InputMaybe<Scalars['Boolean']['input']>;
  isShowHobby?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInvolvement?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLanguage?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLinkedin?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  isShowProject?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSkill?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSummary?: InputMaybe<Scalars['Boolean']['input']>;
  isShowWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  languageLabel?: InputMaybe<Scalars['String']['input']>;
  languageLevelLabel?: InputMaybe<Scalars['String']['input']>;
  languageNameLabel?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<CreateResumeLanguageItemInputsGql>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  projectCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  projectLabel?: InputMaybe<Scalars['String']['input']>;
  projectLocationLabel?: InputMaybe<Scalars['String']['input']>;
  projectRoleLabel?: InputMaybe<Scalars['String']['input']>;
  projectTitleLabel?: InputMaybe<Scalars['String']['input']>;
  projectUrlLabel?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<CreateResumeProjectItemInputsGql>>;
  role?: InputMaybe<Scalars['String']['input']>;
  skillLabel?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summaryLabel?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteResumeResumeInputsGql = {
  resumeId: Scalars['String']['input'];
};

export type Education = {
  __typename?: 'Education';
  degree?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  gpa?: Maybe<Scalars['String']['output']>;
  institute?: Maybe<Scalars['String']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowGpa?: Maybe<Scalars['Boolean']['output']>;
  isShowInstitute?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  to?: Maybe<Scalars['String']['output']>;
  untilNow?: Maybe<Scalars['Boolean']['output']>;
};

export type Experience = {
  __typename?: 'Experience';
  company?: Maybe<Scalars['String']['output']>;
  fromMonth?: Maybe<Scalars['String']['output']>;
  fromYear?: Maybe<Scalars['String']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Scalars['String']['output']>;
  toMonth?: Maybe<Scalars['String']['output']>;
  toYear?: Maybe<Scalars['String']['output']>;
  untilNow?: Maybe<Scalars['Boolean']['output']>;
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<FileReasonEnum>;
  resumeId: Scalars['ID']['output'];
  size?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<FileStatusEnum>;
  type?: Maybe<FileTypeEnum>;
  updatedAt: Scalars['DateTime']['output'];
  uploadLink?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export enum FileReasonEnum {
  ResumePdf = 'resume_PDF',
  ResumeProfileImage = 'resume_profile_image'
}

export enum FileStatusEnum {
  Error = 'error',
  Uploaded = 'uploaded',
  Waiting = 'waiting'
}

export enum FileTypeEnum {
  Pdf = 'PDF',
  Image = 'image'
}

export type GeneratePdfOfResumeFileInputsGql = {
  birthDay?: InputMaybe<Scalars['String']['input']>;
  certificationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  certificationLabel?: InputMaybe<Scalars['String']['input']>;
  certificationNameLabel?: InputMaybe<Scalars['String']['input']>;
  certificationYearLabel?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<CreateResumeCertificationItemInputsGql>>;
  courseWorkInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkNameLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkSkillsLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkTitleLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkYearLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorks?: InputMaybe<Array<CreateResumeCourseWorkItemInputsGql>>;
  educationDegreeLabel?: InputMaybe<Scalars['String']['input']>;
  educationGpaLabel?: InputMaybe<Scalars['String']['input']>;
  educationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  educationLabel?: InputMaybe<Scalars['String']['input']>;
  educationLocationLabel?: InputMaybe<Scalars['String']['input']>;
  educations?: InputMaybe<Array<CreateResumeEducationItemInputsGql>>;
  email?: InputMaybe<Scalars['String']['input']>;
  experienceCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLocationLabel?: InputMaybe<Scalars['String']['input']>;
  experienceRoleLabel?: InputMaybe<Scalars['String']['input']>;
  experiences?: InputMaybe<Array<CreateResumeExperienceItemResumeInputsGql>>;
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  hobbyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLocationLabel?: InputMaybe<Scalars['String']['input']>;
  involvementRoleLabel?: InputMaybe<Scalars['String']['input']>;
  involvements?: InputMaybe<Array<CreateResumeInvolvementItemInputsGql>>;
  isShowBirthDay?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCertification?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCourseWork?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEducation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isShowExperience?: InputMaybe<Scalars['Boolean']['input']>;
  isShowHobby?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInvolvement?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLanguage?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLinkedin?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  isShowProject?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSkill?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSummary?: InputMaybe<Scalars['Boolean']['input']>;
  isShowWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  languageLabel?: InputMaybe<Scalars['String']['input']>;
  languageLevelLabel?: InputMaybe<Scalars['String']['input']>;
  languageNameLabel?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<CreateResumeLanguageItemInputsGql>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  projectCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  projectLabel?: InputMaybe<Scalars['String']['input']>;
  projectLocationLabel?: InputMaybe<Scalars['String']['input']>;
  projectRoleLabel?: InputMaybe<Scalars['String']['input']>;
  projectTitleLabel?: InputMaybe<Scalars['String']['input']>;
  projectUrlLabel?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<CreateResumeProjectItemInputsGql>>;
  resumeId: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  skillLabel?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summaryLabel?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type GetDownloadLinkFileInputsGql = {
  fileId: Scalars['String']['input'];
};

export type GetFileByIdFileInputsGql = {
  fileId: Scalars['String']['input'];
};

export type GetFilesFileInputsGql = {
  reason?: InputMaybe<FileReasonEnum>;
  resumeId?: InputMaybe<Scalars['String']['input']>;
};

export type GetResumesResumeArgsGql = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetUploadLinkForProfileImageFileInputsGql = {
  resumeId: Scalars['String']['input'];
};

export type Involvement = {
  __typename?: 'Involvement';
  company?: Maybe<Scalars['String']['output']>;
  fromMonth?: Maybe<Scalars['String']['output']>;
  fromYear?: Maybe<Scalars['String']['output']>;
  isShowCompany?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Scalars['String']['output']>;
  toMonth?: Maybe<Scalars['String']['output']>;
  toYear?: Maybe<Scalars['String']['output']>;
  untilNow?: Maybe<Scalars['Boolean']['output']>;
};

export type Language = {
  __typename?: 'Language';
  isShowLevel?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createResume: Resume;
  deleteResume: Resume;
  generatePdfOfResume: Scalars['String']['output'];
  getUploadLinkForProfileImage: File;
  signIn: User;
  signUp: User;
  updateResume: Resume;
  verifyUploadedFile: File;
};


export type MutationCreateResumeArgs = {
  createResumeResumeInputs: CreateResumeResumeInputsGql;
};


export type MutationDeleteResumeArgs = {
  deleteResumeResumeInputs: DeleteResumeResumeInputsGql;
};


export type MutationGeneratePdfOfResumeArgs = {
  generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputsGql;
};


export type MutationGetUploadLinkForProfileImageArgs = {
  getUploadLinkForProfileImageFileInputs: GetUploadLinkForProfileImageFileInputsGql;
};


export type MutationSignInArgs = {
  signInAuthInputs: SignInAuthInputsGql;
};


export type MutationSignUpArgs = {
  signUpAuthInputs: SignUpAuthInputsGql;
};


export type MutationUpdateResumeArgs = {
  updateResumeResumeInputs: UpdateResumeResumeInputsGql;
};


export type MutationVerifyUploadedFileArgs = {
  verifyUploadedFileFileInputs: VerifyUploadedFileFileInputsGql;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Float']['output'];
  edgeCount?: Maybe<Scalars['Float']['output']>;
  edgesPerPage: Scalars['Float']['output'];
  totalEdges: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type PaginatedFile = {
  __typename?: 'PaginatedFile';
  edges: Array<File>;
  pageInfo: PageInfo;
};

export type PaginatedResume = {
  __typename?: 'PaginatedResume';
  edges: Array<Resume>;
  pageInfo: PageInfo;
};

export type PaginationArgsGql = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Project = {
  __typename?: 'Project';
  company?: Maybe<Scalars['String']['output']>;
  fromMonth?: Maybe<Scalars['String']['output']>;
  fromYear?: Maybe<Scalars['String']['output']>;
  isShowCompany?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  isShowRole?: Maybe<Scalars['Boolean']['output']>;
  isShowUrl?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  toMonth?: Maybe<Scalars['String']['output']>;
  toYear?: Maybe<Scalars['String']['output']>;
  untilNow?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getDownloadLink: Scalars['String']['output'];
  getFileById: File;
  getFiles: PaginatedFile;
  getProfile: User;
  getResumeById: Resume;
  getResumes: PaginatedResume;
};


export type QueryGetDownloadLinkArgs = {
  getDownloadLinkFileInputs: GetDownloadLinkFileInputsGql;
};


export type QueryGetFileByIdArgs = {
  getFileByIdFileInputs: GetFileByIdFileInputsGql;
};


export type QueryGetFilesArgs = {
  getFilesFileInputs: GetFilesFileInputsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetResumeByIdArgs = {
  resumeId: Scalars['String']['input'];
};


export type QueryGetResumesArgs = {
  getResumesResumeArgs: GetResumesResumeArgsGql;
  paginationArgs: PaginationArgsGql;
};

export type Resume = {
  __typename?: 'Resume';
  birthDay?: Maybe<Scalars['String']['output']>;
  certificationInstituteLabel?: Maybe<Scalars['String']['output']>;
  certificationLabel?: Maybe<Scalars['String']['output']>;
  certificationNameLabel?: Maybe<Scalars['String']['output']>;
  certificationYearLabel?: Maybe<Scalars['String']['output']>;
  certifications?: Maybe<Array<Certification>>;
  color?: Maybe<ResumeColorEnum>;
  courseWorkInstituteLabel?: Maybe<Scalars['String']['output']>;
  courseWorkLabel?: Maybe<Scalars['String']['output']>;
  courseWorkNameLabel?: Maybe<Scalars['String']['output']>;
  courseWorkSkillsLabel?: Maybe<Scalars['String']['output']>;
  courseWorkTitleLabel?: Maybe<Scalars['String']['output']>;
  courseWorkYearLabel?: Maybe<Scalars['String']['output']>;
  courseWorks?: Maybe<Array<CourseWork>>;
  createdAt: Scalars['DateTime']['output'];
  educationDegreeLabel?: Maybe<Scalars['String']['output']>;
  educationGpaLabel?: Maybe<Scalars['String']['output']>;
  educationInstituteLabel?: Maybe<Scalars['String']['output']>;
  educationLabel?: Maybe<Scalars['String']['output']>;
  educationLocationLabel?: Maybe<Scalars['String']['output']>;
  educations?: Maybe<Array<Education>>;
  email?: Maybe<Scalars['String']['output']>;
  experienceCompanyLabel?: Maybe<Scalars['String']['output']>;
  experienceLabel?: Maybe<Scalars['String']['output']>;
  experienceLocationLabel?: Maybe<Scalars['String']['output']>;
  experienceRoleLabel?: Maybe<Scalars['String']['output']>;
  experiences?: Maybe<Array<Experience>>;
  fontFamily?: Maybe<ResumeFontFamilyEnum>;
  fontSize?: Maybe<ResumeFontSizeEnum>;
  hobbies?: Maybe<Array<Scalars['String']['output']>>;
  hobbyLabel?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  involvementCompanyLabel?: Maybe<Scalars['String']['output']>;
  involvementLabel?: Maybe<Scalars['String']['output']>;
  involvementLocationLabel?: Maybe<Scalars['String']['output']>;
  involvementRoleLabel?: Maybe<Scalars['String']['output']>;
  involvements?: Maybe<Array<Involvement>>;
  isShowBirthDay?: Maybe<Scalars['Boolean']['output']>;
  isShowCertification?: Maybe<Scalars['Boolean']['output']>;
  isShowCourseWork?: Maybe<Scalars['Boolean']['output']>;
  isShowEducation?: Maybe<Scalars['Boolean']['output']>;
  isShowEmail?: Maybe<Scalars['Boolean']['output']>;
  isShowExperience?: Maybe<Scalars['Boolean']['output']>;
  isShowHobby?: Maybe<Scalars['Boolean']['output']>;
  isShowInvolvement?: Maybe<Scalars['Boolean']['output']>;
  isShowLanguage?: Maybe<Scalars['Boolean']['output']>;
  isShowLinkedin?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  isShowPhoneNumber?: Maybe<Scalars['Boolean']['output']>;
  isShowProject?: Maybe<Scalars['Boolean']['output']>;
  isShowSkill?: Maybe<Scalars['Boolean']['output']>;
  isShowSummary?: Maybe<Scalars['Boolean']['output']>;
  isShowWebsite?: Maybe<Scalars['Boolean']['output']>;
  languageLabel?: Maybe<Scalars['String']['output']>;
  languageLevelLabel?: Maybe<Scalars['String']['output']>;
  languageNameLabel?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Language>>;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  projectCompanyLabel?: Maybe<Scalars['String']['output']>;
  projectLabel?: Maybe<Scalars['String']['output']>;
  projectLocationLabel?: Maybe<Scalars['String']['output']>;
  projectRoleLabel?: Maybe<Scalars['String']['output']>;
  projectTitleLabel?: Maybe<Scalars['String']['output']>;
  projectUrlLabel?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Project>>;
  role?: Maybe<Scalars['String']['output']>;
  skillLabel?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Scalars['String']['output']>>;
  summary?: Maybe<Scalars['String']['output']>;
  summaryLabel?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export enum ResumeColorEnum {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Gray = 'gray',
  Green = 'green',
  Orange = 'orange',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export enum ResumeFontFamilyEnum {
  Montserrat = 'montserrat',
  Nunito = 'nunito',
  Raleway = 'raleway',
  Roboto = 'roboto'
}

export enum ResumeFontSizeEnum {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XLarge = 'x_large',
  XSmall = 'x_small',
  XxLarge = 'xx_large',
  XxSmall = 'xx_small'
}

export type SignInAuthInputsGql = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type SignUpAuthInputsGql = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UpdateResumeResumeInputsGql = {
  birthDay?: InputMaybe<Scalars['String']['input']>;
  certificationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  certificationLabel?: InputMaybe<Scalars['String']['input']>;
  certificationNameLabel?: InputMaybe<Scalars['String']['input']>;
  certificationYearLabel?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<CreateResumeCertificationItemInputsGql>>;
  color?: InputMaybe<ResumeColorEnum>;
  courseWorkInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkNameLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkSkillsLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkTitleLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkYearLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorks?: InputMaybe<Array<CreateResumeCourseWorkItemInputsGql>>;
  educationDegreeLabel?: InputMaybe<Scalars['String']['input']>;
  educationGpaLabel?: InputMaybe<Scalars['String']['input']>;
  educationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  educationLabel?: InputMaybe<Scalars['String']['input']>;
  educationLocationLabel?: InputMaybe<Scalars['String']['input']>;
  educations?: InputMaybe<Array<CreateResumeEducationItemInputsGql>>;
  email?: InputMaybe<Scalars['String']['input']>;
  experienceCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLocationLabel?: InputMaybe<Scalars['String']['input']>;
  experienceRoleLabel?: InputMaybe<Scalars['String']['input']>;
  experiences?: InputMaybe<Array<CreateResumeExperienceItemResumeInputsGql>>;
  fontFamily?: InputMaybe<ResumeFontFamilyEnum>;
  fontSize?: InputMaybe<ResumeFontSizeEnum>;
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  hobbyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLocationLabel?: InputMaybe<Scalars['String']['input']>;
  involvementRoleLabel?: InputMaybe<Scalars['String']['input']>;
  involvements?: InputMaybe<Array<CreateResumeInvolvementItemInputsGql>>;
  isShowBirthDay?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCertification?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCourseWork?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEducation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isShowExperience?: InputMaybe<Scalars['Boolean']['input']>;
  isShowHobby?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInvolvement?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLanguage?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLinkedin?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  isShowProject?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSkill?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSummary?: InputMaybe<Scalars['Boolean']['input']>;
  isShowWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  languageLabel?: InputMaybe<Scalars['String']['input']>;
  languageLevelLabel?: InputMaybe<Scalars['String']['input']>;
  languageNameLabel?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<CreateResumeLanguageItemInputsGql>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  projectCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  projectLabel?: InputMaybe<Scalars['String']['input']>;
  projectLocationLabel?: InputMaybe<Scalars['String']['input']>;
  projectRoleLabel?: InputMaybe<Scalars['String']['input']>;
  projectTitleLabel?: InputMaybe<Scalars['String']['input']>;
  projectUrlLabel?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<CreateResumeProjectItemInputsGql>>;
  resumeId: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  skillLabel?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summaryLabel?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type VerifyUploadedFileFileInputsGql = {
  fileId: Scalars['String']['input'];
};
