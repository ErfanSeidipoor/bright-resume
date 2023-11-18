import { Field, InputType } from "@nestjs/graphql";

import {
  CreateResumeCertificationItemInputsGQL,
  CreateResumeCourseWorkItemInputsGQL,
  CreateResumeEducationItemInputsGQL,
  CreateResumeExperienceItemResumeInputsGQL,
  CreateResumeInvolvementItemInputsGQL,
  CreateResumeLanguageItemInputsGQL,
  CreateResumeProjectItemInputsGQL,
} from "./create-resume.inputs";
import { UpdateResumeResumeInputs } from "@dto";

@InputType()
export class UpdateResumeResumeInputsGQL extends UpdateResumeResumeInputs {
  @Field(() => String, { nullable: false })
  resumeId: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  role: string;

  @Field(() => Boolean, { nullable: true })
  isShowPhoneNumber: boolean;

  @Field(() => String, { nullable: true })
  phoneNumber: string;

  @Field(() => Boolean, { nullable: true })
  isShowLinkedin: boolean;

  @Field(() => String, { nullable: true })
  linkedin: string;

  @Field(() => Boolean, { nullable: true })
  isShowWebsite: boolean;

  @Field(() => String, { nullable: true })
  website: string;

  @Field(() => Boolean, { nullable: true })
  isShowEmail: boolean;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => Boolean, { nullable: true })
  isShowLocation: boolean;

  @Field(() => String, { nullable: true })
  location: string;

  @Field(() => Boolean, { nullable: true })
  isShowBirthDay: boolean;

  @Field(() => String, { nullable: true })
  birthDay: string;

  @Field(() => Boolean, { nullable: true })
  isShowSummary: boolean;

  @Field(() => String, { nullable: true })
  summaryLabel: string;

  @Field(() => String, { nullable: true })
  summary: string;

  @Field(() => Boolean, { nullable: true })
  isShowExperience: boolean;

  @Field(() => String, { nullable: true })
  experienceLabel: string;

  @Field(() => [CreateResumeExperienceItemResumeInputsGQL], { nullable: true })
  experiences: CreateResumeExperienceItemResumeInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowProject: boolean;

  @Field(() => String, { nullable: true })
  projectLabel: string;

  @Field(() => [CreateResumeProjectItemInputsGQL], { nullable: true })
  projects: CreateResumeProjectItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowEducation: boolean;

  @Field(() => String, { nullable: true })
  educationLabel: string;

  @Field(() => [CreateResumeEducationItemInputsGQL], { nullable: true })
  educations: CreateResumeEducationItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowCertification: boolean;

  @Field(() => String, { nullable: true })
  certificationLabel: string;

  @Field(() => [CreateResumeCertificationItemInputsGQL], { nullable: true })
  certifications: CreateResumeCertificationItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowCourseWork: boolean;

  @Field(() => String, { nullable: true })
  courseWorkLabel: string;

  @Field(() => [CreateResumeCourseWorkItemInputsGQL], { nullable: true })
  courseWorks: CreateResumeCourseWorkItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowInvolvement: boolean;

  @Field(() => String, { nullable: true })
  involvementLabel: string;

  @Field(() => [CreateResumeInvolvementItemInputsGQL], { nullable: true })
  involvements: CreateResumeInvolvementItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowSkill: boolean;

  @Field(() => String, { nullable: true })
  skillLabel: string;

  @Field(() => [String], { nullable: true })
  skills: string[];

  @Field(() => Boolean, { nullable: true })
  isShowLanguage: boolean;

  @Field(() => String, { nullable: true })
  languageLabel: string;

  @Field(() => [CreateResumeLanguageItemInputsGQL], { nullable: true })
  languages: CreateResumeLanguageItemInputsGQL[];

  @Field(() => String, { nullable: true })
  hobbyLabel: string;

  @Field(() => [String], { nullable: true })
  hobbies: string[];

  @Field(() => Boolean, { nullable: true })
  isShowHobby: boolean;
}
