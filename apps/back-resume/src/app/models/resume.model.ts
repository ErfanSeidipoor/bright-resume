import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

export type ResumeDocument = HydratedDocument<Resume>;

@Schema({ _id: false })
@ObjectType()
class Name extends Document {
  @Field(() => String, { nullable: true })
  @Prop()
  firstName: string;

  @Prop()
  @Field(() => String, { nullable: true })
  lastName: string;
}
export const nameSchema = SchemaFactory.createForClass(Name);

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
  @Field(() => [Name], { nullable: true })
  @Prop({ type: [nameSchema] })
  names: Array<Name>;

  @Field(() => ID, { nullable: true })
  @Prop({ type: String, required: true })
  userId: string;

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
