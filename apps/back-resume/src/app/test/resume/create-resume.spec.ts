import { Resume } from "@@back-resume/app/models/resume.model";
import { CreateResumeResumeInputsGQL } from "@back-common/dto";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { faker } from "@faker-js/faker";
import gql from "graphql-tag";
import moment from "moment";
import request from "supertest-graphql";
import { IntegrationTestManager } from "../helper";
import { Model } from "mongoose";
import { CreateResumeResumeInputs } from "@dto";

describe("microservice:resume CreateResume", () => {
  const integrationTestManager = new IntegrationTestManager();
  let resumeModel: Model<Resume>;

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
    resumeModel = integrationTestManager.helperDB.DBservice.resumeModel;
  });

  afterEach(async () => {
    await integrationTestManager.afterEach();
  });

  beforeEach(async () => {
    await integrationTestManager.beforeEach();
  });

  afterAll(async () => {
    await integrationTestManager.afterAll();
  });

  it("creates a resume with valid inputs", async () => {
    const authHeader = generateAuthorizationHeader({});

    const CreateResumeResumeInputs: CreateResumeResumeInputs = {
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
      isShowPhoneNumber: faker.datatype.boolean(),
      phoneNumber: faker.phone.number(),
      isShowLinkedin: faker.datatype.boolean(),
      linkedin: faker.internet.url(),
      isShowWebsite: faker.datatype.boolean(),
      website: faker.internet.url(),
      isShowEmail: faker.datatype.boolean(),
      email: faker.internet.email(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.county() + " " + faker.location.city(),
      isShowBirthDay: faker.datatype.boolean(),
      birthDay: moment(faker.date.birthdate()).format("YYYY"),
      isShowSummary: faker.datatype.boolean(),
      summaryLabel: faker.lorem.word(),
      summary: faker.lorem.paragraph(),
      isShowExperience: faker.datatype.boolean(),
      experienceLabel: faker.lorem.word(),
      experienceRoleLabel: faker.lorem.word(),
      experienceCompanyLabel: faker.lorem.word(),
      experienceLocationLabel: faker.lorem.word(),
      experiences: [
        {
          role: faker.person.jobTitle(),
          company: faker.company.name(),
          isShowLocation: faker.datatype.boolean(),
          location: faker.location.country(),
          isShowDate: faker.datatype.boolean(),
          fromMonth: moment(faker.date.past()).format("MMMM"),
          fromYear: moment(faker.date.past()).format("YYYY"),
          toMonth: moment(faker.date.recent()).format("MMMM"),
          toYear: moment(faker.date.recent()).format("YYYY"),
          untilNow: faker.datatype.boolean(),
          points: [
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
          ],
        },
        {
          role: faker.person.jobTitle(),
          company: faker.company.name(),
          isShowLocation: faker.datatype.boolean(),
          location: faker.location.country(),
          isShowDate: faker.datatype.boolean(),
          fromMonth: moment(faker.date.past()).format("MMMM"),
          fromYear: moment(faker.date.past()).format("YYYY"),
          toMonth: moment(faker.date.recent()).format("MMMM"),
          toYear: moment(faker.date.recent()).format("YYYY"),
          untilNow: faker.datatype.boolean(),
          points: [
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
          ],
        },
      ],
      isShowProject: faker.datatype.boolean(),
      projectLabel: faker.lorem.word(),
      projectRoleLabel: faker.lorem.word(),
      projectTitleLabel: faker.lorem.word(),
      projectCompanyLabel: faker.lorem.word(),
      projectLocationLabel: faker.lorem.word(),
      projectUrlLabel: faker.lorem.word(),
      projects: [
        {
          title: faker.lorem.word(),
          isShowRole: faker.datatype.boolean(),
          role: faker.person.jobTitle(),
          isShowCompany: faker.datatype.boolean(),
          company: faker.company.name(),
          isShowLocation: faker.datatype.boolean(),
          location: faker.location.country(),
          isShowUrl: faker.datatype.boolean(),
          url: faker.internet.url(),
          isShowDate: faker.datatype.boolean(),
          fromMonth: moment(faker.date.past()).format("MMMM"),
          fromYear: moment(faker.date.past()).format("YYYY"),
          toMonth: moment(faker.date.recent()).format("MMMM"),
          toYear: moment(faker.date.recent()).format("YYYY"),
          untilNow: faker.datatype.boolean(),
          points: [
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
          ],
        },
      ],
      isShowEducation: faker.datatype.boolean(),
      educationLabel: faker.lorem.word(),
      educationDegreeLabel: faker.lorem.word(),
      educationInstituteLabel: faker.lorem.word(),
      educationLocationLabel: faker.lorem.word(),
      educationGpaLabel: faker.lorem.word(),
      educations: [
        {
          degree: faker.lorem.word(),
          isShowInstitute: faker.datatype.boolean(),
          institute: faker.company.name(),
          isShowLocation: faker.datatype.boolean(),
          location: faker.location.country(),
          isShowGpa: faker.datatype.boolean(),
          gpa: faker.number
            .float({ precision: 0.1, min: 0, max: 20 })
            .toString(),
          isShowDate: faker.datatype.boolean(),
          from: moment(faker.date.past()).format("YYYY MMMM"),
          to: moment(faker.date.recent()).format("YYYY MMMM"),
          untilNow: faker.datatype.boolean(),
          points: [
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
          ],
        },
      ],
      isShowCertification: faker.datatype.boolean(),
      certificationLabel: faker.lorem.word(),
      certificationNameLabel: faker.lorem.word(),
      certificationInstituteLabel: faker.lorem.word(),
      certificationYearLabel: faker.lorem.word(),
      certifications: [
        {
          name: faker.lorem.word(),
          isShowInstitute: faker.datatype.boolean(),
          institute: faker.company.name(),
          isShowDate: faker.datatype.boolean(),
          year: moment(faker.date.past()).format("YYYY"),
          points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
        },
      ],
      isShowCourseWork: faker.datatype.boolean(),
      courseWorkLabel: faker.lorem.word(),
      courseWorkTitleLabel: faker.lorem.word(),
      courseWorkNameLabel: faker.lorem.word(),
      courseWorkInstituteLabel: faker.lorem.word(),
      courseWorkYearLabel: faker.lorem.word(),
      courseWorkSkillsLabel: faker.lorem.word(),
      courseWorks: [
        {
          name: faker.lorem.word(),
          isShowInstitute: faker.datatype.boolean(),
          institute: faker.company.name(),
          isShowDate: faker.datatype.boolean(),
          year: moment(faker.date.past()).format("YYYY"),
          isShowSkills: faker.datatype.boolean(),
          skills: faker.lorem.words(10),
          points: [faker.lorem.paragraph()],
        },
      ],
      isShowInvolvement: faker.datatype.boolean(),
      involvementLabel: faker.lorem.word(),
      involvementRoleLabel: faker.lorem.word(),
      involvementCompanyLabel: faker.lorem.word(),
      involvementLocationLabel: faker.lorem.word(),
      involvements: [
        {
          role: faker.person.jobTitle(),
          isShowCompany: faker.datatype.boolean(),
          company: faker.company.name(),
          isShowLocation: faker.datatype.boolean(),
          location: faker.location.country(),
          isShowDate: faker.datatype.boolean(),
          fromMonth: moment(faker.date.past()).format("MMMM"),
          fromYear: moment(faker.date.past()).format("YYYY"),
          toMonth: moment(faker.date.recent()).format("MMMM"),
          toYear: moment(faker.date.recent()).format("YYYY"),
          untilNow: faker.datatype.boolean(),
          points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
        },
      ],
      isShowSkill: faker.datatype.boolean(),
      skillLabel: faker.lorem.word(),
      skills: [faker.lorem.paragraph(), faker.lorem.paragraph()],
      isShowLanguage: faker.datatype.boolean(),
      languageLabel: faker.lorem.word(),
      languageNameLabel: faker.lorem.word(),
      languageLevelLabel: faker.lorem.word(),
      languages: [
        {
          name: faker.lorem.word(),
          level: faker.lorem.word(),
          isShowLevel: faker.datatype.boolean(),
        },
      ],
      hobbyLabel: faker.lorem.word(),
      isShowHobby: faker.datatype.boolean(),
      hobbies: [faker.lorem.paragraph(), faker.lorem.paragraph()],
    };

    const { data } = await request<
      { createResume: Resume },
      { CreateResumeResumeInputs: CreateResumeResumeInputsGQL }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation ($CreateResumeResumeInputs: CreateResumeResumeInputsGQL!) {
            createResume(CreateResumeResumeInputs: $CreateResumeResumeInputs) {
              id
              name
              userId
            }
          }
        `
      )
      .variables({
        CreateResumeResumeInputs,
      })
      .expectNoErrors();

    const { id: resumeId } = data.createResume;
    const { id: userId } = authHeader.token;

    const resume = await resumeModel.findById(resumeId);

    console.log({ resume });

    expect(resume.id).toBe(resumeId);
    expect(resume.userId).toBe(userId);

    // i want to check all props of resume

    expect(CreateResumeResumeInputs.name).toBe(resume.name);
    expect(CreateResumeResumeInputs.role).toBe(resume.role);
    expect(CreateResumeResumeInputs.isShowPhoneNumber).toBe(
      resume.isShowPhoneNumber
    );
    expect(CreateResumeResumeInputs.phoneNumber).toBe(resume.phoneNumber);
    expect(CreateResumeResumeInputs.isShowLinkedin).toBe(resume.isShowLinkedin);
    expect(CreateResumeResumeInputs.linkedin).toBe(resume.linkedin);
    expect(CreateResumeResumeInputs.isShowWebsite).toBe(resume.isShowWebsite);
    expect(CreateResumeResumeInputs.website).toBe(resume.website);
    expect(CreateResumeResumeInputs.isShowEmail).toBe(resume.isShowEmail);
    expect(CreateResumeResumeInputs.email).toBe(resume.email);
    expect(CreateResumeResumeInputs.isShowLocation).toBe(resume.isShowLocation);
    expect(CreateResumeResumeInputs.location).toBe(resume.location);
    expect(CreateResumeResumeInputs.isShowBirthDay).toBe(resume.isShowBirthDay);
    expect(CreateResumeResumeInputs.birthDay).toBe(resume.birthDay);
    expect(CreateResumeResumeInputs.isShowSummary).toBe(resume.isShowSummary);
    expect(CreateResumeResumeInputs.summaryLabel).toBe(resume.summaryLabel);
    expect(CreateResumeResumeInputs.summary).toBe(resume.summary);
    expect(CreateResumeResumeInputs.isShowExperience).toBe(
      resume.isShowExperience
    );
    expect(CreateResumeResumeInputs.experienceLabel).toBe(
      resume.experienceLabel
    );
    expect(CreateResumeResumeInputs.experienceRoleLabel).toBe(
      resume.experienceRoleLabel
    );
    expect(CreateResumeResumeInputs.experienceCompanyLabel).toBe(
      resume.experienceCompanyLabel
    );
    expect(CreateResumeResumeInputs.experienceLocationLabel).toBe(
      resume.experienceLocationLabel
    );

    expect(CreateResumeResumeInputs.experiences).toHaveLength(
      resume.experiences.length
    );

    expect(CreateResumeResumeInputs.experiences).toHaveLength(
      resume.experiences.length
    );

    for (let i = 0; i < resume.experiences.length; i++) {
      expect(CreateResumeResumeInputs.experiences[i].role).toBe(
        resume.experiences[i].role
      );
      expect(CreateResumeResumeInputs.experiences[i].company).toBe(
        resume.experiences[i].company
      );
      expect(CreateResumeResumeInputs.experiences[i].isShowLocation).toBe(
        resume.experiences[i].isShowLocation
      );
      expect(CreateResumeResumeInputs.experiences[i].location).toBe(
        resume.experiences[i].location
      );
      expect(CreateResumeResumeInputs.experiences[i].isShowDate).toBe(
        resume.experiences[i].isShowDate
      );
      expect(CreateResumeResumeInputs.experiences[i].fromMonth).toBe(
        resume.experiences[i].fromMonth
      );
      expect(CreateResumeResumeInputs.experiences[i].fromYear).toBe(
        resume.experiences[i].fromYear
      );
      expect(CreateResumeResumeInputs.experiences[i].toMonth).toBe(
        resume.experiences[i].toMonth
      );
      expect(CreateResumeResumeInputs.experiences[i].toYear).toBe(
        resume.experiences[i].toYear
      );
      expect(CreateResumeResumeInputs.experiences[i].untilNow).toBe(
        resume.experiences[i].untilNow
      );

      expect(CreateResumeResumeInputs.experiences[i].points).toHaveLength(
        resume.experiences[i].points.length
      );

      for (
        let j = 0;
        j < CreateResumeResumeInputs.experiences[i].points.length;
        j++
      ) {
        expect(CreateResumeResumeInputs.experiences[i].points[j]).toBe(
          resume.experiences[i].points[j]
        );
      }
    }

    expect(CreateResumeResumeInputs.isShowProject).toBe(resume.isShowProject);
    expect(CreateResumeResumeInputs.projectLabel).toBe(resume.projectLabel);
    expect(CreateResumeResumeInputs.projectRoleLabel).toBe(
      resume.projectRoleLabel
    );
    expect(CreateResumeResumeInputs.projectTitleLabel).toBe(
      resume.projectTitleLabel
    );
    expect(CreateResumeResumeInputs.projectCompanyLabel).toBe(
      resume.projectCompanyLabel
    );
    expect(CreateResumeResumeInputs.projectLocationLabel).toBe(
      resume.projectLocationLabel
    );
    expect(CreateResumeResumeInputs.projectUrlLabel).toBe(
      resume.projectUrlLabel
    );
    expect(CreateResumeResumeInputs.projects).toHaveLength(
      resume.projects.length
    );

    for (let i = 0; i < resume.projects.length; i++) {
      expect(CreateResumeResumeInputs.projects[i].title).toBe(
        resume.projects[i].title
      );
      expect(CreateResumeResumeInputs.projects[i].isShowRole).toBe(
        resume.projects[i].isShowRole
      );
      expect(CreateResumeResumeInputs.projects[i].role).toBe(
        resume.projects[i].role
      );
      expect(CreateResumeResumeInputs.projects[i].isShowCompany).toBe(
        resume.projects[i].isShowCompany
      );
      expect(CreateResumeResumeInputs.projects[i].company).toBe(
        resume.projects[i].company
      );
      expect(CreateResumeResumeInputs.projects[i].isShowLocation).toBe(
        resume.projects[i].isShowLocation
      );
      expect(CreateResumeResumeInputs.projects[i].location).toBe(
        resume.projects[i].location
      );
      expect(CreateResumeResumeInputs.projects[i].isShowUrl).toBe(
        resume.projects[i].isShowUrl
      );
      expect(CreateResumeResumeInputs.projects[i].url).toBe(
        resume.projects[i].url
      );
      expect(CreateResumeResumeInputs.projects[i].isShowDate).toBe(
        resume.projects[i].isShowDate
      );
      expect(CreateResumeResumeInputs.projects[i].fromMonth).toBe(
        resume.projects[i].fromMonth
      );
      expect(CreateResumeResumeInputs.projects[i].fromYear).toBe(
        resume.projects[i].fromYear
      );
      expect(CreateResumeResumeInputs.projects[i].toMonth).toBe(
        resume.projects[i].toMonth
      );
      expect(CreateResumeResumeInputs.projects[i].toYear).toBe(
        resume.projects[i].toYear
      );
      expect(CreateResumeResumeInputs.projects[i].untilNow).toBe(
        resume.projects[i].untilNow
      );

      expect(CreateResumeResumeInputs.projects[i].points).toHaveLength(
        resume.projects[i].points.length
      );

      for (
        let j = 0;
        j < CreateResumeResumeInputs.projects[i].points.length;
        j++
      ) {
        expect(CreateResumeResumeInputs.projects[i].points[j]).toBe(
          resume.projects[i].points[j]
        );
      }
    }

    expect(CreateResumeResumeInputs.isShowEducation).toBe(
      resume.isShowEducation
    );

    expect(CreateResumeResumeInputs.educationLabel).toBe(resume.educationLabel);

    expect(CreateResumeResumeInputs.educationDegreeLabel).toBe(
      resume.educationDegreeLabel
    );

    expect(CreateResumeResumeInputs.educationInstituteLabel).toBe(
      resume.educationInstituteLabel
    );
    expect(CreateResumeResumeInputs.educationLocationLabel).toBe(
      resume.educationLocationLabel
    );
    expect(CreateResumeResumeInputs.educationGpaLabel).toBe(
      resume.educationGpaLabel
    );

    expect(CreateResumeResumeInputs.educations).toHaveLength(
      resume.educations.length
    );

    for (let i = 0; i < resume.educations.length; i++) {
      expect(CreateResumeResumeInputs.educations[i].degree).toBe(
        resume.educations[i].degree
      );
      expect(CreateResumeResumeInputs.educations[i].isShowInstitute).toBe(
        resume.educations[i].isShowInstitute
      );
      expect(CreateResumeResumeInputs.educations[i].institute).toBe(
        resume.educations[i].institute
      );
      expect(CreateResumeResumeInputs.educations[i].isShowLocation).toBe(
        resume.educations[i].isShowLocation
      );
      expect(CreateResumeResumeInputs.educations[i].location).toBe(
        resume.educations[i].location
      );
      expect(CreateResumeResumeInputs.educations[i].isShowGpa).toBe(
        resume.educations[i].isShowGpa
      );
      expect(CreateResumeResumeInputs.educations[i].gpa).toBe(
        resume.educations[i].gpa
      );
      expect(CreateResumeResumeInputs.educations[i].isShowDate).toBe(
        resume.educations[i].isShowDate
      );
      expect(CreateResumeResumeInputs.educations[i].from).toBe(
        resume.educations[i].from
      );
      expect(CreateResumeResumeInputs.educations[i].to).toBe(
        resume.educations[i].to
      );
      expect(CreateResumeResumeInputs.educations[i].untilNow).toBe(
        resume.educations[i].untilNow
      );

      expect(CreateResumeResumeInputs.educations[i].points).toHaveLength(
        resume.educations[i].points.length
      );

      for (
        let j = 0;
        j < CreateResumeResumeInputs.educations[i].points.length;
        j++
      ) {
        expect(CreateResumeResumeInputs.educations[i].points[j]).toBe(
          resume.educations[i].points[j]
        );
      }
    }

    expect(CreateResumeResumeInputs.isShowCertification).toBe(
      resume.isShowCertification
    );
    expect(CreateResumeResumeInputs.certificationLabel).toBe(
      resume.certificationLabel
    );
    expect(CreateResumeResumeInputs.certificationNameLabel).toBe(
      resume.certificationNameLabel
    );

    expect(CreateResumeResumeInputs.certificationInstituteLabel).toBe(
      resume.certificationInstituteLabel
    );
    expect(CreateResumeResumeInputs.certificationYearLabel).toBe(
      resume.certificationYearLabel
    );

    expect(CreateResumeResumeInputs.certifications).toHaveLength(
      resume.certifications.length
    );

    for (let i = 0; i < resume.certifications.length; i++) {
      expect(CreateResumeResumeInputs.certifications[i].name).toBe(
        resume.certifications[i].name
      );
      expect(CreateResumeResumeInputs.certifications[i].isShowInstitute).toBe(
        resume.certifications[i].isShowInstitute
      );
      expect(CreateResumeResumeInputs.certifications[i].institute).toBe(
        resume.certifications[i].institute
      );
      expect(CreateResumeResumeInputs.certifications[i].isShowDate).toBe(
        resume.certifications[i].isShowDate
      );
      expect(CreateResumeResumeInputs.certifications[i].year).toBe(
        resume.certifications[i].year
      );

      expect(CreateResumeResumeInputs.certifications[i].points).toHaveLength(
        resume.certifications[i].points.length
      );

      for (
        let j = 0;
        j < CreateResumeResumeInputs.certifications[i].points.length;
        j++
      ) {
        expect(CreateResumeResumeInputs.certifications[i].points[j]).toBe(
          resume.certifications[i].points[j]
        );
      }
    }

    expect(CreateResumeResumeInputs.isShowCourseWork).toBe(
      resume.isShowCourseWork
    );

    expect(CreateResumeResumeInputs.courseWorkLabel).toBe(
      resume.courseWorkLabel
    );
    expect(CreateResumeResumeInputs.courseWorkTitleLabel).toBe(
      resume.courseWorkTitleLabel
    );
    expect(CreateResumeResumeInputs.courseWorkNameLabel).toBe(
      resume.courseWorkNameLabel
    );

    expect(CreateResumeResumeInputs.courseWorkInstituteLabel).toBe(
      resume.courseWorkInstituteLabel
    );

    expect(CreateResumeResumeInputs.courseWorkYearLabel).toBe(
      resume.courseWorkYearLabel
    );
    expect(CreateResumeResumeInputs.courseWorkSkillsLabel).toBe(
      resume.courseWorkSkillsLabel
    );

    expect(CreateResumeResumeInputs.courseWorks).toHaveLength(
      resume.courseWorks.length
    );

    for (let i = 0; i < resume.courseWorks.length; i++) {
      expect(CreateResumeResumeInputs.courseWorks[i].name).toBe(
        resume.courseWorks[i].name
      );
      expect(CreateResumeResumeInputs.courseWorks[i].isShowInstitute).toBe(
        resume.courseWorks[i].isShowInstitute
      );
      expect(CreateResumeResumeInputs.courseWorks[i].institute).toBe(
        resume.courseWorks[i].institute
      );
      expect(CreateResumeResumeInputs.courseWorks[i].isShowDate).toBe(
        resume.courseWorks[i].isShowDate
      );
      expect(CreateResumeResumeInputs.courseWorks[i].isShowSkills).toBe(
        resume.courseWorks[i].isShowSkills
      );
      expect(CreateResumeResumeInputs.courseWorks[i].year).toBe(
        resume.courseWorks[i].year
      );

      expect(CreateResumeResumeInputs.courseWorks[i].points).toHaveLength(
        resume.courseWorks[i].points.length
      );

      for (
        let j = 0;
        j < CreateResumeResumeInputs.courseWorks[i].points.length;
        j++
      ) {
        expect(CreateResumeResumeInputs.courseWorks[i].points[j]).toBe(
          resume.courseWorks[i].points[j]
        );
      }
    }

    expect(CreateResumeResumeInputs.isShowInvolvement).toBe(
      resume.isShowInvolvement
    );
    expect(CreateResumeResumeInputs.involvementLabel).toBe(
      resume.involvementLabel
    );
    expect(CreateResumeResumeInputs.involvementRoleLabel).toBe(
      resume.involvementRoleLabel
    );
    expect(CreateResumeResumeInputs.involvementCompanyLabel).toBe(
      resume.involvementCompanyLabel
    );
    expect(CreateResumeResumeInputs.involvementLocationLabel).toBe(
      resume.involvementLocationLabel
    );

    expect(CreateResumeResumeInputs.involvements).toHaveLength(
      resume.involvements.length
    );

    for (let i = 0; i < resume.involvements.length; i++) {
      expect(CreateResumeResumeInputs.involvements[i].role).toBe(
        resume.involvements[i].role
      );
      expect(CreateResumeResumeInputs.involvements[i].isShowCompany).toBe(
        resume.involvements[i].isShowCompany
      );
      expect(CreateResumeResumeInputs.involvements[i].company).toBe(
        resume.involvements[i].company
      );
      expect(CreateResumeResumeInputs.involvements[i].isShowDate).toBe(
        resume.involvements[i].isShowDate
      );
      expect(CreateResumeResumeInputs.involvements[i].isShowLocation).toBe(
        resume.involvements[i].isShowLocation
      );
      expect(CreateResumeResumeInputs.involvements[i].location).toBe(
        resume.involvements[i].location
      );
      expect(CreateResumeResumeInputs.involvements[i].isShowDate).toBe(
        resume.involvements[i].isShowDate
      );
      expect(CreateResumeResumeInputs.involvements[i].fromMonth).toBe(
        resume.involvements[i].fromMonth
      );
      expect(CreateResumeResumeInputs.involvements[i].fromYear).toBe(
        resume.involvements[i].fromYear
      );
      expect(CreateResumeResumeInputs.involvements[i].toMonth).toBe(
        resume.involvements[i].toMonth
      );
      expect(CreateResumeResumeInputs.involvements[i].toYear).toBe(
        resume.involvements[i].toYear
      );
      expect(CreateResumeResumeInputs.involvements[i].untilNow).toBe(
        resume.involvements[i].untilNow
      );

      expect(CreateResumeResumeInputs.involvements[i].points).toHaveLength(
        resume.involvements[i].points.length
      );

      for (
        let j = 0;
        j < CreateResumeResumeInputs.involvements[i].points.length;
        j++
      ) {
        expect(CreateResumeResumeInputs.involvements[i].points[j]).toBe(
          resume.involvements[i].points[j]
        );
      }
    }
    expect(CreateResumeResumeInputs.isShowSkill).toBe(resume.isShowSkill);
    expect(CreateResumeResumeInputs.involvementLabel).toBe(
      resume.involvementLabel
    );
    expect(CreateResumeResumeInputs.skillLabel).toBe(resume.skillLabel);

    expect(CreateResumeResumeInputs.skills).toHaveLength(resume.skills.length);

    expect(CreateResumeResumeInputs.skills).toHaveLength(resume.skills.length);

    for (let i = 0; i < resume.skills.length; i++) {
      expect(CreateResumeResumeInputs.skills[i]).toBe(resume.skills[i]);
    }

    expect(CreateResumeResumeInputs.isShowLanguage).toBe(resume.isShowLanguage);
    expect(CreateResumeResumeInputs.languageLabel).toBe(resume.languageLabel);
    expect(CreateResumeResumeInputs.languageNameLabel).toBe(
      resume.languageNameLabel
    );
    expect(CreateResumeResumeInputs.languageLevelLabel).toBe(
      resume.languageLevelLabel
    );

    expect(CreateResumeResumeInputs.languages).toHaveLength(
      resume.languages.length
    );

    for (let i = 0; i < resume.languages.length; i++) {
      expect(CreateResumeResumeInputs.languages[i].name).toBe(
        resume.languages[i].name
      );
      expect(CreateResumeResumeInputs.languages[i].level).toBe(
        resume.languages[i].level
      );
      expect(CreateResumeResumeInputs.languages[i].isShowLevel).toBe(
        resume.languages[i].isShowLevel
      );
    }

    expect(CreateResumeResumeInputs.hobbyLabel).toBe(resume.hobbyLabel);
    expect(CreateResumeResumeInputs.isShowHobby).toBe(resume.isShowHobby);

    expect(CreateResumeResumeInputs.hobbies).toHaveLength(
      resume.hobbies.length
    );

    for (let i = 0; i < resume.hobbies.length; i++) {
      expect(CreateResumeResumeInputs.hobbies[i]).toBe(resume.hobbies[i]);
    }
  });
});
