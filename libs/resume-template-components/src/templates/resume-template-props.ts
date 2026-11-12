import {
  CertificationModel,
  CertificationModelSetMethodsKeyType,
  CourseWorkModel,
  CourseWorkModelSetMethodsKeyType,
  EducationModel,
  EducationModelSetMethodsKeyType,
  ExperienceModel,
  ExperienceModelSetMethodsKeyType,
  HobbyModel,
  HobbyModelSetMethodsKeyType,
  IResume,
  InvolvementModel,
  InvolvementModelSetMethodsKeyType,
  LanguageModel,
  LanguageModelSetMethodsKeyType,
  ProjectModel,
  ProjectModelSetMethodsKeyType,
  ResumeModel,
  ResumeModelGetMethodsKeyType,
  ResumeModelSetMethodsKeyType,
  ResumeSectionType,
  SkillModel,
  SkillModelSetMethodsKeyType,
} from "@models";

export interface ResumeTemplateProps {
  zoom?: number;
  staticMode?: boolean;
  resume?: Partial<IResume> | undefined;
  hoverSection?: ResumeSectionType;
  setHoverSection?: (arg?: ResumeSectionType) => void;
  hoverSubSection?: {
    section: ResumeSectionType;
    subSectionIndex: number;
  };
  setHoverSubSection?: (arg?: {
    section: ResumeSectionType;
    subSectionIndex: number;
  }) => void;
  hoverSubSectionPoint?: {
    section: ResumeSectionType;
    subSectionIndex: number;
    pointIndex: number;
  };
  setHoverSubSectionPoint?: (arg?: {
    section: ResumeSectionType;
    subSectionIndex: number;
    pointIndex: number;
  }) => void;
  onChangeSubSectionIndex?: (
    section: ResumeSectionType,
    subSectionIndex: number,
    newIndex: number
  ) => void;
  onChangeSubSectionPointIndex?: (
    section: ResumeSectionType,
    subSectionIndex: number,
    pointIndex: number,
    newIndex: number
  ) => void;
  callResumeSetMethod?: <M extends ResumeModelSetMethodsKeyType>(
    methodName: M,
    ...args: Parameters<ResumeModel[M]>
  ) => void;
  callResumeGetMethod?: <M extends ResumeModelGetMethodsKeyType>(
    methodName: M,
    ...args: Parameters<ResumeModel[M]>
  ) => ReturnType<ResumeModel[M]>;
  callResumeProjectSetMethod?: <M extends ProjectModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<ProjectModel[M]>
  ) => void;
  callResumeCertificationSetMethod?: <
    M extends CertificationModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<CertificationModel[M]>
  ) => void;
  callResumeCourseWorkSetMethod?: <M extends CourseWorkModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<CourseWorkModel[M]>
  ) => void;
  callResumeEducationSetMethod?: <M extends EducationModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<EducationModel[M]>
  ) => void;
  callResumeExperienceSetMethod?: <M extends ExperienceModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<ExperienceModel[M]>
  ) => void;
  callResumeInvolvementSetMethod?: <
    M extends InvolvementModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<InvolvementModel[M]>
  ) => void;

  callResumeLanguageSetMethod?: <M extends LanguageModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<LanguageModel[M]>
  ) => void;
  callResumeSkillSetMethod?: <M extends SkillModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<SkillModel[M]>
  ) => void;
  callResumeHobbySetMethod?: <M extends HobbyModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<HobbyModel[M]>
  ) => void;
  onMoveDownSection?: (section: ResumeSectionType) => void;
  onMoveUpSection?: (section: ResumeSectionType) => void;
  onClickEditSection?: (section: ResumeSectionType) => void;
  onClickEditSubSection?: (section: ResumeSectionType, index: number) => void;
}
