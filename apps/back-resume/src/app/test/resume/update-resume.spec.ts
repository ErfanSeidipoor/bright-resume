import { Resume } from "@@back-resume/app/models/resume.model";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { RESUME_NOT_FOUND } from "@bright-resume/errors";
import { UpdateResumeResumeInputs } from "@dto";
import { faker } from "@faker-js/faker";
import gql from "graphql-tag";
import mongoose from "mongoose";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";
import moment from "moment";

describe("microservice:resume UpdateResume", () => {
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

  it("Should return RESUME_NOT_FOUND if a user attempts to delete a resume that does not belong to it", async () => {
    const authHeader = generateAuthorizationHeader({});

    const resume = await helperDB.createResume({});

    const updateResumeResumeInputs: UpdateResumeResumeInputs = {
      resumeId: resume.id,
    };

    const { errors } = await request<
      { deleteResume: Resume },
      { updateResumeResumeInputs: UpdateResumeResumeInputs }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation ($updateResumeResumeInputs: UpdateResumeResumeInputsGQL!) {
            updateResume(updateResumeResumeInputs: $updateResumeResumeInputs) {
              id
            }
          }
        `
      )
      .variables({
        updateResumeResumeInputs,
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(RESUME_NOT_FOUND.description);
  });

  it("Should return RESUME_NOT_FOUND if a user attempts to delete a resume but the ID is wrong", async () => {
    const authHeader = generateAuthorizationHeader({});

    await helperDB.createResume({
      userId: authHeader.token.id,
    });

    const updateResumeResumeInputs: UpdateResumeResumeInputs = {
      resumeId: new mongoose.Types.ObjectId().toString(),
    };

    const { errors } = await request<
      { deleteResume: Resume },
      { updateResumeResumeInputs: UpdateResumeResumeInputs }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation ($updateResumeResumeInputs: UpdateResumeResumeInputsGQL!) {
            updateResume(updateResumeResumeInputs: $updateResumeResumeInputs) {
              id
            }
          }
        `
      )
      .variables({
        updateResumeResumeInputs,
      });

    expect(errors).toBeDefined();
    expect(errors[0].message).toBe(RESUME_NOT_FOUND.description);
  });

  it("updates a resume with valid inputs", async () => {
    const authHeader = generateAuthorizationHeader({});

    const resume = await helperDB.createResume({
      userId: authHeader.token.id,
    });

    const updateResumeResumeInputs: UpdateResumeResumeInputs = {
      resumeId: resume.id,
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

    const { data, errors } = await request<
      { updateResume: Resume },
      { updateResumeResumeInputs: UpdateResumeResumeInputs }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation ($updateResumeResumeInputs: UpdateResumeResumeInputsGQL!) {
            updateResume(updateResumeResumeInputs: $updateResumeResumeInputs) {
              id
              name
              userId
            }
          }
        `
      )
      .variables({
        updateResumeResumeInputs,
      });

    const { id: resumeId } = data.updateResume;
    const { id: userId } = authHeader.token;

    const updatedResume = await helperDB.dbService.resumeModel.findById(
      resumeId
    );

    expect(updatedResume.id).toBe(resumeId);
    expect(updatedResume.userId).toBe(userId);

    expect(updateResumeResumeInputs.name).toBe(updatedResume.name);

    expect(updateResumeResumeInputs.role).toBe(updatedResume.role);
    expect(updateResumeResumeInputs.isShowPhoneNumber).toBe(
      updatedResume.isShowPhoneNumber
    );
    expect(updateResumeResumeInputs.phoneNumber).toBe(
      updatedResume.phoneNumber
    );
    expect(updateResumeResumeInputs.isShowLinkedin).toBe(
      updatedResume.isShowLinkedin
    );
    expect(updateResumeResumeInputs.linkedin).toBe(updatedResume.linkedin);
    expect(updateResumeResumeInputs.isShowWebsite).toBe(
      updatedResume.isShowWebsite
    );
    expect(updateResumeResumeInputs.website).toBe(updatedResume.website);
    expect(updateResumeResumeInputs.isShowEmail).toBe(
      updatedResume.isShowEmail
    );
    expect(updateResumeResumeInputs.email).toBe(updatedResume.email);
    expect(updateResumeResumeInputs.isShowLocation).toBe(
      updatedResume.isShowLocation
    );
    expect(updateResumeResumeInputs.location).toBe(updatedResume.location);
    expect(updateResumeResumeInputs.isShowBirthDay).toBe(
      updatedResume.isShowBirthDay
    );
    expect(updateResumeResumeInputs.birthDay).toBe(updatedResume.birthDay);
    expect(updateResumeResumeInputs.isShowSummary).toBe(
      updatedResume.isShowSummary
    );
    expect(updateResumeResumeInputs.summaryLabel).toBe(
      updatedResume.summaryLabel
    );
    expect(updateResumeResumeInputs.summary).toBe(updatedResume.summary);
    expect(updateResumeResumeInputs.isShowExperience).toBe(
      updatedResume.isShowExperience
    );
    expect(updateResumeResumeInputs.experienceLabel).toBe(
      updatedResume.experienceLabel
    );
    expect(updateResumeResumeInputs.experienceRoleLabel).toBe(
      updatedResume.experienceRoleLabel
    );
    expect(updateResumeResumeInputs.experienceCompanyLabel).toBe(
      updatedResume.experienceCompanyLabel
    );
    expect(updateResumeResumeInputs.experienceLocationLabel).toBe(
      updatedResume.experienceLocationLabel
    );

    expect(updateResumeResumeInputs.experiences).toHaveLength(
      updatedResume.experiences.length
    );

    expect(updateResumeResumeInputs.experiences).toHaveLength(
      updatedResume.experiences.length
    );

    for (let i = 0; i < updatedResume.experiences.length; i++) {
      expect(updateResumeResumeInputs.experiences[i].role).toBe(
        updatedResume.experiences[i].role
      );
      expect(updateResumeResumeInputs.experiences[i].company).toBe(
        updatedResume.experiences[i].company
      );
      expect(updateResumeResumeInputs.experiences[i].isShowLocation).toBe(
        updatedResume.experiences[i].isShowLocation
      );
      expect(updateResumeResumeInputs.experiences[i].location).toBe(
        updatedResume.experiences[i].location
      );
      expect(updateResumeResumeInputs.experiences[i].isShowDate).toBe(
        updatedResume.experiences[i].isShowDate
      );
      expect(updateResumeResumeInputs.experiences[i].fromMonth).toBe(
        updatedResume.experiences[i].fromMonth
      );
      expect(updateResumeResumeInputs.experiences[i].fromYear).toBe(
        updatedResume.experiences[i].fromYear
      );
      expect(updateResumeResumeInputs.experiences[i].toMonth).toBe(
        updatedResume.experiences[i].toMonth
      );
      expect(updateResumeResumeInputs.experiences[i].toYear).toBe(
        updatedResume.experiences[i].toYear
      );
      expect(updateResumeResumeInputs.experiences[i].untilNow).toBe(
        updatedResume.experiences[i].untilNow
      );

      expect(updateResumeResumeInputs.experiences[i].points).toHaveLength(
        updatedResume.experiences[i].points.length
      );

      for (
        let j = 0;
        j < updateResumeResumeInputs.experiences[i].points.length;
        j++
      ) {
        expect(updateResumeResumeInputs.experiences[i].points[j]).toBe(
          updatedResume.experiences[i].points[j]
        );
      }
    }

    expect(updateResumeResumeInputs.isShowProject).toBe(
      updatedResume.isShowProject
    );
    expect(updateResumeResumeInputs.projectLabel).toBe(
      updatedResume.projectLabel
    );
    expect(updateResumeResumeInputs.projectRoleLabel).toBe(
      updatedResume.projectRoleLabel
    );
    expect(updateResumeResumeInputs.projectTitleLabel).toBe(
      updatedResume.projectTitleLabel
    );
    expect(updateResumeResumeInputs.projectCompanyLabel).toBe(
      updatedResume.projectCompanyLabel
    );
    expect(updateResumeResumeInputs.projectLocationLabel).toBe(
      updatedResume.projectLocationLabel
    );
    expect(updateResumeResumeInputs.projectUrlLabel).toBe(
      updatedResume.projectUrlLabel
    );
    expect(updateResumeResumeInputs.projects).toHaveLength(
      updatedResume.projects.length
    );

    for (let i = 0; i < updatedResume.projects.length; i++) {
      expect(updateResumeResumeInputs.projects[i].title).toBe(
        updatedResume.projects[i].title
      );
      expect(updateResumeResumeInputs.projects[i].isShowRole).toBe(
        updatedResume.projects[i].isShowRole
      );
      expect(updateResumeResumeInputs.projects[i].role).toBe(
        updatedResume.projects[i].role
      );
      expect(updateResumeResumeInputs.projects[i].isShowCompany).toBe(
        updatedResume.projects[i].isShowCompany
      );
      expect(updateResumeResumeInputs.projects[i].company).toBe(
        updatedResume.projects[i].company
      );
      expect(updateResumeResumeInputs.projects[i].isShowLocation).toBe(
        updatedResume.projects[i].isShowLocation
      );
      expect(updateResumeResumeInputs.projects[i].location).toBe(
        updatedResume.projects[i].location
      );
      expect(updateResumeResumeInputs.projects[i].isShowUrl).toBe(
        updatedResume.projects[i].isShowUrl
      );
      expect(updateResumeResumeInputs.projects[i].url).toBe(
        updatedResume.projects[i].url
      );
      expect(updateResumeResumeInputs.projects[i].isShowDate).toBe(
        updatedResume.projects[i].isShowDate
      );
      expect(updateResumeResumeInputs.projects[i].fromMonth).toBe(
        updatedResume.projects[i].fromMonth
      );
      expect(updateResumeResumeInputs.projects[i].fromYear).toBe(
        updatedResume.projects[i].fromYear
      );
      expect(updateResumeResumeInputs.projects[i].toMonth).toBe(
        updatedResume.projects[i].toMonth
      );
      expect(updateResumeResumeInputs.projects[i].toYear).toBe(
        updatedResume.projects[i].toYear
      );
      expect(updateResumeResumeInputs.projects[i].untilNow).toBe(
        updatedResume.projects[i].untilNow
      );

      expect(updateResumeResumeInputs.projects[i].points).toHaveLength(
        updatedResume.projects[i].points.length
      );

      for (
        let j = 0;
        j < updateResumeResumeInputs.projects[i].points.length;
        j++
      ) {
        expect(updateResumeResumeInputs.projects[i].points[j]).toBe(
          updatedResume.projects[i].points[j]
        );
      }
    }

    expect(updateResumeResumeInputs.isShowEducation).toBe(
      updatedResume.isShowEducation
    );

    expect(updateResumeResumeInputs.educationLabel).toBe(
      updatedResume.educationLabel
    );

    expect(updateResumeResumeInputs.educationDegreeLabel).toBe(
      updatedResume.educationDegreeLabel
    );

    expect(updateResumeResumeInputs.educationInstituteLabel).toBe(
      updatedResume.educationInstituteLabel
    );
    expect(updateResumeResumeInputs.educationLocationLabel).toBe(
      updatedResume.educationLocationLabel
    );
    expect(updateResumeResumeInputs.educationGpaLabel).toBe(
      updatedResume.educationGpaLabel
    );

    expect(updateResumeResumeInputs.educations).toHaveLength(
      updatedResume.educations.length
    );

    for (let i = 0; i < updatedResume.educations.length; i++) {
      expect(updateResumeResumeInputs.educations[i].degree).toBe(
        updatedResume.educations[i].degree
      );
      expect(updateResumeResumeInputs.educations[i].isShowInstitute).toBe(
        updatedResume.educations[i].isShowInstitute
      );
      expect(updateResumeResumeInputs.educations[i].institute).toBe(
        updatedResume.educations[i].institute
      );
      expect(updateResumeResumeInputs.educations[i].isShowLocation).toBe(
        updatedResume.educations[i].isShowLocation
      );
      expect(updateResumeResumeInputs.educations[i].location).toBe(
        updatedResume.educations[i].location
      );
      expect(updateResumeResumeInputs.educations[i].isShowGpa).toBe(
        updatedResume.educations[i].isShowGpa
      );
      expect(updateResumeResumeInputs.educations[i].gpa).toBe(
        updatedResume.educations[i].gpa
      );
      expect(updateResumeResumeInputs.educations[i].isShowDate).toBe(
        updatedResume.educations[i].isShowDate
      );
      expect(updateResumeResumeInputs.educations[i].from).toBe(
        updatedResume.educations[i].from
      );
      expect(updateResumeResumeInputs.educations[i].to).toBe(
        updatedResume.educations[i].to
      );
      expect(updateResumeResumeInputs.educations[i].untilNow).toBe(
        updatedResume.educations[i].untilNow
      );

      expect(updateResumeResumeInputs.educations[i].points).toHaveLength(
        updatedResume.educations[i].points.length
      );

      for (
        let j = 0;
        j < updateResumeResumeInputs.educations[i].points.length;
        j++
      ) {
        expect(updateResumeResumeInputs.educations[i].points[j]).toBe(
          updatedResume.educations[i].points[j]
        );
      }
    }

    expect(updateResumeResumeInputs.isShowCertification).toBe(
      updatedResume.isShowCertification
    );
    expect(updateResumeResumeInputs.certificationLabel).toBe(
      updatedResume.certificationLabel
    );
    expect(updateResumeResumeInputs.certificationNameLabel).toBe(
      updatedResume.certificationNameLabel
    );

    expect(updateResumeResumeInputs.certificationInstituteLabel).toBe(
      updatedResume.certificationInstituteLabel
    );
    expect(updateResumeResumeInputs.certificationYearLabel).toBe(
      updatedResume.certificationYearLabel
    );

    expect(updateResumeResumeInputs.certifications).toHaveLength(
      updatedResume.certifications.length
    );

    for (let i = 0; i < updatedResume.certifications.length; i++) {
      expect(updateResumeResumeInputs.certifications[i].name).toBe(
        updatedResume.certifications[i].name
      );
      expect(updateResumeResumeInputs.certifications[i].isShowInstitute).toBe(
        updatedResume.certifications[i].isShowInstitute
      );
      expect(updateResumeResumeInputs.certifications[i].institute).toBe(
        updatedResume.certifications[i].institute
      );
      expect(updateResumeResumeInputs.certifications[i].isShowDate).toBe(
        updatedResume.certifications[i].isShowDate
      );
      expect(updateResumeResumeInputs.certifications[i].year).toBe(
        updatedResume.certifications[i].year
      );

      expect(updateResumeResumeInputs.certifications[i].points).toHaveLength(
        updatedResume.certifications[i].points.length
      );

      for (
        let j = 0;
        j < updateResumeResumeInputs.certifications[i].points.length;
        j++
      ) {
        expect(updateResumeResumeInputs.certifications[i].points[j]).toBe(
          updatedResume.certifications[i].points[j]
        );
      }
    }

    expect(updateResumeResumeInputs.isShowCourseWork).toBe(
      updatedResume.isShowCourseWork
    );

    expect(updateResumeResumeInputs.courseWorkLabel).toBe(
      updatedResume.courseWorkLabel
    );
    expect(updateResumeResumeInputs.courseWorkTitleLabel).toBe(
      updatedResume.courseWorkTitleLabel
    );
    expect(updateResumeResumeInputs.courseWorkNameLabel).toBe(
      updatedResume.courseWorkNameLabel
    );

    expect(updateResumeResumeInputs.courseWorkInstituteLabel).toBe(
      updatedResume.courseWorkInstituteLabel
    );

    expect(updateResumeResumeInputs.courseWorkYearLabel).toBe(
      updatedResume.courseWorkYearLabel
    );
    expect(updateResumeResumeInputs.courseWorkSkillsLabel).toBe(
      updatedResume.courseWorkSkillsLabel
    );

    expect(updateResumeResumeInputs.courseWorks).toHaveLength(
      updatedResume.courseWorks.length
    );

    for (let i = 0; i < updatedResume.courseWorks.length; i++) {
      expect(updateResumeResumeInputs.courseWorks[i].name).toBe(
        updatedResume.courseWorks[i].name
      );
      expect(updateResumeResumeInputs.courseWorks[i].isShowInstitute).toBe(
        updatedResume.courseWorks[i].isShowInstitute
      );
      expect(updateResumeResumeInputs.courseWorks[i].institute).toBe(
        updatedResume.courseWorks[i].institute
      );
      expect(updateResumeResumeInputs.courseWorks[i].isShowDate).toBe(
        updatedResume.courseWorks[i].isShowDate
      );
      expect(updateResumeResumeInputs.courseWorks[i].isShowSkills).toBe(
        updatedResume.courseWorks[i].isShowSkills
      );
      expect(updateResumeResumeInputs.courseWorks[i].year).toBe(
        updatedResume.courseWorks[i].year
      );

      expect(updateResumeResumeInputs.courseWorks[i].points).toHaveLength(
        updatedResume.courseWorks[i].points.length
      );

      for (
        let j = 0;
        j < updateResumeResumeInputs.courseWorks[i].points.length;
        j++
      ) {
        expect(updateResumeResumeInputs.courseWorks[i].points[j]).toBe(
          updatedResume.courseWorks[i].points[j]
        );
      }
    }

    expect(updateResumeResumeInputs.isShowInvolvement).toBe(
      updatedResume.isShowInvolvement
    );
    expect(updateResumeResumeInputs.involvementLabel).toBe(
      updatedResume.involvementLabel
    );
    expect(updateResumeResumeInputs.involvementRoleLabel).toBe(
      updatedResume.involvementRoleLabel
    );
    expect(updateResumeResumeInputs.involvementCompanyLabel).toBe(
      updatedResume.involvementCompanyLabel
    );
    expect(updateResumeResumeInputs.involvementLocationLabel).toBe(
      updatedResume.involvementLocationLabel
    );

    expect(updateResumeResumeInputs.involvements).toHaveLength(
      updatedResume.involvements.length
    );

    for (let i = 0; i < updatedResume.involvements.length; i++) {
      expect(updateResumeResumeInputs.involvements[i].role).toBe(
        updatedResume.involvements[i].role
      );
      expect(updateResumeResumeInputs.involvements[i].isShowCompany).toBe(
        updatedResume.involvements[i].isShowCompany
      );
      expect(updateResumeResumeInputs.involvements[i].company).toBe(
        updatedResume.involvements[i].company
      );
      expect(updateResumeResumeInputs.involvements[i].isShowDate).toBe(
        updatedResume.involvements[i].isShowDate
      );
      expect(updateResumeResumeInputs.involvements[i].isShowLocation).toBe(
        updatedResume.involvements[i].isShowLocation
      );
      expect(updateResumeResumeInputs.involvements[i].location).toBe(
        updatedResume.involvements[i].location
      );
      expect(updateResumeResumeInputs.involvements[i].isShowDate).toBe(
        updatedResume.involvements[i].isShowDate
      );
      expect(updateResumeResumeInputs.involvements[i].fromMonth).toBe(
        updatedResume.involvements[i].fromMonth
      );
      expect(updateResumeResumeInputs.involvements[i].fromYear).toBe(
        updatedResume.involvements[i].fromYear
      );
      expect(updateResumeResumeInputs.involvements[i].toMonth).toBe(
        updatedResume.involvements[i].toMonth
      );
      expect(updateResumeResumeInputs.involvements[i].toYear).toBe(
        updatedResume.involvements[i].toYear
      );
      expect(updateResumeResumeInputs.involvements[i].untilNow).toBe(
        updatedResume.involvements[i].untilNow
      );

      expect(updateResumeResumeInputs.involvements[i].points).toHaveLength(
        updatedResume.involvements[i].points.length
      );

      for (
        let j = 0;
        j < updateResumeResumeInputs.involvements[i].points.length;
        j++
      ) {
        expect(updateResumeResumeInputs.involvements[i].points[j]).toBe(
          updatedResume.involvements[i].points[j]
        );
      }
    }
    expect(updateResumeResumeInputs.isShowSkill).toBe(
      updatedResume.isShowSkill
    );
    expect(updateResumeResumeInputs.involvementLabel).toBe(
      updatedResume.involvementLabel
    );
    expect(updateResumeResumeInputs.skillLabel).toBe(updatedResume.skillLabel);

    expect(updateResumeResumeInputs.skills).toHaveLength(
      updatedResume.skills.length
    );

    expect(updateResumeResumeInputs.skills).toHaveLength(
      updatedResume.skills.length
    );

    for (let i = 0; i < updatedResume.skills.length; i++) {
      expect(updateResumeResumeInputs.skills[i]).toBe(updatedResume.skills[i]);
    }

    expect(updateResumeResumeInputs.isShowLanguage).toBe(
      updatedResume.isShowLanguage
    );
    expect(updateResumeResumeInputs.languageLabel).toBe(
      updatedResume.languageLabel
    );
    expect(updateResumeResumeInputs.languageNameLabel).toBe(
      updatedResume.languageNameLabel
    );
    expect(updateResumeResumeInputs.languageLevelLabel).toBe(
      updatedResume.languageLevelLabel
    );

    expect(updateResumeResumeInputs.languages).toHaveLength(
      updatedResume.languages.length
    );

    for (let i = 0; i < updatedResume.languages.length; i++) {
      expect(updateResumeResumeInputs.languages[i].name).toBe(
        updatedResume.languages[i].name
      );
      expect(updateResumeResumeInputs.languages[i].level).toBe(
        updatedResume.languages[i].level
      );
      expect(updateResumeResumeInputs.languages[i].isShowLevel).toBe(
        updatedResume.languages[i].isShowLevel
      );
    }

    expect(updateResumeResumeInputs.hobbyLabel).toBe(updatedResume.hobbyLabel);
    expect(updateResumeResumeInputs.isShowHobby).toBe(
      updatedResume.isShowHobby
    );

    expect(updateResumeResumeInputs.hobbies).toHaveLength(
      updatedResume.hobbies.length
    );

    for (let i = 0; i < updatedResume.hobbies.length; i++) {
      expect(updateResumeResumeInputs.hobbies[i]).toBe(
        updatedResume.hobbies[i]
      );
    }
  });
});
