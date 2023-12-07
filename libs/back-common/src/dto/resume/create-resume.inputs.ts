import { Field, InputType } from "@nestjs/graphql";
import {
  CreateResumeCertificationItemInputs,
  CreateResumeCourseWorkItemInputs,
  CreateResumeEducationItemInputs,
  CreateResumeExperienceItemResumeInputs,
  CreateResumeResumeInputs,
  CreateResumeInvolvementItemInputs,
  CreateResumeLanguageItemInputs,
  CreateResumeProjectItemInputs,
} from "@dto";

@InputType()
export class CreateResumeExperienceItemResumeInputsGQL extends CreateResumeExperienceItemResumeInputs {
  @Field(() => String, { nullable: true })
  role?: string;

  @Field(() => String, { nullable: true })
  company?: string;

  @Field(() => Boolean, { nullable: true })
  isShowLocation?: boolean;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => Boolean, { nullable: true })
  isShowDate?: boolean;

  @Field(() => String, { nullable: true })
  fromMonth?: string;

  @Field(() => String, { nullable: true })
  fromYear?: string;

  @Field(() => String, { nullable: true })
  toMonth?: string;

  @Field(() => String, { nullable: true })
  toYear?: string;

  @Field(() => Boolean, { nullable: true })
  untilNow?: boolean;

  @Field(() => [String], { nullable: true })
  points?: string[];
}
@InputType()
export class CreateResumeProjectItemInputsGQL extends CreateResumeProjectItemInputs {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Boolean, { nullable: true })
  isShowRole?: boolean;

  @Field(() => String, { nullable: true })
  role?: string;

  @Field(() => Boolean, { nullable: true })
  isShowCompany?: boolean;

  @Field(() => String, { nullable: true })
  company?: string;

  @Field(() => Boolean, { nullable: true })
  isShowLocation?: boolean;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => Boolean, { nullable: true })
  isShowUrl?: boolean;

  @Field(() => String, { nullable: true })
  url?: string;

  @Field(() => Boolean, { nullable: true })
  isShowDate?: boolean;

  @Field(() => String, { nullable: true })
  fromMonth?: string;

  @Field(() => String, { nullable: true })
  fromYear?: string;

  @Field(() => String, { nullable: true })
  toMonth?: string;

  @Field(() => String, { nullable: true })
  toYear?: string;

  @Field(() => Boolean, { nullable: true })
  untilNow?: boolean;

  @Field(() => [String], { nullable: true })
  points?: string[];
}
@InputType()
export class CreateResumeCourseWorkItemInputsGQL extends CreateResumeCourseWorkItemInputs {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  isShowInstitute?: boolean;

  @Field(() => String, { nullable: true })
  institute?: string;

  @Field(() => Boolean, { nullable: true })
  isShowDate?: boolean;

  @Field(() => String, { nullable: true })
  year?: string;

  @Field(() => Boolean, { nullable: true })
  isShowSkills?: boolean;

  @Field(() => String, { nullable: true })
  skills?: string;

  @Field(() => [String], { nullable: true })
  points?: string[];
}
@InputType()
export class CreateResumeEducationItemInputsGQL extends CreateResumeEducationItemInputs {
  @Field(() => String, { nullable: true })
  degree?: string;

  @Field(() => Boolean, { nullable: true })
  isShowInstitute?: boolean;

  @Field(() => String, { nullable: true })
  institute?: string;

  @Field(() => Boolean, { nullable: true })
  isShowLocation?: boolean;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => Boolean, { nullable: true })
  isShowGpa?: boolean;

  @Field(() => String, { nullable: true })
  gpa?: string;

  @Field(() => Boolean, { nullable: true })
  isShowDate?: boolean;

  @Field(() => String, { nullable: true })
  from?: string;

  @Field(() => String, { nullable: true })
  to?: string;

  @Field(() => Boolean, { nullable: true })
  untilNow?: boolean;

  @Field(() => [String], { nullable: true })
  points?: string[];
}
@InputType()
export class CreateResumeInvolvementItemInputsGQL extends CreateResumeInvolvementItemInputs {
  @Field(() => String, { nullable: true })
  role?: string;

  @Field(() => Boolean, { nullable: true })
  isShowCompany?: boolean;

  @Field(() => String, { nullable: true })
  company?: string;

  @Field(() => Boolean, { nullable: true })
  isShowLocation?: boolean;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => Boolean, { nullable: true })
  isShowDate?: boolean;

  @Field(() => String, { nullable: true })
  fromMonth?: string;

  @Field(() => String, { nullable: true })
  fromYear?: string;

  @Field(() => String, { nullable: true })
  toMonth?: string;

  @Field(() => String, { nullable: true })
  toYear?: string;

  @Field(() => Boolean, { nullable: true })
  untilNow?: boolean;

  @Field(() => [String], { nullable: true })
  points?: string[];
}
@InputType()
export class CreateResumeCertificationItemInputsGQL extends CreateResumeCertificationItemInputs {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  isShowInstitute?: boolean;

  @Field(() => String, { nullable: true })
  institute?: string;

  @Field(() => Boolean, { nullable: true })
  isShowDate?: boolean;

  @Field(() => String, { nullable: true })
  year?: string;

  @Field(() => [String], { nullable: true })
  points?: string[];
}

@InputType()
export class CreateResumeLanguageItemInputsGQL extends CreateResumeLanguageItemInputs {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  isShowLevel?: boolean;

  @Field(() => String, { nullable: true })
  level?: string;
}

@InputType()
export class CreateResumeResumeInputsGQL extends CreateResumeResumeInputs {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  role?: string;

  @Field(() => Boolean, { nullable: true })
  isShowPhoneNumber?: boolean;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => Boolean, { nullable: true })
  isShowLinkedin?: boolean;

  @Field(() => String, { nullable: true })
  linkedin?: string;

  @Field(() => Boolean, { nullable: true })
  isShowWebsite?: boolean;

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => Boolean, { nullable: true })
  isShowEmail?: boolean;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Boolean, { nullable: true })
  isShowLocation?: boolean;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => Boolean, { nullable: true })
  isShowBirthDay?: boolean;

  @Field(() => String, { nullable: true })
  birthDay?: string;

  @Field(() => Boolean, { nullable: true })
  isShowSummary?: boolean;

  @Field(() => String, { nullable: true })
  summaryLabel?: string;

  @Field(() => String, { nullable: true })
  summary?: string;

  @Field(() => Boolean, { nullable: true })
  isShowExperience?: boolean;

  @Field(() => String, { nullable: true })
  experienceLabel?: string;

  @Field(() => String, { nullable: true })
  experienceRoleLabel?: string;

  @Field(() => String, { nullable: true })
  experienceCompanyLabel?: string;

  @Field(() => String, { nullable: true })
  experienceLocationLabel?: string;

  @Field(() => [CreateResumeExperienceItemResumeInputsGQL], { nullable: true })
  experiences?: CreateResumeExperienceItemResumeInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowProject?: boolean;

  @Field(() => String, { nullable: true })
  projectLabel?: string;

  @Field(() => String, { nullable: true })
  projectRoleLabel?: string;

  @Field(() => String, { nullable: true })
  projectTitleLabel?: string;

  @Field(() => String, { nullable: true })
  projectCompanyLabel?: string;

  @Field(() => String, { nullable: true })
  projectLocationLabel?: string;

  @Field(() => String, { nullable: true })
  projectUrlLabel?: string;

  @Field(() => [CreateResumeProjectItemInputsGQL], { nullable: true })
  projects?: CreateResumeProjectItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowEducation?: boolean;

  @Field(() => String, { nullable: true })
  educationLabel?: string;

  @Field(() => String, { nullable: true })
  educationDegreeLabel?: string;

  @Field(() => String, { nullable: true })
  educationInstituteLabel?: string;

  @Field(() => String, { nullable: true })
  educationLocationLabel?: string;

  @Field(() => String, { nullable: true })
  educationGpaLabel?: string;

  @Field(() => [CreateResumeEducationItemInputsGQL], { nullable: true })
  educations?: CreateResumeEducationItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowCertification?: boolean;

  @Field(() => String, { nullable: true })
  certificationLabel?: string;

  @Field(() => String, { nullable: true })
  certificationNameLabel?: string;

  @Field(() => String, { nullable: true })
  certificationInstituteLabel?: string;

  @Field(() => String, { nullable: true })
  certificationYearLabel?: string;

  @Field(() => [CreateResumeCertificationItemInputsGQL], { nullable: true })
  certifications?: CreateResumeCertificationItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowCourseWork?: boolean;

  @Field(() => String, { nullable: true })
  courseWorkLabel?: string;

  @Field(() => String, { nullable: true })
  courseWorkTitleLabel?: string;

  @Field(() => String, { nullable: true })
  courseWorkNameLabel?: string;

  @Field(() => String, { nullable: true })
  courseWorkInstituteLabel?: string;

  @Field(() => String, { nullable: true })
  courseWorkYearLabel?: string;

  @Field(() => String, { nullable: true })
  courseWorkSkillsLabel?: string;

  @Field(() => [CreateResumeCourseWorkItemInputsGQL], { nullable: true })
  courseWorks?: CreateResumeCourseWorkItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowInvolvement?: boolean;

  @Field(() => String, { nullable: true })
  involvementLabel?: string;

  @Field(() => String, { nullable: true })
  involvementRoleLabel?: string;

  @Field(() => String, { nullable: true })
  involvementCompanyLabel?: string;

  @Field(() => String, { nullable: true })
  involvementLocationLabel?: string;

  @Field(() => [CreateResumeInvolvementItemInputsGQL], { nullable: true })
  involvements?: CreateResumeInvolvementItemInputsGQL[];

  @Field(() => Boolean, { nullable: true })
  isShowSkill?: boolean;

  @Field(() => String, { nullable: true })
  skillLabel?: string;

  @Field(() => [String], { nullable: true })
  skills?: string[];

  @Field(() => Boolean, { nullable: true })
  isShowLanguage?: boolean;

  @Field(() => String, { nullable: true })
  languageLabel?: string;

  @Field(() => String, { nullable: true })
  languageNameLabel?: string;

  @Field(() => String, { nullable: true })
  languageLevelLabel?: string;

  @Field(() => [CreateResumeLanguageItemInputsGQL], { nullable: true })
  languages?: CreateResumeLanguageItemInputsGQL[];

  @Field(() => String, { nullable: true })
  hobbyLabel?: string;

  @Field(() => Boolean, { nullable: true })
  isShowHobby?: boolean;

  @Field(() => [String], { nullable: true })
  hobbies?: string[];
}
