import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";
import { Expose, Type } from "class-transformer";
import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from "class-validator";

export class CreateResumeExperienceItemResumeInputs {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  role?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  company?: string;

  @IsOptional()
  @IsBoolean()
  isShowLocation?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsBoolean()
  isShowDate?: boolean;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  from?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  to?: string;

  @IsOptional()
  @IsBoolean()
  isShowPoints?: boolean;

  @IsOptional()
  @IsString({ each: true })
  @MaxLength(2000, { each: true })
  @IsArray()
  @ArrayMaxSize(15)
  points?: string[];
}

export class CreateResumeProjectItemInputs {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  title?: string;

  @IsOptional()
  @IsBoolean()
  isShowRole?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  role?: string;

  @IsOptional()
  @IsBoolean()
  isShowCompany?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  company?: string;

  @IsOptional()
  @IsBoolean()
  isShowLocation?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsBoolean()
  isShowUrl?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  url?: string;

  @IsOptional()
  @IsBoolean()
  isShowDate?: boolean;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  from?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  to?: string;

  @IsOptional()
  @IsBoolean()
  isShowPoints?: boolean;

  @IsOptional()
  @IsString({ each: true })
  @MaxLength(2000, { each: true })
  @IsArray()
  @ArrayMaxSize(15)
  points?: string[];
}

export class CreateResumeEducationItemInputs {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  degree?: string;

  @IsOptional()
  @IsBoolean()
  isShowInstitute?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  institute?: string;

  @IsOptional()
  @IsBoolean()
  isShowLocation?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsBoolean()
  isShowGpa?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  gpa?: string;

  @IsOptional()
  @IsBoolean()
  isShowDate?: boolean;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  from?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  to?: string;

  @IsOptional()
  @IsBoolean()
  isShowPoints?: boolean;

  @IsOptional()
  @IsString({ each: true })
  @MaxLength(2000, { each: true })
  @IsArray()
  @ArrayMaxSize(15)
  points?: string[];
}

export class CreateResumeCertificationItemInputs {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsBoolean()
  isShowInstitute?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  institute?: string;

  @IsOptional()
  @IsBoolean()
  isShowDate?: boolean;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  year?: string;

  @IsOptional()
  @IsBoolean()
  isShowPoints?: boolean;

  @IsOptional()
  @IsString({ each: true })
  @MaxLength(2000, { each: true })
  @IsArray()
  @ArrayMaxSize(15)
  points?: string[];
}

export class CreateResumeCourseWorkItemInputs {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsBoolean()
  isShowInstitute?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  institute?: string;

  @IsOptional()
  @IsBoolean()
  isShowDate?: boolean;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  year?: string;

  @IsOptional()
  @IsBoolean()
  isShowSkills?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  skills?: string;

  @IsOptional()
  @IsBoolean()
  isShowPoints?: boolean;

  @IsOptional()
  @IsString({ each: true })
  @MaxLength(2000, { each: true })
  @IsArray()
  @ArrayMaxSize(15)
  points?: string[];
}

export class CreateResumeInvolvementItemInputs {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  role?: string;

  @IsOptional()
  @IsBoolean()
  isShowCompany?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  company?: string;

  @IsOptional()
  @IsBoolean()
  isShowLocation?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsBoolean()
  isShowDate?: boolean;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  from?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  to?: string;

  @IsOptional()
  @IsBoolean()
  isShowPoints?: boolean;

  @IsOptional()
  @IsString({ each: true })
  @MaxLength(2000, { each: true })
  @IsArray()
  @ArrayMaxSize(15)
  points?: string[];
}

export class CreateResumeLanguageItemInputs {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  name?: string;

  @IsOptional()
  @IsBoolean()
  isShowLevel?: boolean;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  level?: string;
}

export class CreateResumeSkillItemInputs {
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  point?: string;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;
}

export class CreateResumeHobbyItemInputs {
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  point?: string;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;
}

export class CreateResumeResumeInputs {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsString()
  @MaxLength(50)
  @MinLength(3)
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  role?: string;

  @IsOptional()
  @IsEnum(ResumeFontSizeEnum)
  fontSize?: ResumeFontSizeEnum;

  @IsOptional()
  @IsEnum(ResumeFontFamilyEnum)
  fontFamily?: ResumeFontFamilyEnum;

  @IsOptional()
  @IsEnum(ResumeColorEnum)
  color?: ResumeColorEnum;

  @IsOptional()
  @IsBoolean()
  isShowPhoneNumber?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  phoneNumber?: string;

  @IsOptional()
  @IsBoolean()
  isShowLinkedin?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  linkedin?: string;

  @IsOptional()
  @IsBoolean()
  isShowWebsite?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  website?: string;

  @IsOptional()
  @IsBoolean()
  isShowEmail?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  email?: string;

  @IsOptional()
  @IsBoolean()
  isShowLocation?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsBoolean()
  isShowBirthDay?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  birthDay?: string;

  @IsOptional()
  @IsBoolean()
  isShowImage?: boolean;

  @IsOptional()
  @IsBoolean()
  isShowSummary?: boolean;

  @IsOptional()
  @IsPositive()
  summaryOrder?: number;

  @IsOptional()
  @IsString()
  @MaxLength(2500)
  summary?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2500)
  summaryLabel?: string;

  @IsOptional()
  @IsBoolean()
  isShowExperience?: boolean;

  @IsOptional()
  @IsPositive()
  experienceOrder?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  experienceLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  experienceRoleLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  experienceCompanyLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  experienceLocationLabel?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CreateResumeExperienceItemResumeInputs)
  @IsArray()
  @ArrayMaxSize(20)
  experiences?: CreateResumeExperienceItemResumeInputs[];

  @IsOptional()
  @IsBoolean()
  isShowProject?: boolean;

  @IsOptional()
  @IsPositive()
  projectOrder?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  projectLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  projectTitleLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  projectRoleLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  projectCompanyLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  projectLocationLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  projectUrlLabel?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CreateResumeProjectItemInputs)
  @IsArray()
  @ArrayMaxSize(20)
  projects?: CreateResumeProjectItemInputs[];

  @IsOptional()
  @IsBoolean()
  isShowEducation?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  educationLabel?: string;

  @IsOptional()
  @IsPositive()
  educationOrder?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  educationDegreeLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  educationInstituteLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  educationLocationLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  educationGpaLabel?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CreateResumeEducationItemInputs)
  @IsArray()
  @ArrayMaxSize(20)
  educations?: CreateResumeEducationItemInputs[];

  @IsOptional()
  @IsBoolean()
  isShowCertification?: boolean;

  @IsOptional()
  @IsPositive()
  certificationOrder?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  certificationLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  certificationNameLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  certificationInstituteLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  certificationYearLabel?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CreateResumeCertificationItemInputs)
  @IsArray()
  @ArrayMaxSize(20)
  certifications?: CreateResumeCertificationItemInputs[];

  @IsOptional()
  @IsBoolean()
  isShowCourseWork?: boolean;

  @IsOptional()
  @IsPositive()
  courseWorkOrder?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  courseWorkLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  courseWorkTitleLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  courseWorkNameLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  courseWorkInstituteLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  courseWorkYearLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  courseWorkSkillsLabel?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CreateResumeCourseWorkItemInputs)
  @IsArray()
  @ArrayMaxSize(20)
  courseWorks?: CreateResumeCourseWorkItemInputs[];

  @IsOptional()
  @IsBoolean()
  isShowInvolvement?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  involvementLabel?: string;

  @IsOptional()
  @IsPositive()
  involvementOrder?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  involvementRoleLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  involvementCompanyLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  involvementLocationLabel?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CreateResumeInvolvementItemInputs)
  @IsArray()
  @ArrayMaxSize(20)
  involvements?: CreateResumeInvolvementItemInputs[];

  @IsOptional()
  @IsBoolean()
  isShowSkill?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  skillLabel?: string;

  @IsOptional()
  @IsPositive()
  skillOrder?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CreateResumeSkillItemInputs)
  @IsArray()
  @ArrayMaxSize(20)
  skills?: CreateResumeSkillItemInputs[];

  @IsOptional()
  @IsBoolean()
  isShowLanguage?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  languageLabel?: string;

  @IsOptional()
  @IsPositive()
  languageOrder?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  languageNameLabel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  languageLevelLabel?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CreateResumeLanguageItemInputs)
  @IsArray()
  @ArrayMaxSize(20)
  languages?: CreateResumeLanguageItemInputs[];

  @IsOptional()
  @IsBoolean()
  isShowHobby?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  hobbyLabel?: string;

  @IsOptional()
  @IsPositive()
  hobbyOrder?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CreateResumeHobbyItemInputs)
  @IsArray()
  @ArrayMaxSize(20)
  hobbies?: CreateResumeHobbyItemInputs[];
}
