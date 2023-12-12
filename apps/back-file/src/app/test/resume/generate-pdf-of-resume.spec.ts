import { BullService } from "@@back-file/app/modules/bull/bull.service";
import { GeneratePdfOfResumeFileInputsGQL } from "@back-common/dto";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { GeneratePdfOfResumeFileInputs } from "@dto";
import { FileReasonEnum, FileStatusEnum, FileTypeEnum } from "@enums";
import { faker } from "@faker-js/faker";
import gql from "graphql-tag";
import moment from "moment";
import mongoose from "mongoose";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";

describe("microservice:file GeneratePdfOfResume", () => {
  const integrationTestManager = new IntegrationTestManager();
  let helperDB: HelperDB;
  let bullService: BullService;

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
    bullService = integrationTestManager.app.get(BullService);
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

  it("should nothings! 🤪 but create a file and add request to queue", async () => {
    const getStatusSpy = jest
      .spyOn(bullService, "addToGeneratePdfOfResumeQueue")
      .mockReturnValue(Promise.resolve());

    const generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputsGQL = {
      resumeId: new mongoose.Types.ObjectId().toString(),
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
          location: faker.location.city(),
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

    const authHeader = generateAuthorizationHeader({});

    const { errors } = await request<
      null,
      {
        generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation (
            $generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputsGQL!
          ) {
            generatePdfOfResume(
              generatePdfOfResumeFileInputs: $generatePdfOfResumeFileInputs
            )
          }
        `
      )
      .variables({
        generatePdfOfResumeFileInputs,
      });

    expect(errors).toBeUndefined();

    const file = await helperDB.dbService.fileModel.findOne({
      resumeId: generatePdfOfResumeFileInputs.resumeId,
    });

    expect(file).toBeDefined();
    expect(file.userId).toBe(authHeader.token.id);
    expect(file.isVerified).toBe(false);
    expect(file.type).toBe(FileTypeEnum.PDF);
    expect(file.reason).toBe(FileReasonEnum.resume_PDF);
    expect(file.status).toBe(FileStatusEnum.waiting);
    expect(getStatusSpy).toHaveBeenCalled();
  });
});
