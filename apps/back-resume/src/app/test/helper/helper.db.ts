import { INestApplication } from "@nestjs/common";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { DbService } from "../../modules/db/db.service";
import mongoose from "mongoose";
import { Resume } from "@@back-resume/app/models";
import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

export class HelperDB {
  dbService: DbService;

  constructor(public app: INestApplication) {
    this.dbService = app.get<DbService>(DbService);
  }

  async closeConnection() {
    await this.dbService.connection.close();
  }

  async dropAllCollections() {
    const {
      connection: { collections },
    } = this.dbService;

    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  }

  async dropDatabase() {
    await this.dbService.connection.dropDatabase();
  }

  async createResume(inputs: { userId?: string }): Promise<Resume> {
    const { userId } = inputs;

    const resume = await this.dbService.resumeModel.create({
      userId: userId || new mongoose.Types.ObjectId().toString(),

      name: faker.person.fullName(),
      color: ResumeColorEnum.green,
      fontFamily: ResumeFontFamilyEnum.raleway,
      fontSize: ResumeFontSizeEnum.small,
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
    });

    return resume;
  }

  async createMultipleResumes(
    count: number,
    inputs: { userId?: string }
  ): Promise<Resume[]> {
    const resumes = [];

    for (let i = 0; i < count; i++) {
      resumes.push(await this.createResume(inputs));
    }

    return resumes;
  }
}
