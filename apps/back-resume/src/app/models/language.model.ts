import { ILanguage } from "@models";
import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ _id: false })
@ObjectType()
export class Language extends Document implements ILanguage {
  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowLevel?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShow?: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  level?: string;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
