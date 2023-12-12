import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ _id: false })
@ObjectType()
export class Project extends Document {
  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  title: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowRole: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  role: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowCompany: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  company: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowLocation: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  location: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowUrl: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  url: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowDate: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  fromMonth: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, reqßuired: false })
  fromYear: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  toMonth: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  toYear: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  untilNow: boolean;

  @Field(() => [String], { nullable: true })
  @Prop({ type: [String], required: false })
  points: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
