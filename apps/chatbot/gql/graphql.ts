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
  isShow?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowInstitute?: Maybe<Scalars['Boolean']['output']>;
  isShowPoints?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  year?: Maybe<Scalars['String']['output']>;
};

export type CourseWork = {
  __typename?: 'CourseWork';
  institute?: Maybe<Scalars['String']['output']>;
  isShow?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowInstitute?: Maybe<Scalars['Boolean']['output']>;
  isShowPoints?: Maybe<Scalars['Boolean']['output']>;
  isShowSkills?: Maybe<Scalars['Boolean']['output']>;
  isSkills?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  skills?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type CreateResumeCertificationItemInputsGql = {
  institute?: InputMaybe<Scalars['String']['input']>;
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInstitute?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPoints?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeCourseWorkItemInputsGql = {
  institute?: InputMaybe<Scalars['String']['input']>;
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInstitute?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPoints?: InputMaybe<Scalars['Boolean']['input']>;
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
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowGpa?: InputMaybe<Scalars['Boolean']['input']>;
  isShowInstitute?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPoints?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeExperienceItemResumeInputsGql = {
  company?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPoints?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeHobbyItemInputsGql = {
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  point?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeInvolvementItemInputsGql = {
  company?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCompany?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPoints?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeLanguageItemInputsGql = {
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLevel?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeProjectItemInputsGql = {
  company?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCompany?: InputMaybe<Scalars['Boolean']['input']>;
  isShowDate?: InputMaybe<Scalars['Boolean']['input']>;
  isShowLocation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPoints?: InputMaybe<Scalars['Boolean']['input']>;
  isShowRole?: InputMaybe<Scalars['Boolean']['input']>;
  isShowUrl?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeResumeInputsGql = {
  birthDay?: InputMaybe<Scalars['String']['input']>;
  certificationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  certificationLabel?: InputMaybe<Scalars['String']['input']>;
  certificationNameLabel?: InputMaybe<Scalars['String']['input']>;
  certificationOrder?: InputMaybe<Scalars['Float']['input']>;
  certificationYearLabel?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<CreateResumeCertificationItemInputsGql>>;
  color?: InputMaybe<ResumeColorEnum>;
  courseWorkInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkNameLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkOrder?: InputMaybe<Scalars['Float']['input']>;
  courseWorkSkillsLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkTitleLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkYearLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorks?: InputMaybe<Array<CreateResumeCourseWorkItemInputsGql>>;
  educationDegreeLabel?: InputMaybe<Scalars['String']['input']>;
  educationGpaLabel?: InputMaybe<Scalars['String']['input']>;
  educationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  educationLabel?: InputMaybe<Scalars['String']['input']>;
  educationLocationLabel?: InputMaybe<Scalars['String']['input']>;
  educationOrder?: InputMaybe<Scalars['Float']['input']>;
  educations?: InputMaybe<Array<CreateResumeEducationItemInputsGql>>;
  email?: InputMaybe<Scalars['String']['input']>;
  experienceCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLocationLabel?: InputMaybe<Scalars['String']['input']>;
  experienceOrder?: InputMaybe<Scalars['Float']['input']>;
  experienceRoleLabel?: InputMaybe<Scalars['String']['input']>;
  experiences?: InputMaybe<Array<CreateResumeExperienceItemResumeInputsGql>>;
  fontFamily?: InputMaybe<ResumeFontFamilyEnum>;
  fontSize?: InputMaybe<ResumeFontSizeEnum>;
  hobbies?: InputMaybe<Array<CreateResumeHobbyItemInputsGql>>;
  hobbyLabel?: InputMaybe<Scalars['String']['input']>;
  hobbyOrder?: InputMaybe<Scalars['Float']['input']>;
  involvementCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLocationLabel?: InputMaybe<Scalars['String']['input']>;
  involvementOrder?: InputMaybe<Scalars['Float']['input']>;
  involvementRoleLabel?: InputMaybe<Scalars['String']['input']>;
  involvements?: InputMaybe<Array<CreateResumeInvolvementItemInputsGql>>;
  isShowBirthDay?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCertification?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCourseWork?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEducation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isShowExperience?: InputMaybe<Scalars['Boolean']['input']>;
  isShowHobby?: InputMaybe<Scalars['Boolean']['input']>;
  isShowImage?: InputMaybe<Scalars['Boolean']['input']>;
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
  languageOrder?: InputMaybe<Scalars['Float']['input']>;
  languages?: InputMaybe<Array<CreateResumeLanguageItemInputsGql>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  projectCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  projectLabel?: InputMaybe<Scalars['String']['input']>;
  projectLocationLabel?: InputMaybe<Scalars['String']['input']>;
  projectOrder?: InputMaybe<Scalars['Float']['input']>;
  projectRoleLabel?: InputMaybe<Scalars['String']['input']>;
  projectTitleLabel?: InputMaybe<Scalars['String']['input']>;
  projectUrlLabel?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<CreateResumeProjectItemInputsGql>>;
  role?: InputMaybe<Scalars['String']['input']>;
  skillLabel?: InputMaybe<Scalars['String']['input']>;
  skillOrder?: InputMaybe<Scalars['Float']['input']>;
  skills?: InputMaybe<Array<CreateResumeSkillItemInputsGql>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summaryLabel?: InputMaybe<Scalars['String']['input']>;
  summaryOrder?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateResumeSkillItemInputsGql = {
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  point?: InputMaybe<Scalars['String']['input']>;
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
  isShow?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowGpa?: Maybe<Scalars['Boolean']['output']>;
  isShowInstitute?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  isShowPoints?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  to?: Maybe<Scalars['String']['output']>;
};

export type Experience = {
  __typename?: 'Experience';
  company?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  isShow?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  isShowPoints?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
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
  ResumePdf = 'ResumePdf',
  ResumeProfileImage = 'ResumeProfileImage'
}

export enum FileStatusEnum {
  Error = 'Error',
  Uploaded = 'Uploaded',
  Waiting = 'Waiting'
}

export enum FileTypeEnum {
  Image = 'Image',
  Pdf = 'Pdf'
}

export type GeneratePdfOfResumeFileInputsGql = {
  resumeId: Scalars['String']['input'];
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

export type GetResumeByIdResumeArgsGql = {
  resumeId: Scalars['String']['input'];
};

export type GetResumesResumeArgsGql = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetUploadLinkForProfileImageFileInputsGql = {
  resumeId: Scalars['String']['input'];
};

export type Hobby = {
  __typename?: 'Hobby';
  isShow?: Maybe<Scalars['Boolean']['output']>;
  point?: Maybe<Scalars['String']['output']>;
};

export type Involvement = {
  __typename?: 'Involvement';
  company?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  isShow?: Maybe<Scalars['Boolean']['output']>;
  isShowCompany?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  isShowPoints?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

export type Language = {
  __typename?: 'Language';
  isShow?: Maybe<Scalars['Boolean']['output']>;
  isShowLevel?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createResume: Resume;
  deleteResume: Resume;
  generatePdfOfResume: File;
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
  from?: Maybe<Scalars['String']['output']>;
  isShow?: Maybe<Scalars['Boolean']['output']>;
  isShowCompany?: Maybe<Scalars['Boolean']['output']>;
  isShowDate?: Maybe<Scalars['Boolean']['output']>;
  isShowLocation?: Maybe<Scalars['Boolean']['output']>;
  isShowPoints?: Maybe<Scalars['Boolean']['output']>;
  isShowRole?: Maybe<Scalars['Boolean']['output']>;
  isShowUrl?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Scalars['String']['output']>>;
  role?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
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
  signInWithOAuthToken: User;
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
  getResumeByIdResumeArgs: GetResumeByIdResumeArgsGql;
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
  certificationOrder?: Maybe<Scalars['Float']['output']>;
  certificationYearLabel?: Maybe<Scalars['String']['output']>;
  certifications?: Maybe<Array<Certification>>;
  color?: Maybe<ResumeColorEnum>;
  courseWorkInstituteLabel?: Maybe<Scalars['String']['output']>;
  courseWorkLabel?: Maybe<Scalars['String']['output']>;
  courseWorkNameLabel?: Maybe<Scalars['String']['output']>;
  courseWorkOrder?: Maybe<Scalars['Float']['output']>;
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
  educationOrder?: Maybe<Scalars['Float']['output']>;
  educations?: Maybe<Array<Education>>;
  email?: Maybe<Scalars['String']['output']>;
  experienceCompanyLabel?: Maybe<Scalars['String']['output']>;
  experienceLabel?: Maybe<Scalars['String']['output']>;
  experienceLocationLabel?: Maybe<Scalars['String']['output']>;
  experienceOrder?: Maybe<Scalars['Float']['output']>;
  experienceRoleLabel?: Maybe<Scalars['String']['output']>;
  experiences?: Maybe<Array<Experience>>;
  fontFamily?: Maybe<ResumeFontFamilyEnum>;
  fontSize?: Maybe<ResumeFontSizeEnum>;
  hobbies?: Maybe<Array<Hobby>>;
  hobbyLabel?: Maybe<Scalars['String']['output']>;
  hobbyOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  involvementCompanyLabel?: Maybe<Scalars['String']['output']>;
  involvementLabel?: Maybe<Scalars['String']['output']>;
  involvementLocationLabel?: Maybe<Scalars['String']['output']>;
  involvementOrder?: Maybe<Scalars['Float']['output']>;
  involvementRoleLabel?: Maybe<Scalars['String']['output']>;
  involvements?: Maybe<Array<Involvement>>;
  isShowBirthDay?: Maybe<Scalars['Boolean']['output']>;
  isShowCertification?: Maybe<Scalars['Boolean']['output']>;
  isShowCourseWork?: Maybe<Scalars['Boolean']['output']>;
  isShowEducation?: Maybe<Scalars['Boolean']['output']>;
  isShowEmail?: Maybe<Scalars['Boolean']['output']>;
  isShowExperience?: Maybe<Scalars['Boolean']['output']>;
  isShowHobby?: Maybe<Scalars['Boolean']['output']>;
  isShowImage?: Maybe<Scalars['Boolean']['output']>;
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
  languageOrder?: Maybe<Scalars['Float']['output']>;
  languages?: Maybe<Array<Language>>;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  projectCompanyLabel?: Maybe<Scalars['String']['output']>;
  projectLabel?: Maybe<Scalars['String']['output']>;
  projectLocationLabel?: Maybe<Scalars['String']['output']>;
  projectOrder?: Maybe<Scalars['Float']['output']>;
  projectRoleLabel?: Maybe<Scalars['String']['output']>;
  projectTitleLabel?: Maybe<Scalars['String']['output']>;
  projectUrlLabel?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Project>>;
  role?: Maybe<Scalars['String']['output']>;
  skillLabel?: Maybe<Scalars['String']['output']>;
  skillOrder?: Maybe<Scalars['Float']['output']>;
  skills?: Maybe<Array<Skill>>;
  summary?: Maybe<Scalars['String']['output']>;
  summaryLabel?: Maybe<Scalars['String']['output']>;
  summaryOrder?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export enum ResumeColorEnum {
  Black = 'Black',
  Blue = 'Blue',
  Brown = 'Brown',
  Gray = 'Gray',
  Green = 'Green',
  Orange = 'Orange',
  Purple = 'Purple',
  Red = 'Red',
  Yellow = 'Yellow'
}

export enum ResumeFontFamilyEnum {
  Arial = 'Arial',
  Montserrat = 'Montserrat',
  Nunito = 'Nunito',
  Raleway = 'Raleway',
  Roboto = 'Roboto'
}

export enum ResumeFontSizeEnum {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
  XLarge = 'XLarge',
  XSmall = 'XSmall',
  XxLarge = 'XxLarge',
  XxSmall = 'XxSmall'
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

export type Skill = {
  __typename?: 'Skill';
  isShow?: Maybe<Scalars['Boolean']['output']>;
  point?: Maybe<Scalars['String']['output']>;
};

export type UpdateResumeResumeInputsGql = {
  birthDay?: InputMaybe<Scalars['String']['input']>;
  certificationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  certificationLabel?: InputMaybe<Scalars['String']['input']>;
  certificationNameLabel?: InputMaybe<Scalars['String']['input']>;
  certificationOrder?: InputMaybe<Scalars['Float']['input']>;
  certificationYearLabel?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<CreateResumeCertificationItemInputsGql>>;
  color?: InputMaybe<ResumeColorEnum>;
  courseWorkInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkNameLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkOrder?: InputMaybe<Scalars['Float']['input']>;
  courseWorkSkillsLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkTitleLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorkYearLabel?: InputMaybe<Scalars['String']['input']>;
  courseWorks?: InputMaybe<Array<CreateResumeCourseWorkItemInputsGql>>;
  educationDegreeLabel?: InputMaybe<Scalars['String']['input']>;
  educationGpaLabel?: InputMaybe<Scalars['String']['input']>;
  educationInstituteLabel?: InputMaybe<Scalars['String']['input']>;
  educationLabel?: InputMaybe<Scalars['String']['input']>;
  educationLocationLabel?: InputMaybe<Scalars['String']['input']>;
  educationOrder?: InputMaybe<Scalars['Float']['input']>;
  educations?: InputMaybe<Array<CreateResumeEducationItemInputsGql>>;
  email?: InputMaybe<Scalars['String']['input']>;
  experienceCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLabel?: InputMaybe<Scalars['String']['input']>;
  experienceLocationLabel?: InputMaybe<Scalars['String']['input']>;
  experienceOrder?: InputMaybe<Scalars['Float']['input']>;
  experienceRoleLabel?: InputMaybe<Scalars['String']['input']>;
  experiences?: InputMaybe<Array<CreateResumeExperienceItemResumeInputsGql>>;
  fontFamily?: InputMaybe<ResumeFontFamilyEnum>;
  fontSize?: InputMaybe<ResumeFontSizeEnum>;
  hobbies?: InputMaybe<Array<CreateResumeHobbyItemInputsGql>>;
  hobbyLabel?: InputMaybe<Scalars['String']['input']>;
  hobbyOrder?: InputMaybe<Scalars['Float']['input']>;
  involvementCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLabel?: InputMaybe<Scalars['String']['input']>;
  involvementLocationLabel?: InputMaybe<Scalars['String']['input']>;
  involvementOrder?: InputMaybe<Scalars['Float']['input']>;
  involvementRoleLabel?: InputMaybe<Scalars['String']['input']>;
  involvements?: InputMaybe<Array<CreateResumeInvolvementItemInputsGql>>;
  isShowBirthDay?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCertification?: InputMaybe<Scalars['Boolean']['input']>;
  isShowCourseWork?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEducation?: InputMaybe<Scalars['Boolean']['input']>;
  isShowEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isShowExperience?: InputMaybe<Scalars['Boolean']['input']>;
  isShowHobby?: InputMaybe<Scalars['Boolean']['input']>;
  isShowImage?: InputMaybe<Scalars['Boolean']['input']>;
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
  languageOrder?: InputMaybe<Scalars['Float']['input']>;
  languages?: InputMaybe<Array<CreateResumeLanguageItemInputsGql>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  projectCompanyLabel?: InputMaybe<Scalars['String']['input']>;
  projectLabel?: InputMaybe<Scalars['String']['input']>;
  projectLocationLabel?: InputMaybe<Scalars['String']['input']>;
  projectOrder?: InputMaybe<Scalars['Float']['input']>;
  projectRoleLabel?: InputMaybe<Scalars['String']['input']>;
  projectTitleLabel?: InputMaybe<Scalars['String']['input']>;
  projectUrlLabel?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<CreateResumeProjectItemInputsGql>>;
  resumeId: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  skillLabel?: InputMaybe<Scalars['String']['input']>;
  skillOrder?: InputMaybe<Scalars['Float']['input']>;
  skills?: InputMaybe<Array<CreateResumeSkillItemInputsGql>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summaryLabel?: InputMaybe<Scalars['String']['input']>;
  summaryOrder?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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

export type SignInWithOAuthTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type SignInWithOAuthTokenQuery = { __typename?: 'Query', signInWithOAuthToken: { __typename?: 'User', id?: string | null, name?: string | null, token?: string | null, username?: string | null, email?: string | null, picture?: string | null } };

export type SignInAuthMutationVariables = Exact<{
  signInAuthInputs: SignInAuthInputsGql;
}>;


export type SignInAuthMutation = { __typename?: 'Mutation', signIn: { __typename?: 'User', id?: string | null, name?: string | null, username?: string | null, email?: string | null, token?: string | null, picture?: string | null, createdAt: any } };

export type SignUpAuthMutationVariables = Exact<{
  signUpAuthInputs: SignUpAuthInputsGql;
}>;


export type SignUpAuthMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id?: string | null, name?: string | null, username?: string | null, email?: string | null, token?: string | null, picture?: string | null, createdAt: any } };

export type DeleteResumeResumeMutationVariables = Exact<{
  deleteResumeResumeInputs: DeleteResumeResumeInputsGql;
}>;


export type DeleteResumeResumeMutation = { __typename?: 'Mutation', deleteResume: { __typename?: 'Resume', id?: string | null, title?: string | null } };

export type UpdateResumeMutationVariables = Exact<{
  updateResumeResumeInputs: UpdateResumeResumeInputsGql;
}>;


export type UpdateResumeMutation = { __typename?: 'Mutation', updateResume: { __typename?: 'Resume', id?: string | null, userId: string, title?: string | null } };

export type GetResumeByIdQueryVariables = Exact<{
  getResumeByIdResumeArgs: GetResumeByIdResumeArgsGql;
}>;


export type GetResumeByIdQuery = { __typename?: 'Query', getResumeById: { __typename?: 'Resume', id?: string | null, userId: string, name?: string | null, title?: string | null, fontSize?: ResumeFontSizeEnum | null, fontFamily?: ResumeFontFamilyEnum | null, color?: ResumeColorEnum | null, role?: string | null, isShowImage?: boolean | null, isShowPhoneNumber?: boolean | null, phoneNumber?: string | null, isShowLinkedin?: boolean | null, linkedin?: string | null, isShowWebsite?: boolean | null, website?: string | null, isShowEmail?: boolean | null, email?: string | null, isShowLocation?: boolean | null, location?: string | null, isShowBirthDay?: boolean | null, birthDay?: string | null, isShowSummary?: boolean | null, summaryOrder?: number | null, summaryLabel?: string | null, summary?: string | null, isShowExperience?: boolean | null, experienceOrder?: number | null, experienceLabel?: string | null, experienceRoleLabel?: string | null, experienceCompanyLabel?: string | null, experienceLocationLabel?: string | null, isShowProject?: boolean | null, projectOrder?: number | null, projectLabel?: string | null, projectRoleLabel?: string | null, projectTitleLabel?: string | null, projectCompanyLabel?: string | null, projectLocationLabel?: string | null, projectUrlLabel?: string | null, isShowEducation?: boolean | null, educationLabel?: string | null, educationOrder?: number | null, educationDegreeLabel?: string | null, educationInstituteLabel?: string | null, educationLocationLabel?: string | null, educationGpaLabel?: string | null, isShowCertification?: boolean | null, certificationOrder?: number | null, certificationLabel?: string | null, certificationNameLabel?: string | null, certificationInstituteLabel?: string | null, certificationYearLabel?: string | null, isShowCourseWork?: boolean | null, courseWorkLabel?: string | null, courseWorkOrder?: number | null, courseWorkTitleLabel?: string | null, courseWorkNameLabel?: string | null, courseWorkInstituteLabel?: string | null, courseWorkYearLabel?: string | null, courseWorkSkillsLabel?: string | null, isShowInvolvement?: boolean | null, involvementLabel?: string | null, involvementOrder?: number | null, involvementRoleLabel?: string | null, involvementCompanyLabel?: string | null, involvementLocationLabel?: string | null, isShowSkill?: boolean | null, skillLabel?: string | null, skillOrder?: number | null, isShowLanguage?: boolean | null, languageOrder?: number | null, languageLabel?: string | null, languageNameLabel?: string | null, languageLevelLabel?: string | null, hobbyOrder?: number | null, hobbyLabel?: string | null, isShowHobby?: boolean | null, createdAt: any, updatedAt: any, experiences?: Array<{ __typename?: 'Experience', role?: string | null, company?: string | null, isShowLocation?: boolean | null, location?: string | null, isShowDate?: boolean | null, from?: string | null, to?: string | null, isShowPoints?: boolean | null, isShow?: boolean | null, points?: Array<string> | null }> | null, projects?: Array<{ __typename?: 'Project', title?: string | null, isShowRole?: boolean | null, role?: string | null, isShowCompany?: boolean | null, company?: string | null, isShowLocation?: boolean | null, location?: string | null, isShowUrl?: boolean | null, url?: string | null, isShowDate?: boolean | null, from?: string | null, to?: string | null, isShowPoints?: boolean | null, isShow?: boolean | null, points?: Array<string> | null }> | null, educations?: Array<{ __typename?: 'Education', degree?: string | null, isShowInstitute?: boolean | null, institute?: string | null, isShowLocation?: boolean | null, location?: string | null, isShowGpa?: boolean | null, gpa?: string | null, isShowDate?: boolean | null, from?: string | null, to?: string | null, isShowPoints?: boolean | null, isShow?: boolean | null, points?: Array<string> | null }> | null, certifications?: Array<{ __typename?: 'Certification', name?: string | null, isShowInstitute?: boolean | null, institute?: string | null, isShowDate?: boolean | null, year?: string | null, isShowPoints?: boolean | null, isShow?: boolean | null, points?: Array<string> | null }> | null, courseWorks?: Array<{ __typename?: 'CourseWork', name?: string | null, isShowInstitute?: boolean | null, institute?: string | null, isShowDate?: boolean | null, year?: string | null, isShowSkills?: boolean | null, isSkills?: boolean | null, skills?: string | null, isShow?: boolean | null, isShowPoints?: boolean | null, points?: Array<string> | null }> | null, involvements?: Array<{ __typename?: 'Involvement', role?: string | null, isShowCompany?: boolean | null, company?: string | null, isShowLocation?: boolean | null, location?: string | null, isShowDate?: boolean | null, from?: string | null, to?: string | null, isShowPoints?: boolean | null, points?: Array<string> | null, isShow?: boolean | null }> | null, skills?: Array<{ __typename?: 'Skill', point?: string | null, isShow?: boolean | null }> | null, languages?: Array<{ __typename?: 'Language', name?: string | null, isShowLevel?: boolean | null, level?: string | null, isShow?: boolean | null }> | null, hobbies?: Array<{ __typename?: 'Hobby', point?: string | null, isShow?: boolean | null }> | null } };

export type GeneratePdfOfResumeMutationVariables = Exact<{
  generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputsGql;
}>;


export type GeneratePdfOfResumeMutation = { __typename?: 'Mutation', generatePdfOfResume: { __typename?: 'File', id?: string | null, userId: string, resumeId: string } };

export type GetFileByIdQueryVariables = Exact<{
  getFileByIdFileInputs: GetFileByIdFileInputsGql;
}>;


export type GetFileByIdQuery = { __typename?: 'Query', getFileById: { __typename?: 'File', id?: string | null, userId: string, resumeId: string, path?: string | null, type?: FileTypeEnum | null, reason?: FileReasonEnum | null, status?: FileStatusEnum | null, isVerified?: boolean | null, name?: string | null, uploadLink?: string | null } };

export type GetDownloadLinkQueryVariables = Exact<{
  getDownloadLinkFileInputs: GetDownloadLinkFileInputsGql;
}>;


export type GetDownloadLinkQuery = { __typename?: 'Query', getDownloadLink: string };

export type CreateResumeMutationVariables = Exact<{
  createResumeResumeInputs: CreateResumeResumeInputsGql;
}>;


export type CreateResumeMutation = { __typename?: 'Mutation', createResume: { __typename?: 'Resume', id?: string | null, title?: string | null, userId: string, updatedAt: any } };

export type GetResumesQueryVariables = Exact<{
  getResumesResumeArgs: GetResumesResumeArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetResumesQuery = { __typename?: 'Query', getResumes: { __typename?: 'PaginatedResume', edges: Array<{ __typename?: 'Resume', id?: string | null, title?: string | null, userId: string, updatedAt: any }>, pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, totalPages: number, currentPage: number } } };


export const SignInWithOAuthTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signInWithOAuthToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithOAuthToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]} as unknown as DocumentNode<SignInWithOAuthTokenQuery, SignInWithOAuthTokenQueryVariables>;
export const SignInAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signInAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInAuthInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInAuthInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInAuthInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInAuthInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SignInAuthMutation, SignInAuthMutationVariables>;
export const SignUpAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUpAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpAuthInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpAuthInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpAuthInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpAuthInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SignUpAuthMutation, SignUpAuthMutationVariables>;
export const DeleteResumeResumeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteResumeResume"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteResumeResumeInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteResumeResumeInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteResume"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteResumeResumeInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteResumeResumeInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DeleteResumeResumeMutation, DeleteResumeResumeMutationVariables>;
export const UpdateResumeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateResume"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateResumeResumeInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateResumeResumeInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateResume"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateResumeResumeInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateResumeResumeInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<UpdateResumeMutation, UpdateResumeMutationVariables>;
export const GetResumeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getResumeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getResumeByIdResumeArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetResumeByIdResumeArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getResumeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getResumeByIdResumeArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getResumeByIdResumeArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"fontSize"}},{"kind":"Field","name":{"kind":"Name","value":"fontFamily"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"isShowImage"}},{"kind":"Field","name":{"kind":"Name","value":"isShowPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isShowLinkedin"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"isShowWebsite"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"isShowEmail"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isShowLocation"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"isShowBirthDay"}},{"kind":"Field","name":{"kind":"Name","value":"birthDay"}},{"kind":"Field","name":{"kind":"Name","value":"isShowSummary"}},{"kind":"Field","name":{"kind":"Name","value":"summaryOrder"}},{"kind":"Field","name":{"kind":"Name","value":"summaryLabel"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"isShowExperience"}},{"kind":"Field","name":{"kind":"Name","value":"experienceOrder"}},{"kind":"Field","name":{"kind":"Name","value":"experienceLabel"}},{"kind":"Field","name":{"kind":"Name","value":"experienceRoleLabel"}},{"kind":"Field","name":{"kind":"Name","value":"experienceCompanyLabel"}},{"kind":"Field","name":{"kind":"Name","value":"experienceLocationLabel"}},{"kind":"Field","name":{"kind":"Name","value":"experiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"isShowLocation"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"isShowDate"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"isShowPoints"}},{"kind":"Field","name":{"kind":"Name","value":"isShow"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isShowProject"}},{"kind":"Field","name":{"kind":"Name","value":"projectOrder"}},{"kind":"Field","name":{"kind":"Name","value":"projectLabel"}},{"kind":"Field","name":{"kind":"Name","value":"projectRoleLabel"}},{"kind":"Field","name":{"kind":"Name","value":"projectTitleLabel"}},{"kind":"Field","name":{"kind":"Name","value":"projectCompanyLabel"}},{"kind":"Field","name":{"kind":"Name","value":"projectLocationLabel"}},{"kind":"Field","name":{"kind":"Name","value":"projectUrlLabel"}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isShowRole"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"isShowCompany"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"isShowLocation"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"isShowUrl"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isShowDate"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"isShowPoints"}},{"kind":"Field","name":{"kind":"Name","value":"isShow"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isShowEducation"}},{"kind":"Field","name":{"kind":"Name","value":"educationLabel"}},{"kind":"Field","name":{"kind":"Name","value":"educationOrder"}},{"kind":"Field","name":{"kind":"Name","value":"educationDegreeLabel"}},{"kind":"Field","name":{"kind":"Name","value":"educationInstituteLabel"}},{"kind":"Field","name":{"kind":"Name","value":"educationLocationLabel"}},{"kind":"Field","name":{"kind":"Name","value":"educationGpaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"educations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"isShowInstitute"}},{"kind":"Field","name":{"kind":"Name","value":"institute"}},{"kind":"Field","name":{"kind":"Name","value":"isShowLocation"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"isShowGpa"}},{"kind":"Field","name":{"kind":"Name","value":"gpa"}},{"kind":"Field","name":{"kind":"Name","value":"isShowDate"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"isShowPoints"}},{"kind":"Field","name":{"kind":"Name","value":"isShow"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isShowCertification"}},{"kind":"Field","name":{"kind":"Name","value":"certificationOrder"}},{"kind":"Field","name":{"kind":"Name","value":"certificationLabel"}},{"kind":"Field","name":{"kind":"Name","value":"certificationNameLabel"}},{"kind":"Field","name":{"kind":"Name","value":"certificationInstituteLabel"}},{"kind":"Field","name":{"kind":"Name","value":"certificationYearLabel"}},{"kind":"Field","name":{"kind":"Name","value":"certifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isShowInstitute"}},{"kind":"Field","name":{"kind":"Name","value":"institute"}},{"kind":"Field","name":{"kind":"Name","value":"isShowDate"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"isShowPoints"}},{"kind":"Field","name":{"kind":"Name","value":"isShow"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isShowCourseWork"}},{"kind":"Field","name":{"kind":"Name","value":"courseWorkLabel"}},{"kind":"Field","name":{"kind":"Name","value":"courseWorkOrder"}},{"kind":"Field","name":{"kind":"Name","value":"courseWorkTitleLabel"}},{"kind":"Field","name":{"kind":"Name","value":"courseWorkNameLabel"}},{"kind":"Field","name":{"kind":"Name","value":"courseWorkInstituteLabel"}},{"kind":"Field","name":{"kind":"Name","value":"courseWorkYearLabel"}},{"kind":"Field","name":{"kind":"Name","value":"courseWorkSkillsLabel"}},{"kind":"Field","name":{"kind":"Name","value":"courseWorks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isShowInstitute"}},{"kind":"Field","name":{"kind":"Name","value":"institute"}},{"kind":"Field","name":{"kind":"Name","value":"isShowDate"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"isShowSkills"}},{"kind":"Field","name":{"kind":"Name","value":"isSkills"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"isShow"}},{"kind":"Field","name":{"kind":"Name","value":"isShowPoints"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isShowInvolvement"}},{"kind":"Field","name":{"kind":"Name","value":"involvementLabel"}},{"kind":"Field","name":{"kind":"Name","value":"involvementOrder"}},{"kind":"Field","name":{"kind":"Name","value":"involvementRoleLabel"}},{"kind":"Field","name":{"kind":"Name","value":"involvementCompanyLabel"}},{"kind":"Field","name":{"kind":"Name","value":"involvementLocationLabel"}},{"kind":"Field","name":{"kind":"Name","value":"involvements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"isShowCompany"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"isShowLocation"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"isShowDate"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"isShowPoints"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"isShow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isShowSkill"}},{"kind":"Field","name":{"kind":"Name","value":"skillLabel"}},{"kind":"Field","name":{"kind":"Name","value":"skillOrder"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"isShow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isShowLanguage"}},{"kind":"Field","name":{"kind":"Name","value":"languageOrder"}},{"kind":"Field","name":{"kind":"Name","value":"languageLabel"}},{"kind":"Field","name":{"kind":"Name","value":"languageNameLabel"}},{"kind":"Field","name":{"kind":"Name","value":"languageLevelLabel"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isShowLevel"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"isShow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hobbyOrder"}},{"kind":"Field","name":{"kind":"Name","value":"hobbyLabel"}},{"kind":"Field","name":{"kind":"Name","value":"hobbies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"isShow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isShowHobby"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetResumeByIdQuery, GetResumeByIdQueryVariables>;
export const GeneratePdfOfResumeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"generatePdfOfResume"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generatePdfOfResumeFileInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratePdfOfResumeFileInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generatePdfOfResume"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"generatePdfOfResumeFileInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generatePdfOfResumeFileInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"resumeId"}}]}}]}}]} as unknown as DocumentNode<GeneratePdfOfResumeMutation, GeneratePdfOfResumeMutationVariables>;
export const GetFileByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFileById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getFileByIdFileInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetFileByIdFileInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFileById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getFileByIdFileInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getFileByIdFileInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"resumeId"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uploadLink"}}]}}]}}]} as unknown as DocumentNode<GetFileByIdQuery, GetFileByIdQueryVariables>;
export const GetDownloadLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDownloadLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getDownloadLinkFileInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDownloadLinkFileInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDownloadLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getDownloadLinkFileInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getDownloadLinkFileInputs"}}}]}]}}]} as unknown as DocumentNode<GetDownloadLinkQuery, GetDownloadLinkQueryVariables>;
export const CreateResumeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createResume"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createResumeResumeInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateResumeResumeInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createResume"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createResumeResumeInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createResumeResumeInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateResumeMutation, CreateResumeMutationVariables>;
export const GetResumesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getResumes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getResumesResumeArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetResumesResumeArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getResumes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getResumesResumeArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getResumesResumeArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetResumesQuery, GetResumesQueryVariables>;