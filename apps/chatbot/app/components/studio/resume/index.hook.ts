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

import { ResumeTemplateProps } from "@resume-template-components/templates/resume-template-props";
import { useEffect, useState } from "react";

import { useStudioContext } from "../use-context";

export const useData = () => {
  const {
    selectedResume,
    setResumeSection,
    setIsOpenSteps,
    setResumeSubSectionIndex,
    updateResumeResume,
    generatePdfOfResumeFile,
    setGeneratePdfLoading,
  } = useStudioContext();

  const [resumeModel, setResumeModel] = useState(
    new ResumeModel(selectedResume)
  );

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (selectedResume) {
      setResumeModel(
        new ResumeModel(JSON.parse(JSON.stringify(selectedResume)))
      );
    }
  }, [selectedResume]);

  useEffect(() => {
    if (
      JSON.stringify(resumeModel.getPlainObject()) ===
      JSON.stringify(new ResumeModel(selectedResume).getPlainObject())
    ) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [resumeModel, selectedResume]);

  const [hoverSection, setHoverSection] =
    useState<ResumeTemplateProps["hoverSection"]>();

  const [hoverSubSectionPoint, setHoverSubSectionPoint] =
    useState<ResumeTemplateProps["hoverSubSectionPoint"]>();

  const [hoverSubSection, setHoverSubSection] =
    useState<ResumeTemplateProps["hoverSubSection"]>();

  const onMoveUpSection = (section1: ResumeSectionType) => {
    const section2 = resumeModel.getUpperAndVisibleSection(section1);

    if (!section2) return;
    resumeModel.changeOrderOfTwoSections(section1, section2);

    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const onMoveDownSection = (section1: ResumeSectionType) => {
    const section2 = resumeModel.getLowerAndVisibleSection(section1);

    if (!section2) return;
    resumeModel.changeOrderOfTwoSections(section1, section2);

    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const onChangeSubSectionIndex = (
    section: ResumeSectionType,
    subSectionIndex: number,
    newIndex: number
  ) => {
    if (section === "education") {
      resumeModel.changeEducationsIndex(subSectionIndex, newIndex);
    } else if (section === "project") {
      resumeModel.changeProjectsIndex(subSectionIndex, newIndex);
    } else if (section === "experience") {
      resumeModel.changeExperiencesIndex(subSectionIndex, newIndex);
    } else if (section === "skill") {
      resumeModel.changeSkillsIndex(subSectionIndex, newIndex);
    } else if (section === "certification") {
      resumeModel.changeCertificationsIndex(subSectionIndex, newIndex);
    } else if (section === "courseWork") {
      resumeModel.changeCourseWorksIndex(subSectionIndex, newIndex);
    } else if (section === "involvement") {
      resumeModel.changeInvolvementsIndex(subSectionIndex, newIndex);
    } else if (section === "language") {
      resumeModel.changeLanguagesIndex(subSectionIndex, newIndex);
    } else if (section === "hobby") {
      resumeModel.changeHobbiesIndex(subSectionIndex, newIndex);
    }
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const onChangeSubSectionPointIndex = (
    section: ResumeSectionType,
    subSectionIndex: number,
    pointIndex: number,
    newIndex: number
  ) => {
    if (section === "education") {
      callResumeEducationSetMethod(
        subSectionIndex,
        "changePointsIndex",
        pointIndex,
        newIndex
      );
    } else if (section === "project") {
      callResumeProjectSetMethod(
        subSectionIndex,
        "changePointsIndex",
        pointIndex,
        newIndex
      );
    } else if (section === "experience") {
      callResumeExperienceSetMethod(
        subSectionIndex,
        "changePointsIndex",
        pointIndex,
        newIndex
      );
    } else if (section === "certification") {
      callResumeCertificationSetMethod(
        subSectionIndex,
        "changePointsIndex",
        pointIndex,
        newIndex
      );
    } else if (section === "courseWork") {
      callResumeCourseWorkSetMethod(
        subSectionIndex,
        "changePointsIndex",
        pointIndex,
        newIndex
      );
    } else if (section === "involvement") {
      callResumeInvolvementSetMethod(
        subSectionIndex,
        "changePointsIndex",
        pointIndex,
        newIndex
      );
    }
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeSetMethod = <M extends ResumeModelSetMethodsKeyType>(
    methodName: M,
    ...args: Parameters<ResumeModel[M]>
  ) => {
    resumeModel.setMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeGetMethod = <M extends ResumeModelGetMethodsKeyType>(
    methodName: M,
    ...args: Parameters<ResumeModel[M]>
  ): ReturnType<ResumeModel[M]> => {
    return resumeModel.getMethod(methodName, ...args);
  };

  const callResumeProjectSetMethod = <M extends ProjectModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<ProjectModel[M]>
  ) => {
    if (index >= resumeModel.getProjects().length) return;

    const projectModel = resumeModel.getProjects()[index];

    projectModel.callSetMethod(methodName, ...args);

    resumeModel.setProject(index, projectModel.input);

    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeCertificationSetMethod = <
    M extends CertificationModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<CertificationModel[M]>
  ) => {
    if (index >= resumeModel.getCertifications().length) return;

    const certificationModel = resumeModel.getCertifications()[index];
    certificationModel.callSetMethod(methodName, ...args);
    resumeModel.setCertification(index, certificationModel.input);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeCourseWorkSetMethod = <
    M extends CourseWorkModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<CourseWorkModel[M]>
  ) => {
    if (index >= resumeModel.getCourseWorks().length) return;

    const courseWorkModel = resumeModel.getCourseWorks()[index];
    courseWorkModel.callSetMethod(methodName, ...args);
    resumeModel.setCourseWork(index, courseWorkModel.input);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeEducationSetMethod = <
    M extends EducationModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<EducationModel[M]>
  ) => {
    if (index >= resumeModel.getEducations().length) return;

    const educationModel = resumeModel.getEducations()[index];
    educationModel.callSetMethod(methodName, ...args);
    resumeModel.setEducation(index, educationModel.input);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeExperienceSetMethod = <
    M extends ExperienceModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<ExperienceModel[M]>
  ) => {
    if (index >= resumeModel.getExperiences().length) return;

    const experienceModel = resumeModel.getExperiences()[index];
    experienceModel.callSetMethod(methodName, ...args);
    resumeModel.setExperience(index, experienceModel.input);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeInvolvementSetMethod = <
    M extends InvolvementModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<InvolvementModel[M]>
  ) => {
    if (index >= resumeModel.getInvolvements().length) return;

    const involvementModel = resumeModel.getInvolvements()[index];
    involvementModel.callSetMethod(methodName, ...args);
    resumeModel.setInvolvement(index, involvementModel.input);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeLanguageSetMethod = <
    M extends LanguageModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<LanguageModel[M]>
  ) => {
    if (index >= resumeModel.getLanguages().length) return;

    const languageModel = resumeModel.getLanguages()[index];
    languageModel.callSetMethod(methodName, ...args);
    resumeModel.setLanguage(index, languageModel.input);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeSkillSetMethod = <M extends SkillModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<SkillModel[M]>
  ) => {
    if (index >= resumeModel.getSkills().length) return;

    const skillModel = resumeModel.getSkills()[index];
    skillModel.callSetMethod(methodName, ...args);
    resumeModel.setSkill(index, skillModel.input);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeHobbySetMethod = <M extends HobbyModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<HobbyModel[M]>
  ) => {
    if (index >= resumeModel.getHobbies().length) return;

    const hobbyModel = resumeModel.getHobbies()[index];
    hobbyModel.callSetMethod(methodName, ...args);
    resumeModel.setHobby(index, hobbyModel.input);

    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const onClickEditSection = (section: ResumeSectionType) => {
    setResumeSection(section);
    setResumeSubSectionIndex(0);
    setIsOpenSteps(true);
  };

  const onClickEditSubSection = (
    section: ResumeSectionType,
    subSectionIndex: number
  ) => {
    setResumeSection(section);
    setResumeSubSectionIndex(subSectionIndex);
    setIsOpenSteps(true);
  };

  const updateResume = () => {
    updateResumeResume({
      variables: {
        updateResumeResumeInputs: {
          ...resumeModel.getPlainObject(),
          resumeId: resumeModel.getId()!,
        },
      },
    });
  };

  const generatePdf = () => {
    setGeneratePdfLoading(true);
    generatePdfOfResumeFile({
      variables: {
        generatePdfOfResumeFileInputs: {
          resumeId: resumeModel.getId()!,
        },
      },
    });
  };

  return {
    resumeModel,
    hoverSection,
    setHoverSection,
    hoverSubSectionPoint,
    setHoverSubSectionPoint,
    hoverSubSection,
    setHoverSubSection,
    onChangeSubSectionIndex,
    onChangeSubSectionPointIndex,
    callResumeSetMethod,
    callResumeGetMethod,
    callResumeProjectSetMethod,
    callResumeCertificationSetMethod,
    callResumeCourseWorkSetMethod,
    callResumeEducationSetMethod,
    callResumeExperienceSetMethod,
    callResumeInvolvementSetMethod,
    callResumeLanguageSetMethod,
    callResumeSkillSetMethod,
    callResumeHobbySetMethod,
    onMoveUpSection,
    onMoveDownSection,
    onClickEditSection,
    onClickEditSubSection,
    updateResume,
    generatePdf,
    isChanged,
  };
};
