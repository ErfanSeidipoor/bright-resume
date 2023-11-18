import gql from "graphql-tag";
import { faker } from "@faker-js/faker";
import request from "supertest-graphql";
import moment from "moment";

import { CreateResumeResumeInputsGQL } from "@bright-resume/back-common/dto/resume";
import { Resume } from "@bright-resume/back-resume/app/models/resume.model";

import { IntegrationTestManager } from "../IntegrationTestManager";

describe("microservice:resume CreateResume", () => {
  const integrationTestManager = new IntegrationTestManager();

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
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
    const { data } = await request<
      { createResume: Resume },
      { CreateResumeResumeInputs: CreateResumeResumeInputsGQL }
    >(integrationTestManager.httpServer)
      .mutate(
        gql`
          mutation ($CreateResumeResumeInputs: CreateResumeResumeInputsGQL!) {
            createResume(CreateResumeResumeInputs: $CreateResumeResumeInputs) {
              name
            }
          }
        `
      )
      .variables({
        CreateResumeResumeInputs: {
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
          // experiences: [
          //   {
          //     role: faker.person.jobTitle(),
          //     company: faker.company.name(),
          //     location: faker.location.country(),
          //     fromMonth: moment(faker.date.past()).format("MMMM"),
          //     fromYear: moment(faker.date.past()).format("YYYY"),
          //     toMonth: moment(faker.date.recent()).format("MMMM"),
          //     toYear: moment(faker.date.recent()).format("YYYY"),
          //     untilNow: faker.datatype.boolean(),
          //     points: [
          //       faker.lorem.paragraph(),
          //       faker.lorem.paragraph(),
          //       faker.lorem.paragraph(),
          //       faker.lorem.paragraph(),
          //     ],
          //   },
          //   {
          //     role: faker.person.jobTitle(),
          //     company: faker.company.name(),
          //     location: faker.location.country(),
          //     fromMonth: moment(faker.date.past()).format("MMMM"),
          //     fromYear: moment(faker.date.past()).format("YYYY"),
          //     toMonth: moment(faker.date.recent()).format("MMMM"),
          //     toYear: moment(faker.date.recent()).format("YYYY"),
          //     untilNow: faker.datatype.boolean(),
          //     points: [
          //       faker.lorem.paragraph(),
          //       faker.lorem.paragraph(),
          //       faker.lorem.paragraph(),
          //       faker.lorem.paragraph(),
          //     ],
          //   },
          // ],
          isShowProject: faker.datatype.boolean(),
          projectLabel: faker.lorem.word(),
          projects: [
            {
              role: faker.person.jobTitle(),
              title: "",
              company: faker.company.name(),
              location: faker.location.country(),
              url: faker.internet.url(),
              fromMonth: moment(faker.date.past()).format("MMMM"),
              fromYear: moment(faker.date.past()).format("YYYY"),
              toMonth: moment(faker.date.recent()).format("MMMM"),
              toYear: moment(faker.date.recent()).format("YYYY"),
              untilNow: faker.datatype.boolean(),
              // points: [
              //   faker.lorem.paragraph(),
              //   faker.lorem.paragraph(),
              //   faker.lorem.paragraph(),
              //   faker.lorem.paragraph(),
              // ],
            },
          ],
          isShowEducation: faker.datatype.boolean(),
          educationLabel: faker.lorem.word(),
          // educations: [
          //   {
          //     degree: faker.lorem.word(),
          //     institute: faker.company.name(),
          //     location: faker.location.country(),
          //     gpa: faker.number
          //       .float({ precision: 0.1, min: 0, max: 20 })
          //       .toString(),
          //     from: moment(faker.date.past()).format("YYYY MMMM"),
          //     to: moment(faker.date.recent()).format("YYYY MMMM"),
          //     untilNow: faker.datatype.boolean(),
          //     points: [
          //       faker.lorem.paragraph(),
          //       faker.lorem.paragraph(),
          //       faker.lorem.paragraph(),
          //     ],
          //   },
          // ],
          isShowCertification: faker.datatype.boolean(),
          certificationLabel: faker.lorem.word(),
          // certifications: [
          //   {
          //     name: faker.lorem.word(),
          //     institute: faker.company.name(),
          //     year: moment(faker.date.past()).format("YYYY"),
          //     points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
          //   },
          // ],
          isShowCourseWork: faker.datatype.boolean(),
          courseWorkLabel: faker.lorem.word(),
          // courseWorks: [
          //   {
          //     title: faker.lorem.word(),
          //     name: faker.lorem.word(),
          //     institute: faker.company.name(),
          //     year: moment(faker.date.past()).format("YYYY"),
          //     skills: faker.lorem.words(10),
          //     points: [faker.lorem.paragraph()],
          //   },
          // ],
          isShowInvolvement: faker.datatype.boolean(),
          involvementLabel: faker.lorem.word(),
          // involvements: [
          //   {
          //     role: faker.person.jobTitle(),
          //     company: faker.company.name(),
          //     location: faker.location.country(),
          //     fromMonth: moment(faker.date.past()).format("MMMM"),
          //     fromYear: moment(faker.date.past()).format("YYYY"),
          //     toMonth: moment(faker.date.recent()).format("MMMM"),
          //     toYear: moment(faker.date.recent()).format("YYYY"),
          //     untilNow: faker.datatype.boolean(),
          //     points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
          //   },
          // ],
          isShowSkill: faker.datatype.boolean(),
          skillLabel: faker.lorem.word(),
          skills: [faker.lorem.paragraph(), faker.lorem.paragraph()],
          isShowLanguage: faker.datatype.boolean(),
          languageLabel: faker.lorem.word(),
          // languages: [{ name: faker.lorem.word(), level: faker.lorem.word() }],
          hobbyLabel: faker.lorem.word(),
          isShowHobby: faker.datatype.boolean(),
          hobbies: [faker.lorem.paragraph(), faker.lorem.paragraph()],
        },
      })
      .expectNoErrors();
  });
});
