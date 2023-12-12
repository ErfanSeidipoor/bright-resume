import { Resume } from "@@back-resume/app/models/resume.model";
import { CreateResumeResumeInputsGQL } from "@back-common/dto";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { faker } from "@faker-js/faker";
import gql from "graphql-tag";
import moment from "moment";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";
import { CreateResumeResumeInputs } from "@dto";
import { A_RESUME_WITH_THE_GIVEN_NAME_ALREADY_EXISTS } from "@bright-resume/errors";

describe("microservice:resume CreateResume", () => {
  const integrationTestManager = new IntegrationTestManager();
  let helperDB: HelperDB;

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
    helperDB = integrationTestManager.helperDB;
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

  it("should return 400 if a user tries to create a resume with a duplicate name", async () => {
    const authHeader = generateAuthorizationHeader({});

    const resume = await helperDB.createResume({ userId: authHeader.token.id });

    const createResumeResumeInputs: CreateResumeResumeInputs = {
      name: resume.name,
    };

    const { errors } = await request<
      { createResume: Resume },
      { createResumeResumeInputs: CreateResumeResumeInputsGQL }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation ($createResumeResumeInputs: CreateResumeResumeInputsGQL!) {
            createResume(createResumeResumeInputs: $createResumeResumeInputs) {
              id
              name
              userId
            }
          }
        `
      )
      .variables({
        createResumeResumeInputs,
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(
      A_RESUME_WITH_THE_GIVEN_NAME_ALREADY_EXISTS.description
    );
  });

  it("creates a resume with valid inputs", async () => {
    const authHeader = generateAuthorizationHeader({});

    const createResumeResumeInputs: CreateResumeResumeInputs = {
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
      { createResumeResumeInputs: CreateResumeResumeInputsGQL }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation ($createResumeResumeInputs: CreateResumeResumeInputsGQL!) {
            createResume(createResumeResumeInputs: $createResumeResumeInputs) {
              id
              name
              userId
            }
          }
        `
      )
      .variables({
        createResumeResumeInputs,
      })
      .expectNoErrors();

    const { id: resumeId } = data.createResume;
    const { id: userId } = authHeader.token;

    const resume = await helperDB.dbService.resumeModel.findById(resumeId);

    expect(resume.id).toBe(resumeId);
    expect(resume.userId).toBe(userId);

    // i want to check all propes

    expect(createResumeResumeInputs.name).toBe(resume.name);

    expect(createResumeResumeInputs.role).toBe(resume.role);
    expect(createResumeResumeInputs.isShowPhoneNumber).toBe(
      resume.isShowPhoneNumber
    );
    expect(createResumeResumeInputs.phoneNumber).toBe(resume.phoneNumber);
    expect(createResumeResumeInputs.isShowLinkedin).toBe(resume.isShowLinkedin);
    expect(createResumeResumeInputs.linkedin).toBe(resume.linkedin);
    expect(createResumeResumeInputs.isShowWebsite).toBe(resume.isShowWebsite);
    expect(createResumeResumeInputs.website).toBe(resume.website);
    expect(createResumeResumeInputs.isShowEmail).toBe(resume.isShowEmail);
    expect(createResumeResumeInputs.email).toBe(resume.email);
    expect(createResumeResumeInputs.isShowLocation).toBe(resume.isShowLocation);
    expect(createResumeResumeInputs.location).toBe(resume.location);
    expect(createResumeResumeInputs.isShowBirthDay).toBe(resume.isShowBirthDay);
    expect(createResumeResumeInputs.birthDay).toBe(resume.birthDay);
    expect(createResumeResumeInputs.isShowSummary).toBe(resume.isShowSummary);
    expect(createResumeResumeInputs.summaryLabel).toBe(resume.summaryLabel);
    expect(createResumeResumeInputs.summary).toBe(resume.summary);
    expect(createResumeResumeInputs.isShowExperience).toBe(
      resume.isShowExperience
    );
    expect(createResumeResumeInputs.experienceLabel).toBe(
      resume.experienceLabel
    );
    expect(createResumeResumeInputs.experienceRoleLabel).toBe(
      resume.experienceRoleLabel
    );
    expect(createResumeResumeInputs.experienceCompanyLabel).toBe(
      resume.experienceCompanyLabel
    );
    expect(createResumeResumeInputs.experienceLocationLabel).toBe(
      resume.experienceLocationLabel
    );

    expect(createResumeResumeInputs.experiences).toHaveLength(
      resume.experiences.length
    );

    expect(createResumeResumeInputs.experiences).toHaveLength(
      resume.experiences.length
    );

    for (let i = 0; i < resume.experiences.length; i++) {
      expect(createResumeResumeInputs.experiences[i].role).toBe(
        resume.experiences[i].role
      );
      expect(createResumeResumeInputs.experiences[i].company).toBe(
        resume.experiences[i].company
      );
      expect(createResumeResumeInputs.experiences[i].isShowLocation).toBe(
        resume.experiences[i].isShowLocation
      );
      expect(createResumeResumeInputs.experiences[i].location).toBe(
        resume.experiences[i].location
      );
      expect(createResumeResumeInputs.experiences[i].isShowDate).toBe(
        resume.experiences[i].isShowDate
      );
      expect(createResumeResumeInputs.experiences[i].fromMonth).toBe(
        resume.experiences[i].fromMonth
      );
      expect(createResumeResumeInputs.experiences[i].fromYear).toBe(
        resume.experiences[i].fromYear
      );
      expect(createResumeResumeInputs.experiences[i].toMonth).toBe(
        resume.experiences[i].toMonth
      );
      expect(createResumeResumeInputs.experiences[i].toYear).toBe(
        resume.experiences[i].toYear
      );
      expect(createResumeResumeInputs.experiences[i].untilNow).toBe(
        resume.experiences[i].untilNow
      );

      expect(createResumeResumeInputs.experiences[i].points).toHaveLength(
        resume.experiences[i].points.length
      );

      for (
        let j = 0;
        j < createResumeResumeInputs.experiences[i].points.length;
        j++
      ) {
        expect(createResumeResumeInputs.experiences[i].points[j]).toBe(
          resume.experiences[i].points[j]
        );
      }
    }

    expect(createResumeResumeInputs.isShowProject).toBe(resume.isShowProject);
    expect(createResumeResumeInputs.projectLabel).toBe(resume.projectLabel);
    expect(createResumeResumeInputs.projectRoleLabel).toBe(
      resume.projectRoleLabel
    );
    expect(createResumeResumeInputs.projectTitleLabel).toBe(
      resume.projectTitleLabel
    );
    expect(createResumeResumeInputs.projectCompanyLabel).toBe(
      resume.projectCompanyLabel
    );
    expect(createResumeResumeInputs.projectLocationLabel).toBe(
      resume.projectLocationLabel
    );
    expect(createResumeResumeInputs.projectUrlLabel).toBe(
      resume.projectUrlLabel
    );
    expect(createResumeResumeInputs.projects).toHaveLength(
      resume.projects.length
    );

    for (let i = 0; i < resume.projects.length; i++) {
      expect(createResumeResumeInputs.projects[i].title).toBe(
        resume.projects[i].title
      );
      expect(createResumeResumeInputs.projects[i].isShowRole).toBe(
        resume.projects[i].isShowRole
      );
      expect(createResumeResumeInputs.projects[i].role).toBe(
        resume.projects[i].role
      );
      expect(createResumeResumeInputs.projects[i].isShowCompany).toBe(
        resume.projects[i].isShowCompany
      );
      expect(createResumeResumeInputs.projects[i].company).toBe(
        resume.projects[i].company
      );
      expect(createResumeResumeInputs.projects[i].isShowLocation).toBe(
        resume.projects[i].isShowLocation
      );
      expect(createResumeResumeInputs.projects[i].location).toBe(
        resume.projects[i].location
      );
      expect(createResumeResumeInputs.projects[i].isShowUrl).toBe(
        resume.projects[i].isShowUrl
      );
      expect(createResumeResumeInputs.projects[i].url).toBe(
        resume.projects[i].url
      );
      expect(createResumeResumeInputs.projects[i].isShowDate).toBe(
        resume.projects[i].isShowDate
      );
      expect(createResumeResumeInputs.projects[i].fromMonth).toBe(
        resume.projects[i].fromMonth
      );
      expect(createResumeResumeInputs.projects[i].fromYear).toBe(
        resume.projects[i].fromYear
      );
      expect(createResumeResumeInputs.projects[i].toMonth).toBe(
        resume.projects[i].toMonth
      );
      expect(createResumeResumeInputs.projects[i].toYear).toBe(
        resume.projects[i].toYear
      );
      expect(createResumeResumeInputs.projects[i].untilNow).toBe(
        resume.projects[i].untilNow
      );

      expect(createResumeResumeInputs.projects[i].points).toHaveLength(
        resume.projects[i].points.length
      );

      for (
        let j = 0;
        j < createResumeResumeInputs.projects[i].points.length;
        j++
      ) {
        expect(createResumeResumeInputs.projects[i].points[j]).toBe(
          resume.projects[i].points[j]
        );
      }
    }

    expect(createResumeResumeInputs.isShowEducation).toBe(
      resume.isShowEducation
    );

    expect(createResumeResumeInputs.educationLabel).toBe(resume.educationLabel);

    expect(createResumeResumeInputs.educationDegreeLabel).toBe(
      resume.educationDegreeLabel
    );

    expect(createResumeResumeInputs.educationInstituteLabel).toBe(
      resume.educationInstituteLabel
    );
    expect(createResumeResumeInputs.educationLocationLabel).toBe(
      resume.educationLocationLabel
    );
    expect(createResumeResumeInputs.educationGpaLabel).toBe(
      resume.educationGpaLabel
    );

    expect(createResumeResumeInputs.educations).toHaveLength(
      resume.educations.length
    );

    for (let i = 0; i < resume.educations.length; i++) {
      expect(createResumeResumeInputs.educations[i].degree).toBe(
        resume.educations[i].degree
      );
      expect(createResumeResumeInputs.educations[i].isShowInstitute).toBe(
        resume.educations[i].isShowInstitute
      );
      expect(createResumeResumeInputs.educations[i].institute).toBe(
        resume.educations[i].institute
      );
      expect(createResumeResumeInputs.educations[i].isShowLocation).toBe(
        resume.educations[i].isShowLocation
      );
      expect(createResumeResumeInputs.educations[i].location).toBe(
        resume.educations[i].location
      );
      expect(createResumeResumeInputs.educations[i].isShowGpa).toBe(
        resume.educations[i].isShowGpa
      );
      expect(createResumeResumeInputs.educations[i].gpa).toBe(
        resume.educations[i].gpa
      );
      expect(createResumeResumeInputs.educations[i].isShowDate).toBe(
        resume.educations[i].isShowDate
      );
      expect(createResumeResumeInputs.educations[i].from).toBe(
        resume.educations[i].from
      );
      expect(createResumeResumeInputs.educations[i].to).toBe(
        resume.educations[i].to
      );
      expect(createResumeResumeInputs.educations[i].untilNow).toBe(
        resume.educations[i].untilNow
      );

      expect(createResumeResumeInputs.educations[i].points).toHaveLength(
        resume.educations[i].points.length
      );

      for (
        let j = 0;
        j < createResumeResumeInputs.educations[i].points.length;
        j++
      ) {
        expect(createResumeResumeInputs.educations[i].points[j]).toBe(
          resume.educations[i].points[j]
        );
      }
    }

    expect(createResumeResumeInputs.isShowCertification).toBe(
      resume.isShowCertification
    );
    expect(createResumeResumeInputs.certificationLabel).toBe(
      resume.certificationLabel
    );
    expect(createResumeResumeInputs.certificationNameLabel).toBe(
      resume.certificationNameLabel
    );

    expect(createResumeResumeInputs.certificationInstituteLabel).toBe(
      resume.certificationInstituteLabel
    );
    expect(createResumeResumeInputs.certificationYearLabel).toBe(
      resume.certificationYearLabel
    );

    expect(createResumeResumeInputs.certifications).toHaveLength(
      resume.certifications.length
    );

    for (let i = 0; i < resume.certifications.length; i++) {
      expect(createResumeResumeInputs.certifications[i].name).toBe(
        resume.certifications[i].name
      );
      expect(createResumeResumeInputs.certifications[i].isShowInstitute).toBe(
        resume.certifications[i].isShowInstitute
      );
      expect(createResumeResumeInputs.certifications[i].institute).toBe(
        resume.certifications[i].institute
      );
      expect(createResumeResumeInputs.certifications[i].isShowDate).toBe(
        resume.certifications[i].isShowDate
      );
      expect(createResumeResumeInputs.certifications[i].year).toBe(
        resume.certifications[i].year
      );

      expect(createResumeResumeInputs.certifications[i].points).toHaveLength(
        resume.certifications[i].points.length
      );

      for (
        let j = 0;
        j < createResumeResumeInputs.certifications[i].points.length;
        j++
      ) {
        expect(createResumeResumeInputs.certifications[i].points[j]).toBe(
          resume.certifications[i].points[j]
        );
      }
    }

    expect(createResumeResumeInputs.isShowCourseWork).toBe(
      resume.isShowCourseWork
    );

    expect(createResumeResumeInputs.courseWorkLabel).toBe(
      resume.courseWorkLabel
    );
    expect(createResumeResumeInputs.courseWorkTitleLabel).toBe(
      resume.courseWorkTitleLabel
    );
    expect(createResumeResumeInputs.courseWorkNameLabel).toBe(
      resume.courseWorkNameLabel
    );

    expect(createResumeResumeInputs.courseWorkInstituteLabel).toBe(
      resume.courseWorkInstituteLabel
    );

    expect(createResumeResumeInputs.courseWorkYearLabel).toBe(
      resume.courseWorkYearLabel
    );
    expect(createResumeResumeInputs.courseWorkSkillsLabel).toBe(
      resume.courseWorkSkillsLabel
    );

    expect(createResumeResumeInputs.courseWorks).toHaveLength(
      resume.courseWorks.length
    );

    for (let i = 0; i < resume.courseWorks.length; i++) {
      expect(createResumeResumeInputs.courseWorks[i].name).toBe(
        resume.courseWorks[i].name
      );
      expect(createResumeResumeInputs.courseWorks[i].isShowInstitute).toBe(
        resume.courseWorks[i].isShowInstitute
      );
      expect(createResumeResumeInputs.courseWorks[i].institute).toBe(
        resume.courseWorks[i].institute
      );
      expect(createResumeResumeInputs.courseWorks[i].isShowDate).toBe(
        resume.courseWorks[i].isShowDate
      );
      expect(createResumeResumeInputs.courseWorks[i].isShowSkills).toBe(
        resume.courseWorks[i].isShowSkills
      );
      expect(createResumeResumeInputs.courseWorks[i].year).toBe(
        resume.courseWorks[i].year
      );

      expect(createResumeResumeInputs.courseWorks[i].points).toHaveLength(
        resume.courseWorks[i].points.length
      );

      for (
        let j = 0;
        j < createResumeResumeInputs.courseWorks[i].points.length;
        j++
      ) {
        expect(createResumeResumeInputs.courseWorks[i].points[j]).toBe(
          resume.courseWorks[i].points[j]
        );
      }
    }

    expect(createResumeResumeInputs.isShowInvolvement).toBe(
      resume.isShowInvolvement
    );
    expect(createResumeResumeInputs.involvementLabel).toBe(
      resume.involvementLabel
    );
    expect(createResumeResumeInputs.involvementRoleLabel).toBe(
      resume.involvementRoleLabel
    );
    expect(createResumeResumeInputs.involvementCompanyLabel).toBe(
      resume.involvementCompanyLabel
    );
    expect(createResumeResumeInputs.involvementLocationLabel).toBe(
      resume.involvementLocationLabel
    );

    expect(createResumeResumeInputs.involvements).toHaveLength(
      resume.involvements.length
    );

    for (let i = 0; i < resume.involvements.length; i++) {
      expect(createResumeResumeInputs.involvements[i].role).toBe(
        resume.involvements[i].role
      );
      expect(createResumeResumeInputs.involvements[i].isShowCompany).toBe(
        resume.involvements[i].isShowCompany
      );
      expect(createResumeResumeInputs.involvements[i].company).toBe(
        resume.involvements[i].company
      );
      expect(createResumeResumeInputs.involvements[i].isShowDate).toBe(
        resume.involvements[i].isShowDate
      );
      expect(createResumeResumeInputs.involvements[i].isShowLocation).toBe(
        resume.involvements[i].isShowLocation
      );
      expect(createResumeResumeInputs.involvements[i].location).toBe(
        resume.involvements[i].location
      );
      expect(createResumeResumeInputs.involvements[i].isShowDate).toBe(
        resume.involvements[i].isShowDate
      );
      expect(createResumeResumeInputs.involvements[i].fromMonth).toBe(
        resume.involvements[i].fromMonth
      );
      expect(createResumeResumeInputs.involvements[i].fromYear).toBe(
        resume.involvements[i].fromYear
      );
      expect(createResumeResumeInputs.involvements[i].toMonth).toBe(
        resume.involvements[i].toMonth
      );
      expect(createResumeResumeInputs.involvements[i].toYear).toBe(
        resume.involvements[i].toYear
      );
      expect(createResumeResumeInputs.involvements[i].untilNow).toBe(
        resume.involvements[i].untilNow
      );

      expect(createResumeResumeInputs.involvements[i].points).toHaveLength(
        resume.involvements[i].points.length
      );

      for (
        let j = 0;
        j < createResumeResumeInputs.involvements[i].points.length;
        j++
      ) {
        expect(createResumeResumeInputs.involvements[i].points[j]).toBe(
          resume.involvements[i].points[j]
        );
      }
    }
    expect(createResumeResumeInputs.isShowSkill).toBe(resume.isShowSkill);
    expect(createResumeResumeInputs.involvementLabel).toBe(
      resume.involvementLabel
    );
    expect(createResumeResumeInputs.skillLabel).toBe(resume.skillLabel);

    expect(createResumeResumeInputs.skills).toHaveLength(resume.skills.length);

    expect(createResumeResumeInputs.skills).toHaveLength(resume.skills.length);

    for (let i = 0; i < resume.skills.length; i++) {
      expect(createResumeResumeInputs.skills[i]).toBe(resume.skills[i]);
    }

    expect(createResumeResumeInputs.isShowLanguage).toBe(resume.isShowLanguage);
    expect(createResumeResumeInputs.languageLabel).toBe(resume.languageLabel);
    expect(createResumeResumeInputs.languageNameLabel).toBe(
      resume.languageNameLabel
    );
    expect(createResumeResumeInputs.languageLevelLabel).toBe(
      resume.languageLevelLabel
    );

    expect(createResumeResumeInputs.languages).toHaveLength(
      resume.languages.length
    );

    for (let i = 0; i < resume.languages.length; i++) {
      expect(createResumeResumeInputs.languages[i].name).toBe(
        resume.languages[i].name
      );
      expect(createResumeResumeInputs.languages[i].level).toBe(
        resume.languages[i].level
      );
      expect(createResumeResumeInputs.languages[i].isShowLevel).toBe(
        resume.languages[i].isShowLevel
      );
    }

    expect(createResumeResumeInputs.hobbyLabel).toBe(resume.hobbyLabel);
    expect(createResumeResumeInputs.isShowHobby).toBe(resume.isShowHobby);

    expect(createResumeResumeInputs.hobbies).toHaveLength(
      resume.hobbies.length
    );

    for (let i = 0; i < resume.hobbies.length; i++) {
      expect(createResumeResumeInputs.hobbies[i]).toBe(resume.hobbies[i]);
    }
  });
});
