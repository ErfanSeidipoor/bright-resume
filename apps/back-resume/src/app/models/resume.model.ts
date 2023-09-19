import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import {
  Certification,
  CourseWork,
  Education,
  Experience,
  Hobby,
  Involvement,
  Language,
  Project,
  Skill,
  certificationSchema,
  courseWorkSchema,
  educationSchema,
  experienceSchema,
  hobbySchema,
  involvementSchema,
  languageSchema,
  projectSchema,
  skillSchema,
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

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  phoneNumber: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  linkedin: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  website: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  email: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  location: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  birthDay: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  summaryLabel: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  summary: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  experienceLabel: string;

  @Field(() => [Experience], { nullable: true })
  @Prop({ type: [experienceSchema], required: false })
  experiences: Experience[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  projectLabel: string;

  @Field(() => [Project], { nullable: true })
  @Prop({ type: [projectSchema], required: false })
  projects: Project[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  educationLabel: string;

  @Field(() => [Education], { nullable: true })
  @Prop({ type: [educationSchema], required: false })
  educations: Education[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  certificationLabel: string;

  @Field(() => [Certification], { nullable: true })
  @Prop({ type: [certificationSchema], required: false })
  certifications: Certification[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  courseWorkLabel: string;

  @Field(() => [CourseWork], { nullable: true })
  @Prop({ type: [courseWorkSchema], required: false })
  courseWorks: CourseWork[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  involvementLabel: string;

  @Field(() => [Involvement], { nullable: true })
  @Prop({ type: [involvementSchema], required: false })
  involvements: Involvement[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  skillLabel: string;

  @Field(() => [Skill], { nullable: true })
  @Prop({ type: [skillSchema], required: false })
  skills: Skill[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  languageLabel: string;

  @Field(() => [Language], { nullable: true })
  @Prop({ type: [languageSchema], required: false })
  languages: Language[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  hobbyLabel: string;

  @Field(() => [Hobby], { nullable: true })
  @Prop({ type: [hobbySchema], required: false })
  hobbies: Hobby[];

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
