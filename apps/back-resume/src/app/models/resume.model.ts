import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Paginated } from "@bright-resume/back-common/model";
import { Document } from "mongoose";
import {
  Certification,
  CourseWork,
  Education,
  Experience,
  Involvement,
  Language,
  Project,
  certificationSchema,
  courseWorkSchema,
  educationSchema,
  experienceSchema,
  involvementSchema,
  languageSchema,
  projectSchema,
} from ".";

@Schema({
  collection: "resumes",
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret.__v;
      delete ret._id;
    },
  },
})
@ObjectType()
export class Resume extends Document {
  @Field(() => ID, { nullable: false })
  @Prop({ type: String, required: true })
  userId: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  name: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  role: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowPhoneNumber: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  phoneNumber: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowLinkedin: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  linkedin: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowWebsite: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  website: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowEmail: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  email: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowLocation: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  location: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowBirthDay: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  birthDay: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowSummary: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  summaryLabel: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  summary: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowExperience: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  experienceLabel: string;

  @Field(() => [Experience], { nullable: true })
  @Prop({ type: [experienceSchema], required: false })
  experiences: Experience[];

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowProject: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  projectLabel: string;

  @Field(() => [Project], { nullable: true })
  @Prop({ type: [projectSchema], required: false })
  projects: Project[];

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowEducation: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  educationLabel: string;

  @Field(() => [Education], { nullable: true })
  @Prop({ type: [educationSchema], required: false })
  educations: Education[];

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowCertification: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  certificationLabel: string;

  @Field(() => [Certification], { nullable: true })
  @Prop({ type: [certificationSchema], required: false })
  certifications: Certification[];

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowCourseWork: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  courseWorkLabel: string;

  @Field(() => [CourseWork], { nullable: true })
  @Prop({ type: [courseWorkSchema], required: false })
  courseWorks: CourseWork[];

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowInvolvement: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  involvementLabel: string;

  @Field(() => [Involvement], { nullable: true })
  @Prop({ type: [involvementSchema], required: false })
  involvements: Involvement[];

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowSkill: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  skillLabel: string;

  @Field(() => [String], { nullable: true })
  @Prop({ type: [String], required: false })
  skills: string[];

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowLanguage: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  languageLabel: string;

  @Field(() => [Language], { nullable: true })
  @Prop({ type: [languageSchema], required: false })
  languages: Language[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  hobbyLabel: string;

  @Field(() => [String], { nullable: true })
  @Prop({ type: [String], required: false })
  hobbies: string[];

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowHobby: boolean;

  @Field(() => Date, { nullable: false })
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Field(() => Date, { nullable: false })
  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);

ResumeSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

@ObjectType()
export class PaginatedResume extends Paginated(Resume) {}
