import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

import { CertificationModel, ICertification } from "./certification";
import { CourseWorkModel, ICourseWork } from "./course-work";
import { IEducation, EducationModel } from "./education";
import { ExperienceModel, IExperience } from "./experience";
import { IProject, ProjectModel } from "./project";
import { IInvolvement, InvolvementModel } from "./involvement";
import { ILanguage, LanguageModel } from "./language";
import { ISkill, SkillModel } from "./skill";
import { IHobby, HobbyModel } from "./hobby";

export type ResumeSectionType =
  | "header"
  | "summary"
  | "experience"
  | "involvement"
  | "project"
  | "education"
  | "skill"
  | "courseWork"
  | "certification"
  | "hobby"
  | "language"
  | undefined;

export interface IResume {
  id?: string | null;
  userId: string | null;
  name?: string | null;
  title?: string | null;
  fontFamily?: ResumeFontFamilyEnum | null;
  fontSize?: ResumeFontSizeEnum | null;
  color?: ResumeColorEnum | null;
  role?: string | null;
  isShowImage?: boolean | null;
  isShowPhoneNumber?: boolean | null;
  phoneNumber?: string | null;
  isShowLinkedin?: boolean | null;
  linkedin?: string | null;
  isShowWebsite?: boolean | null;
  website?: string | null;
  isShowEmail?: boolean | null;
  email?: string | null;
  isShowLocation?: boolean | null;
  location?: string | null;
  isShowBirthDay?: boolean | null;
  birthDay?: string | null;
  isShowSummary?: boolean | null;
  summaryOrder?: number | null;
  summaryLabel?: string | null;
  summary?: string | null;
  isShowExperience?: boolean | null;
  experienceOrder?: number | null;
  experienceLabel?: string | null;
  experienceRoleLabel?: string | null;
  experienceCompanyLabel?: string | null;
  experienceLocationLabel?: string | null;
  experiences?: IExperience[] | null;
  isShowProject?: boolean | null;
  projectOrder?: number | null;
  projectLabel?: string | null;
  projectRoleLabel?: string | null;
  projectTitleLabel?: string | null;
  projectCompanyLabel?: string | null;
  projectLocationLabel?: string | null;
  projectUrlLabel?: string | null;
  projects?: IProject[] | null;
  isShowEducation?: boolean | null;
  educationLabel?: string | null;
  educationOrder?: number | null;
  educationDegreeLabel?: string | null;
  educationInstituteLabel?: string | null;
  educationLocationLabel?: string | null;
  educationGpaLabel?: string | null;
  educations?: IEducation[] | null;
  isShowCertification?: boolean | null;
  certificationOrder?: number | null;
  certificationLabel?: string | null;
  certificationNameLabel?: string | null;
  certificationInstituteLabel?: string | null;
  certificationYearLabel?: string | null;
  certifications?: ICertification[] | null;
  isShowCourseWork?: boolean | null;
  courseWorkLabel?: string | null;
  courseWorkOrder?: number | null;
  courseWorkTitleLabel?: string | null;
  courseWorkNameLabel?: string | null;
  courseWorkInstituteLabel?: string | null;
  courseWorkYearLabel?: string | null;
  courseWorkSkillsLabel?: string | null;
  courseWorks?: ICourseWork[] | null;
  isShowInvolvement?: boolean | null;
  involvementLabel?: string | null;
  involvementOrder?: number | null;
  involvementRoleLabel?: string | null;
  involvementCompanyLabel?: string | null;
  involvementLocationLabel?: string | null;
  involvements?: IInvolvement[] | null;
  isShowSkill?: boolean | null;
  skillLabel?: string | null;
  skillOrder?: number | null;
  skills?: ISkill[] | null;
  isShowLanguage?: boolean | null;
  languageOrder?: number | null;
  languageLabel?: string | null;
  languageNameLabel?: string | null;
  languageLevelLabel?: string | null;
  languages?: ILanguage[] | null;
  hobbyOrder?: number | null;
  hobbyLabel?: string | null;
  hobbies?: IHobby[] | null;
  isShowHobby?: boolean | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

export class ResumeModel {
  input: Partial<IResume> = {};

  constructor(input: Partial<IResume> | undefined = {}) {
    this.input = input;
  }

  getId(): string | undefined | null {
    return this.input.id;
  }

  getName(): string | undefined {
    return this.input.name || undefined;
  }

  getUserId(): string | undefined | null {
    return this.input.userId;
  }

  setName(name: string | undefined): void {
    this.input.name = name;
  }

  getTitle(): string | undefined | null {
    return this.input.title;
  }

  setTitle(title: string | undefined): void {
    this.input.title = title;
  }

  getFontSize(): ResumeFontSizeEnum | undefined | null {
    return this.input.fontSize;
  }

  setFontSize(fontSize: ResumeFontSizeEnum | undefined): void {
    this.input.fontSize = fontSize;
  }

  getFontFamily(): ResumeFontFamilyEnum | undefined | null {
    return this.input.fontFamily;
  }

  setFontFamily(fontFamily: ResumeFontFamilyEnum | undefined): void {
    this.input.fontFamily = fontFamily;
  }

  getColor(): ResumeColorEnum | undefined | null {
    return this.input.color;
  }

  getColorValue(color: ResumeColorEnum): string {
    if (color === ResumeColorEnum.Red) return "#ff0000";
    if (color === ResumeColorEnum.Black) return "#000000";
    if (color === ResumeColorEnum.Blue) return "#0000ff";
    if (color === ResumeColorEnum.Yellow) return "#CD9D00";
    if (color === ResumeColorEnum.Green) return "#008000";
    if (color === ResumeColorEnum.Gray) return "#808080";
    if (color === ResumeColorEnum.Purple) return "#800080";
    if (color === ResumeColorEnum.Orange) return "#ffa500";
    if (color === ResumeColorEnum.Brown) return "#a52a2a";
    return "#000";
  }

  setColor(color: ResumeColorEnum | undefined): void {
    this.input.color = color;
  }

  getRole(): string | undefined | null {
    return this.input.role;
  }

  setRole(role: string | undefined): void {
    this.input.role = role;
  }

  getIsShowImage(): boolean | undefined | null {
    return this.input.isShowImage;
  }

  setIsShowImage(isShowImage: boolean | undefined): void {
    this.input.isShowImage = isShowImage;
  }

  getIsShowPhoneNumber(): boolean | undefined | null {
    return this.input.isShowPhoneNumber;
  }

  setIsShowPhoneNumber(isShowPhoneNumber: boolean | undefined): void {
    this.input.isShowPhoneNumber = isShowPhoneNumber;
  }

  getPhoneNumber(): string | undefined | null {
    return this.input.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string | undefined): void {
    this.input.phoneNumber = phoneNumber;
  }

  getIsShowLinkedin(): boolean | undefined | null {
    return this.input.isShowLinkedin;
  }

  setIsShowLinkedin(isShowLinkedin: boolean | undefined): void {
    this.input.isShowLinkedin = isShowLinkedin;
  }

  getLinkedin(): string | undefined | null {
    return this.input.linkedin;
  }

  setLinkedin(linkedin: string | undefined): void {
    this.input.linkedin = linkedin;
  }

  getIsShowWebsite(): boolean | undefined | null {
    return this.input.isShowWebsite;
  }

  setIsShowWebsite(isShowWebsite: boolean | undefined): void {
    this.input.isShowWebsite = isShowWebsite;
  }

  getWebsite(): string | undefined | null {
    return this.input.website;
  }

  setWebsite(website: string | undefined): void {
    this.input.website = website;
  }

  getIsShowEmail(): boolean | undefined | null {
    return this.input.isShowEmail;
  }

  setIsShowEmail(isShowEmail: boolean | undefined): void {
    this.input.isShowEmail = isShowEmail;
  }

  getEmail(): string | undefined | null {
    return this.input.email;
  }

  setEmail(email: string | undefined): void {
    this.input.email = email;
  }

  getIsShowLocation(): boolean | undefined | null {
    return this.input.isShowLocation;
  }

  getIsShowBirthDay(): boolean | undefined | null {
    return this.input.isShowBirthDay;
  }

  setIsShowLocation(isShowLocation: boolean | undefined): void {
    this.input.isShowLocation = isShowLocation;
  }

  getLocation(): string | undefined | null {
    return this.input.location;
  }

  setLocation(location: string | undefined): void {
    this.input.location = location;
  }

  setIsShowBirthDay(isShowBirthDay: boolean | undefined): void {
    this.input.isShowBirthDay = isShowBirthDay;
  }

  getBirthDay(): string | undefined | null {
    return this.input.birthDay;
  }

  setBirthDay(birthDay: string | undefined): void {
    this.input.birthDay = birthDay;
  }

  getIsShowSummary(): boolean | undefined | null {
    return this.input.isShowSummary;
  }

  setIsShowSummary(isShowSummary: boolean | undefined): void {
    this.input.isShowSummary = isShowSummary;
  }

  getSummaryLabel(): string | undefined | null {
    return this.input.summaryLabel;
  }

  setSummaryLabel(summaryLabel: string | undefined): void {
    this.input.summaryLabel = summaryLabel;
  }

  getSummary(): string | undefined | null {
    return this.input.summary;
  }

  setSummary(summary: string | undefined): void {
    this.input.summary = summary;
  }

  getIsShowExperience(): boolean | undefined | null {
    return this.input.isShowExperience;
  }

  setIsShowExperience(isShowExperience: boolean | undefined): void {
    this.input.isShowExperience = isShowExperience;
  }

  getExperienceLabel(): string | undefined | null {
    return this.input.experienceLabel;
  }

  setExperienceLabel(experienceLabel: string | undefined): void {
    this.input.experienceLabel = experienceLabel;
  }

  getExperienceRoleLabel(): string | undefined | null {
    return this.input.experienceRoleLabel;
  }

  setExperienceRoleLabel(experienceRoleLabel: string | undefined): void {
    this.input.experienceRoleLabel = experienceRoleLabel;
  }

  getExperienceCompanyLabel(): string | undefined | null {
    return this.input.experienceCompanyLabel;
  }

  setExperienceCompanyLabel(experienceCompanyLabel: string | undefined): void {
    this.input.experienceCompanyLabel = experienceCompanyLabel;
  }

  getExperienceLocationLabel(): string | undefined | null {
    return this.input.experienceLocationLabel;
  }

  setExperienceLocationLabel(
    experienceLocationLabel: string | undefined
  ): void {
    this.input.experienceLocationLabel = experienceLocationLabel;
  }

  getIsShowProject(): boolean | undefined | null {
    return this.input.isShowProject;
  }

  setIsShowProject(isShowProject: boolean | undefined): void {
    this.input.isShowProject = isShowProject;
  }

  getProjectLabel(): string | undefined | null {
    return this.input.projectLabel;
  }

  setProjectLabel(projectLabel: string | undefined): void {
    this.input.projectLabel = projectLabel;
  }

  getProjectRoleLabel(): string | undefined | null {
    return this.input.projectRoleLabel;
  }

  setProjectRoleLabel(projectRoleLabel: string | undefined): void {
    this.input.projectRoleLabel = projectRoleLabel;
  }

  getProjectTitleLabel(): string | undefined | null {
    return this.input.projectTitleLabel;
  }

  setProjectTitleLabel(projectTitleLabel: string | undefined): void {
    this.input.projectTitleLabel = projectTitleLabel;
  }
  getProjectCompanyLabel(): string | undefined | null {
    return this.input.projectCompanyLabel;
  }

  setProjectCompanyLabel(projectCompanyLabel: string | undefined): void {
    this.input.projectCompanyLabel = projectCompanyLabel;
  }

  getProjectLocationLabel(): string | undefined | null {
    return this.input.projectLocationLabel;
  }

  setProjectLocationLabel(projectLocationLabel: string | undefined): void {
    this.input.projectLocationLabel = projectLocationLabel;
  }

  getProjectUrlLabel(): string | undefined | null {
    return this.input.projectUrlLabel;
  }

  setProjectUrlLabel(projectUrlLabel: string | undefined): void {
    this.input.projectUrlLabel = projectUrlLabel;
  }
  getIsShowEducation(): boolean | undefined | null {
    return this.input.isShowEducation;
  }

  setIsShowEducation(isShowEducation: boolean | undefined): void {
    this.input.isShowEducation = isShowEducation;
  }

  getEducationLabel(): string | undefined | null {
    return this.input.educationLabel;
  }

  setEducationLabel(educationLabel: string | undefined): void {
    this.input.educationLabel = educationLabel;
  }

  getEducationDegreeLabel(): string | undefined | null {
    return this.input.educationDegreeLabel;
  }

  setEducationDegreeLabel(educationDegreeLabel: string | undefined): void {
    this.input.educationDegreeLabel = educationDegreeLabel;
  }

  getEducationInstituteLabel(): string | undefined | null {
    return this.input.educationInstituteLabel;
  }

  setEducationInstituteLabel(
    educationInstituteLabel: string | undefined
  ): void {
    this.input.educationInstituteLabel = educationInstituteLabel;
  }

  getEducationLocationLabel(): string | undefined | null {
    return this.input.educationLocationLabel;
  }

  setEducationLocationLabel(educationLocationLabel: string | undefined): void {
    this.input.educationLocationLabel = educationLocationLabel;
  }

  getEducationGpaLabel(): string | undefined | null {
    return this.input.educationGpaLabel;
  }

  setEducationGpaLabel(educationGpaLabel: string | undefined): void {
    this.input.educationGpaLabel = educationGpaLabel;
  }

  getEducations(): EducationModel[] {
    return (
      this.input.educations?.map(
        (education) => new EducationModel(education)
      ) || []
    );
  }

  setEducation(index: number, education: IEducation) {
    const educations = [...(this.input.educations || [])];
    educations[index] = education;
    this.input.educations = educations;
  }

  getIsShowCertification(): boolean | undefined | null {
    return this.input.isShowCertification;
  }

  setIsShowCertification(isShowCertification: boolean | undefined): void {
    this.input.isShowCertification = isShowCertification;
  }

  getCertificationLabel(): string | undefined | null {
    return this.input.certificationLabel;
  }

  setCertificationLabel(certificationLabel: string | undefined): void {
    this.input.certificationLabel = certificationLabel;
  }

  getCertificationNameLabel(): string | undefined | null {
    return this.input.certificationNameLabel;
  }

  setCertificationNameLabel(certificationNameLabel: string | undefined): void {
    this.input.certificationNameLabel = certificationNameLabel;
  }

  getCertificationInstituteLabel(): string | undefined | null {
    return this.input.certificationInstituteLabel;
  }

  setCertificationInstituteLabel(
    certificationInstituteLabel: string | undefined
  ): void {
    this.input.certificationInstituteLabel = certificationInstituteLabel;
  }

  getCertificationYearLabel(): string | undefined | null {
    return this.input.certificationYearLabel;
  }

  setCertificationYearLabel(certificationYearLabel: string | undefined): void {
    this.input.certificationYearLabel = certificationYearLabel;
  }

  getIsShowCourseWork(): boolean | undefined | null {
    return this.input.isShowCourseWork;
  }

  setIsShowCourseWork(isShowCourseWork: boolean | undefined): void {
    this.input.isShowCourseWork = isShowCourseWork;
  }

  getCourseWorkLabel(): string | undefined | null {
    return this.input.courseWorkLabel;
  }

  setCourseWorkLabel(courseWorkLabel: string | undefined): void {
    this.input.courseWorkLabel = courseWorkLabel;
  }

  getCourseWorkTitleLabel(): string | undefined | null {
    return this.input.courseWorkTitleLabel;
  }

  setCourseWorkTitleLabel(courseWorkTitleLabel: string | undefined): void {
    this.input.courseWorkTitleLabel = courseWorkTitleLabel;
  }

  getCourseWorkNameLabel(): string | undefined | null {
    return this.input.courseWorkNameLabel;
  }

  setCourseWorkNameLabel(courseWorkNameLabel: string | undefined): void {
    this.input.courseWorkNameLabel = courseWorkNameLabel;
  }
  getCourseWorkInstituteLabel(): string | undefined | null {
    return this.input.courseWorkInstituteLabel;
  }

  setCourseWorkInstituteLabel(
    courseWorkInstituteLabel: string | undefined
  ): void {
    this.input.courseWorkInstituteLabel = courseWorkInstituteLabel;
  }

  getCourseWorkYearLabel(): string | undefined | null {
    return this.input.courseWorkYearLabel;
  }

  setCourseWorkYearLabel(courseWorkYearLabel: string | undefined): void {
    this.input.courseWorkYearLabel = courseWorkYearLabel;
  }

  getCourseWorkSkillsLabel(): string | undefined | null {
    return this.input.courseWorkSkillsLabel;
  }

  setCourseWorkSkillsLabel(courseWorkSkillsLabel: string | undefined): void {
    this.input.courseWorkSkillsLabel = courseWorkSkillsLabel;
  }

  getIsShowInvolvement(): boolean | undefined | null {
    return this.input.isShowInvolvement;
  }
  setIsShowInvolvement(isShowInvolvement: boolean | undefined): void {
    this.input.isShowInvolvement = isShowInvolvement;
  }
  getInvolvementLabel(): string | undefined | null {
    return this.input.involvementLabel;
  }
  setInvolvementLabel(involvementLabel: string | undefined): void {
    this.input.involvementLabel = involvementLabel;
  }

  getInvolvementRoleLabel(): string | undefined | null {
    return this.input.involvementRoleLabel;
  }
  setInvolvementRoleLabel(involvementRoleLabel: string | undefined): void {
    this.input.involvementRoleLabel = involvementRoleLabel;
  }

  getInvolvementCompanyLabel(): string | undefined | null {
    return this.input.involvementCompanyLabel;
  }
  setInvolvementCompanyLabel(
    involvementCompanyLabel: string | undefined
  ): void {
    this.input.involvementCompanyLabel = involvementCompanyLabel;
  }

  getInvolvementLocationLabel(): string | undefined | null {
    return this.input.involvementLocationLabel;
  }
  setInvolvementLocationLabel(
    involvementLocationLabel: string | undefined
  ): void {
    this.input.involvementLocationLabel = involvementLocationLabel;
  }

  getIsShowSkill(): boolean | undefined | null {
    return this.input.isShowSkill;
  }
  setIsShowSkill(isShowSkill: boolean | undefined): void {
    this.input.isShowSkill = isShowSkill;
  }

  getSkillLabel(): string | undefined | null {
    return this.input.skillLabel;
  }

  getSkills(): SkillModel[] {
    return this.input.skills?.map((skill) => new SkillModel(skill)) || [];
  }

  setSkill(index: number, skill: ISkill) {
    const skills = [...(this.input.skills || [])];
    skills[index] = skill;
    this.input.skills = skills;
  }

  setSkillLabel(skillLabel: string | undefined): void {
    this.input.skillLabel = skillLabel;
  }

  getIsShowLanguage(): boolean | undefined | null {
    return this.input.isShowLanguage;
  }

  setIsShowLanguage(isShowLanguage: boolean | undefined): void {
    this.input.isShowLanguage = isShowLanguage;
  }
  getLanguageLabel(): string | undefined | null {
    return this.input.languageLabel;
  }

  setLanguageLabel(languageLabel: string | undefined): void {
    this.input.languageLabel = languageLabel;
  }

  getLanguageNameLabel(): string | undefined | null {
    return this.input.languageNameLabel;
  }

  setLanguageNameLabel(languageNameLabel: string | undefined): void {
    this.input.languageNameLabel = languageNameLabel;
  }

  getLanguageLevelLabel(): string | undefined | null {
    return this.input.languageLevelLabel;
  }
  setLanguageLevelLabel(languageLevelLabel: string | undefined): void {
    this.input.languageLevelLabel = languageLevelLabel;
  }

  setLanguages(languages: ILanguage[] | undefined): void {
    this.input.languages = languages;
  }

  getHobbyLabel(): string | undefined | null {
    return this.input.hobbyLabel;
  }

  setHobbyLabel(hobbyLabel: string | undefined): void {
    this.input.hobbyLabel = hobbyLabel;
  }

  getSummaryOrder(): number | undefined | null {
    return this.input.summaryOrder;
  }

  setSummaryOrder(order: number | undefined): void {
    this.input.summaryOrder = order;
  }

  getSectionByOrder(order: number): ResumeSectionType | undefined | null {
    if (order === this.getExperienceOrder()) {
      return "experience";
    } else if (order === this.getProjectOrder()) {
      return "project";
    } else if (order === this.getSummaryOrder()) {
      return "summary";
    } else if (order === this.getEducationOrder()) {
      return "education";
    } else if (order === this.getCertificationOrder()) {
      return "certification";
    } else if (order === this.getCourseWorkOrder()) {
      return "courseWork";
    } else if (order === this.getInvolvementOrder()) {
      return "involvement";
    } else if (order === this.getSkillOrder()) {
      return "skill";
    } else if (order === this.getLanguageOrder()) {
      return "language";
    } else if (order === this.getHobbyOrder()) {
      return "hobby";
    }

    return undefined;
  }

  setSectionOrder(section: ResumeSectionType, order: number): void {
    if (section === "experience") {
      this.setExperienceOrder(order);
    } else if (section === "project") {
      this.setProjectOrder(order);
    } else if (section === "summary") {
      this.setSummaryOrder(order);
    } else if (section === "education") {
      this.setEducationOrder(order);
    } else if (section === "certification") {
      this.setCertificationOrder(order);
    } else if (section === "courseWork") {
      this.setCourseWorkOrder(order);
    } else if (section === "involvement") {
      this.setInvolvementOrder(order);
    } else if (section === "skill") {
      this.setSkillOrder(order);
    } else if (section === "language") {
      this.setLanguageOrder(order);
    } else if (section === "hobby") {
      this.setHobbyOrder(order);
    }
  }

  getSectionOrder(section: ResumeSectionType): number | undefined | null {
    if (section === "experience") {
      return this.getExperienceOrder();
    } else if (section === "project") {
      return this.getProjectOrder();
    } else if (section === "summary") {
      return this.getSummaryOrder();
    } else if (section === "education") {
      return this.getEducationOrder();
    } else if (section === "certification") {
      return this.getCertificationOrder();
    } else if (section === "courseWork") {
      return this.getCourseWorkOrder();
    } else if (section === "involvement") {
      return this.getInvolvementOrder();
    } else if (section === "skill") {
      return this.getSkillOrder();
    } else if (section === "language") {
      return this.getLanguageOrder();
    } else if (section === "hobby") {
      return this.getHobbyOrder();
    }

    return undefined;
  }

  getSectionIsShow(section: ResumeSectionType): boolean {
    if (section === "experience") {
      return !!this.getIsShowExperience();
    } else if (section === "project") {
      return !!this.getIsShowProject();
    } else if (section === "summary") {
      return !!this.getIsShowSummary();
    } else if (section === "education") {
      return !!this.getIsShowEducation();
    } else if (section === "certification") {
      return !!this.getIsShowCertification();
    } else if (section === "courseWork") {
      return !!this.getIsShowCourseWork();
    } else if (section === "involvement") {
      return !!this.getIsShowInvolvement();
    } else if (section === "skill") {
      return !!this.getIsShowSkill();
    } else if (section === "language") {
      return !!this.getIsShowLanguage();
    } else if (section === "hobby") {
      return !!this.getIsShowHobby();
    }
    return false;
  }

  getUpperAndVisibleSection(
    section: ResumeSectionType
  ): ResumeSectionType | undefined | null {
    const order = this.getSectionOrder(section);

    if (!order || order <= 1) {
      return;
    }

    let output = order - 1;

    while (output >= 1) {
      const section = this.getSectionByOrder(output);
      const isShow = section && this.getSectionIsShow(section);

      if (isShow) {
        return section;
      }
      output--;
    }

    return undefined;
  }

  getLowerAndVisibleSection(
    section: ResumeSectionType
  ): ResumeSectionType | undefined | null {
    const order = this.getSectionOrder(section);

    if (!order || order >= 10) {
      return;
    }

    let output = order + 1;

    while (output <= 10) {
      const section = this.getSectionByOrder(output);
      const isShow = section && this.getSectionIsShow(section);

      if (isShow) {
        return section;
      }
      output++;
    }

    return undefined;
  }

  changeOrderOfTwoSections(
    section1: ResumeSectionType,
    section2: ResumeSectionType
  ) {
    const order1 = this.getSectionOrder(section1);
    const order2 = this.getSectionOrder(section2);

    if (!order1 || !order2) {
      return;
    }

    this.setSectionOrder(section1, order2);
    this.setSectionOrder(section2, order1);
  }

  getExperienceOrder(): number | undefined | null {
    return this.input.experienceOrder;
  }

  setExperienceOrder(order: number | undefined): void {
    this.input.experienceOrder = order;
  }

  getExperiences(): ExperienceModel[] {
    return (
      this.input.experiences?.map(
        (experience) => new ExperienceModel(experience)
      ) || []
    );
  }

  setExperience(index: number, experience: IExperience) {
    const experiences = [...(this.input.experiences || [])];
    experiences[index] = experience;
    this.input.experiences = experiences;
  }

  changeExperiencesIndex(index1: number, index2: number) {
    if (!this.input.experiences) {
      return;
    }
    const length = this.getExperiences()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.experiences[index1];
    const item2 = this.input.experiences[index2];

    this.input.experiences[index2] = item1;
    this.input.experiences[index1] = item2;
  }

  changeExperiencesPointIndex(
    experienceIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getExperiences()?.length || 0;
    if (experienceIndex >= length) {
      return;
    }

    const experience = this.getExperiences()[experienceIndex];
    experience.changePointsIndex(index1, index2);
  }

  getProjectOrder(): number | undefined | null {
    return this.input.projectOrder;
  }

  setProjectOrder(order: number | undefined): void {
    this.input.projectOrder = order;
  }

  getProjects(): ProjectModel[] {
    return (
      this.input.projects?.map((project) => new ProjectModel(project)) || []
    );
  }

  setProject(index: number, project: IProject) {
    const projects = [...(this.input.projects || [])];
    projects[index] = project;
    this.input.projects = projects;

    console.log(this.input.projects);
  }

  changeProjectsIndex(index1: number, index2: number) {
    if (!this.input.projects) {
      return;
    }
    const length = this.getProjects()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.projects[index1];
    const item2 = this.input.projects[index2];

    this.input.projects[index2] = item1;
    this.input.projects[index1] = item2;
  }

  changeProjectsPointIndex(
    projectIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getProjects()?.length || 0;
    if (projectIndex >= length) {
      return;
    }

    const project = this.getProjects()[projectIndex];
    project.changePointsIndex(index1, index2);
  }

  getEducationOrder(): number | undefined | null {
    return this.input.educationOrder;
  }

  setEducationOrder(order: number | undefined): void {
    this.input.educationOrder = order;
  }

  changeEducationsIndex(index1: number, index2: number) {
    if (!this.input.educations) {
      return;
    }
    const length = this.getEducations()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.educations[index1];
    const item2 = this.input.educations[index2];

    this.input.educations[index2] = item1;
    this.input.educations[index1] = item2;
  }

  changeEducationsPointIndex(
    educationIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getEducations()?.length || 0;
    if (educationIndex >= length) {
      return;
    }

    const education = this.getEducations()[educationIndex];
    education.changePointsIndex(index1, index2);
  }

  getCertificationOrder(): number | undefined | null {
    return this.input.certificationOrder;
  }
  setCertificationOrder(order: number | undefined): void {
    this.input.certificationOrder = order;
  }

  getCertifications(): CertificationModel[] {
    return (
      this.input.certifications?.map(
        (certification) => new CertificationModel(certification)
      ) || []
    );
  }

  setCertification(index: number, certification: ICertification) {
    const certifications = [...(this.input.certifications || [])];
    certifications[index] = certification;
    this.input.certifications = certifications;
  }

  changeCertificationsIndex(index1: number, index2: number) {
    if (!this.input.certifications) {
      return;
    }
    const length = this.getCertifications()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.certifications[index1];
    const item2 = this.input.certifications[index2];

    this.input.certifications[index2] = item1;
    this.input.certifications[index1] = item2;
  }

  changeCertificationsPointIndex(
    certificationIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getCertifications()?.length || 0;
    if (certificationIndex >= length) {
      return;
    }

    const certification = this.getCertifications()[certificationIndex];
    certification.changePointsIndex(index1, index2);
  }

  getCourseWorkOrder(): number | undefined | null {
    return this.input.courseWorkOrder;
  }
  setCourseWorkOrder(order: number | undefined): void {
    this.input.courseWorkOrder = order;
  }

  getCourseWorks(): CourseWorkModel[] {
    return (
      this.input.courseWorks?.map(
        (courseWork) => new CourseWorkModel(courseWork)
      ) || []
    );
  }

  setCourseWork(index: number, courseWork: ICourseWork) {
    const courseWorks = [...(this.input.courseWorks || [])];
    courseWorks[index] = courseWork;
    this.input.courseWorks = courseWorks;
  }

  changeCourseWorksIndex(index1: number, index2: number) {
    if (!this.input.courseWorks) {
      return;
    }
    const length = this.getCourseWorks()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.courseWorks[index1];
    const item2 = this.input.courseWorks[index2];

    this.input.courseWorks[index2] = item1;
    this.input.courseWorks[index1] = item2;
  }

  changeCourseWorksPointIndex(
    courseWorkIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getCourseWorks()?.length || 0;
    if (courseWorkIndex >= length) {
      return;
    }

    const courseWork = this.getCourseWorks()[courseWorkIndex];
    courseWork.changePointsIndex(index1, index2);
  }

  getInvolvementOrder(): number | undefined | null {
    return this.input.involvementOrder;
  }
  setInvolvementOrder(order: number | undefined): void {
    this.input.involvementOrder = order;
  }

  getInvolvements(): InvolvementModel[] {
    return (
      this.input.involvements?.map(
        (involvement) => new InvolvementModel(involvement)
      ) || []
    );
  }

  setInvolvement(index: number, involvement: IInvolvement) {
    const involvements = [...(this.input.involvements || [])];
    involvements[index] = involvement;
    this.input.involvements = involvements;
  }

  changeInvolvementsIndex(index1: number, index2: number) {
    if (!this.input.involvements) {
      return;
    }
    const length = this.getInvolvements()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.involvements[index1];
    const item2 = this.input.involvements[index2];

    this.input.involvements[index2] = item1;
    this.input.involvements[index1] = item2;
  }

  changeInvolvementsPointIndex(
    involvementIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getInvolvements()?.length || 0;
    if (involvementIndex >= length) {
      return;
    }

    const involvement = this.getInvolvements()[involvementIndex];
    involvement.changePointsIndex(index1, index2);
  }

  getSkillOrder(): number | undefined | null {
    return this.input.skillOrder;
  }

  setSkillOrder(order: number | undefined): void {
    this.input.skillOrder = order;
  }

  changeSkillsIndex(index1: number, index2: number) {
    if (!this.input.skills) {
      return;
    }
    const length = this.getSkills()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.skills[index1];
    const item2 = this.input.skills[index2];

    this.input.skills[index2] = item1;
    this.input.skills[index1] = item2;
  }

  getLanguageOrder(): number | undefined | null {
    return this.input.languageOrder;
  }
  setLanguageOrder(order: number | undefined): void {
    this.input.languageOrder = order;
  }

  getLanguages(): LanguageModel[] {
    return (
      this.input.languages?.map((language) => new LanguageModel(language)) || []
    );
  }

  setLanguage(index: number, language: ILanguage) {
    const languages = [...(this.input.languages || [])];
    languages[index] = language;
    this.input.languages = languages;
  }

  changeLanguagesIndex(index1: number, index2: number) {
    if (!this.input.languages) {
      return;
    }
    const length = this.getLanguages()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.languages[index1];
    const item2 = this.input.languages[index2];

    this.input.languages[index2] = item1;
    this.input.languages[index1] = item2;
  }

  getHobbyOrder(): number | undefined | null {
    return this.input.hobbyOrder;
  }
  setHobbyOrder(order: number | undefined): void {
    this.input.hobbyOrder = order;
  }

  getHobbies(): HobbyModel[] {
    return this.input.hobbies?.map((hobby) => new HobbyModel(hobby)) || [];
  }

  setHobby(index: number, hobby: IHobby) {
    const hobbies = [...(this.input.hobbies || [])];
    hobbies[index] = hobby;
    this.input.hobbies = hobbies;
  }

  changeHobbiesIndex(index1: number, index2: number) {
    if (!this.input.hobbies) {
      return;
    }
    const length = this.getHobbies()?.length || 0;

    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.hobbies[index1];
    const item2 = this.input.hobbies[index2];

    this.input.hobbies[index2] = item1;
    this.input.hobbies[index1] = item2;
  }

  getIsShowHobby(): boolean | undefined | null {
    return this.input.isShowHobby;
  }

  setIsShowHobby(isShowHobby: boolean | undefined) {
    this.input.isShowHobby = isShowHobby;
  }

  getCreatedAt(): Date | undefined | null {
    return this.input.createdAt;
  }
  getUpdatedAt(): Date | undefined | null {
    return this.input.updatedAt;
  }

  getPlainObject() {
    return {
      name: this.getName() || "",
      title: this.getTitle() || "",
      fontFamily: this.getFontFamily() || undefined,
      fontSize: this.getFontSize() || undefined,
      color: this.getColor() || undefined,
      role: this.getRole() || "",
      isShowImage: this.getIsShowImage() || false,
      isShowPhoneNumber: this.getIsShowPhoneNumber() || false,
      phoneNumber: this.getPhoneNumber() || "",
      isShowLinkedin: this.getIsShowLinkedin() || false,
      linkedin: this.getLinkedin() || "",
      isShowWebsite: this.getIsShowWebsite() || false,
      website: this.getWebsite() || "",
      isShowEmail: this.getIsShowEmail() || false,
      email: this.getEmail() || "",
      isShowLocation: this.getIsShowLocation() || false,
      location: this.getLocation() || "",
      isShowBirthDay: this.getIsShowBirthDay() || false,
      birthDay: this.getBirthDay() || "",
      isShowSummary: this.getIsShowSummary() || false,
      summaryOrder: this.getSummaryOrder() || undefined,
      summaryLabel: this.getSummaryLabel() || "",
      summary: this.getSummary() || "",
      isShowExperience: this.getIsShowExperience() || false,
      experienceOrder: this.getExperienceOrder() || undefined,
      experienceLabel: this.getExperienceLabel() || "",
      experienceRoleLabel: this.getExperienceRoleLabel() || "",
      experienceCompanyLabel: this.getExperienceCompanyLabel() || "",
      experienceLocationLabel: this.getExperienceLocationLabel() || "",
      experiences:
        this.getExperiences().map((experience) =>
          experience.getPlainObject()
        ) || [],
      isShowProject: this.getIsShowProject() || false,
      projectOrder: this.getProjectOrder() || undefined,
      projectLabel: this.getProjectLabel() || "",
      projectRoleLabel: this.getProjectRoleLabel() || "",
      projectTitleLabel: this.getProjectTitleLabel() || "",
      projectCompanyLabel: this.getProjectCompanyLabel() || "",
      projectLocationLabel: this.getProjectLocationLabel() || "",
      projectUrlLabel: this.getProjectUrlLabel() || "",
      projects:
        this.getProjects().map((project) => project.getPlainObject()) || [],
      isShowEducation: this.getIsShowEducation() || false,
      educationLabel: this.getEducationLabel() || "",
      educationOrder: this.getEducationOrder() || undefined,
      educationDegreeLabel: this.getEducationDegreeLabel() || "",
      educationInstituteLabel: this.getEducationInstituteLabel() || "",
      educationLocationLabel: this.getEducationLocationLabel() || "",
      educationGpaLabel: this.getEducationGpaLabel() || "",
      educations:
        this.getEducations().map((education) => education.getPlainObject()) ||
        [],
      isShowCertification: this.getIsShowCertification() || false,
      certificationOrder: this.getCertificationOrder() || undefined,
      certificationLabel: this.getCertificationLabel() || "",
      certificationNameLabel: this.getCertificationNameLabel() || "",
      certificationInstituteLabel: this.getCertificationInstituteLabel() || "",
      certificationYearLabel: this.getCertificationYearLabel() || "",
      certifications:
        this.getCertifications().map((certification) =>
          certification.getPlainObject()
        ) || [],
      isShowCourseWork: this.getIsShowCourseWork() || false,
      courseWorkLabel: this.getCourseWorkLabel() || "",
      courseWorkOrder: this.getCourseWorkOrder() || undefined,
      courseWorkTitleLabel: this.getCourseWorkTitleLabel() || "",
      courseWorkNameLabel: this.getCourseWorkNameLabel() || "",
      courseWorkInstituteLabel: this.getCourseWorkInstituteLabel() || "",
      courseWorkYearLabel: this.getCourseWorkYearLabel() || "",
      courseWorkSkillsLabel: this.getCourseWorkSkillsLabel() || "",
      courseWorks:
        this.getCourseWorks().map((courseWork) =>
          courseWork.getPlainObject()
        ) || [],
      isShowInvolvement: this.getIsShowInvolvement() || false,
      involvementLabel: this.getInvolvementLabel() || "",
      involvementOrder: this.getInvolvementOrder() || undefined,
      involvementRoleLabel: this.getInvolvementRoleLabel() || "",
      involvementCompanyLabel: this.getInvolvementCompanyLabel() || "",
      involvementLocationLabel: this.getInvolvementLocationLabel() || "",
      involvements:
        this.getInvolvements().map((involvement) =>
          involvement.getPlainObject()
        ) || [],
      isShowSkill: this.getIsShowSkill() || false,
      skillLabel: this.getSkillLabel() || "",
      skillOrder: this.getSkillOrder() || undefined,
      skills: this.getSkills().map((skill) => skill.getPlainObject()) || [],
      isShowLanguage: this.getIsShowLanguage() || false,
      languageOrder: this.getLanguageOrder() || undefined,
      languageLabel: this.getLanguageLabel() || "",
      languageNameLabel: this.getLanguageNameLabel() || "",
      languageLevelLabel: this.getLanguageLevelLabel() || "",
      languages:
        this.getLanguages().map((language) => language.getPlainObject()) || [],
      hobbyOrder: this.getHobbyOrder() || undefined,
      hobbyLabel: this.getHobbyLabel() || "",
      hobbies: this.getHobbies().map((hobby) => hobby.getPlainObject()) || [],
      isShowHobby: this.getIsShowHobby() || false,
    };
  }

  setHiddenSection(section: ResumeSectionType) {
    if (section === "summary") {
      this.setIsShowSummary(false);
    } else if (section === "education") {
      this.setIsShowEducation(false);
    } else if (section === "project") {
      this.setIsShowProject(false);
    } else if (section === "experience") {
      this.setIsShowExperience(false);
    } else if (section === "skill") {
      this.setIsShowSkill(false);
    } else if (section === "certification") {
      this.setIsShowCertification(false);
    } else if (section === "courseWork") {
      this.setIsShowCourseWork(false);
    } else if (section === "involvement") {
      this.setIsShowInvolvement(false);
    } else if (section === "language") {
      this.setIsShowLanguage(false);
    } else if (section === "hobby") {
      this.setIsShowHobby(false);
    }
  }

  setShowSection = (section: ResumeSectionType) => {
    if (section === "summary") {
      this.setIsShowSummary(true);
    } else if (section === "education") {
      this.setIsShowEducation(true);
    } else if (section === "project") {
      this.setIsShowProject(true);
    } else if (section === "experience") {
      this.setIsShowExperience(true);
    } else if (section === "skill") {
      this.setIsShowSkill(true);
    } else if (section === "certification") {
      this.setIsShowCertification(true);
    } else if (section === "courseWork") {
      this.setIsShowCourseWork(true);
    } else if (section === "involvement") {
      this.setIsShowInvolvement(true);
    } else if (section === "language") {
      this.setIsShowLanguage(true);
    } else if (section === "hobby") {
      this.setIsShowHobby(true);
    }
  };

  setMethod<M extends ResumeModelSetMethodsKeyType>(
    methodName: ResumeModelSetMethodsKeyType,
    ...args: Parameters<ResumeModel[M]>
  ): ReturnType<ResumeModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on ResumeModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<ResumeModel[M]>
      ) => ReturnType<ResumeModel[M]>
    )(...(args as Parameters<ResumeModel[M]>));
  }

  getMethod<M extends ResumeModelGetMethodsKeyType>(
    methodName: ResumeModelGetMethodsKeyType,
    ...args: Parameters<ResumeModel[M]>
  ): ReturnType<ResumeModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on ResumeModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<ResumeModel[M]>
      ) => ReturnType<ResumeModel[M]>
    )(...(args as Parameters<ResumeModel[M]>));
  }
}

export type ResumeModelSetMethodsKeyType =
  | "setName"
  | "setTitle"
  | "setFontSize"
  | "setFontFamily"
  | "setColor"
  | "setRole"
  | "setIsShowImage"
  | "setIsShowPhoneNumber"
  | "setPhoneNumber"
  | "setIsShowLinkedin"
  | "setLinkedin"
  | "setIsShowWebsite"
  | "setWebsite"
  | "setIsShowEmail"
  | "setEmail"
  | "setIsShowLocation"
  | "setLocation"
  | "setIsShowBirthDay"
  | "setBirthDay"
  | "setIsShowSummary"
  | "setSummaryLabel"
  | "setSummary"
  | "setIsShowExperience"
  | "setExperienceLabel"
  | "setExperienceRoleLabel"
  | "setExperienceCompanyLabel"
  | "setExperienceLocationLabel"
  | "setIsShowProject"
  | "setProjectLabel"
  | "setProjectRoleLabel"
  | "setProjectTitleLabel"
  | "setProjectCompanyLabel"
  | "setProjectLocationLabel"
  | "setProjectUrlLabel"
  | "setIsShowEducation"
  | "setEducationLabel"
  | "setEducationDegreeLabel"
  | "setEducationInstituteLabel"
  | "setEducationLocationLabel"
  | "setEducationGpaLabel"
  | "setIsShowCertification"
  | "setCertificationLabel"
  | "setCertificationNameLabel"
  | "setCertificationInstituteLabel"
  | "setCertificationYearLabel"
  | "setIsShowCourseWork"
  | "setCourseWorkLabel"
  | "setCourseWorkTitleLabel"
  | "setCourseWorkNameLabel"
  | "setCourseWorkInstituteLabel"
  | "setCourseWorkYearLabel"
  | "setCourseWorkSkillsLabel"
  | "setLanguageLabel"
  | "setIsShowInvolvement"
  | "setInvolvementLabel"
  | "setInvolvementRoleLabel"
  | "setSkillLabel"
  | "setHobbyLabel"
  | "getUpperAndVisibleSection"
  | "getLowerAndVisibleSection"
  | "setHiddenSection"
  | "setShowSection";

export type ResumeModelGetMethodsKeyType =
  | "getUpperAndVisibleSection"
  | "getLowerAndVisibleSection";
