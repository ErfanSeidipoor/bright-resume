import { Expose, Type } from "class-transformer";
import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
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
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  fromMonth?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  fromYear?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  toMonth?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  toYear?: string;

  @IsOptional()
  @IsBoolean()
  untilNow?: boolean;

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
  role?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  company?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  url?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  fromMonth?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  fromYear?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  toMonth?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  toYear?: string;

  @IsOptional()
  @IsBoolean()
  untilNow?: boolean;

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
  @IsString()
  @MaxLength(50)
  institute?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  gpa?: string;

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
  untilNow?: boolean;

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
  @IsString()
  @MaxLength(50)
  institute?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  year?: string;

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
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  institute?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  year?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  skills?: string;

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
  @IsString()
  @MaxLength(50)
  company?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  fromMonth?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  fromYear?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  toMonth?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  toYear?: string;

  @IsOptional()
  @IsBoolean()
  untilNow?: boolean;

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
  @IsString()
  @MaxLength(20)
  level?: string;
}

export class CreateResumeResumeInputs {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  role?: string;

  @IsOptional()
  @IsBoolean()
  isShowPhoneNumber?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(20)
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
  isShowSummary?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(2500)
  summary?: string;

  @IsOptional()
  @IsBoolean()
  isShowExperience?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  experienceLabel?: string;

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
  @IsString()
  @MaxLength(50)
  projectLabel?: string;

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
  @IsString()
  @MaxLength(50)
  certificationLabel?: string;

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
  @IsString()
  @MaxLength(50)
  courseWorkLabel?: string;

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
  @IsString({ each: true })
  @MaxLength(2000, { each: true })
  @IsArray()
  @ArrayMaxSize(15)
  skills?: string[];

  @IsOptional()
  @IsBoolean()
  isShowLanguage?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  languageLabel?: string;

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
  @IsString({ each: true })
  @MaxLength(2000, { each: true })
  @IsArray()
  @ArrayMaxSize(15)
  hobbies?: string[];
}
