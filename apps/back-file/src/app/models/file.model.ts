import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Paginated } from "@back-common/model";
import { Document } from "mongoose";
import {
  FileReasonEnum,
  FileStatusEnum,
  FileTypeEnum,
} from "@@back-file/app/enums";

@Schema({
  collection: "files",
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
export class File extends Document {
  @Field(() => ID, { nullable: true })
  @Prop({ type: String, required: false, name: "_id" })
  id: string;

  @Field(() => ID, { nullable: false })
  @Prop({ type: String, required: false })
  userId: string;

  @Field(() => ID, { nullable: false })
  @Prop({ type: String, required: false })
  resumeId: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  path: string;

  @Field(() => FileTypeEnum, { nullable: true })
  @Prop({ type: String, enum: FileTypeEnum, required: false })
  type: FileTypeEnum;

  @Field(() => FileReasonEnum, { nullable: true })
  @Prop({ type: String, enum: FileReasonEnum, required: false })
  reason: FileReasonEnum;

  @Field(() => FileStatusEnum, { nullable: true })
  @Prop({ type: String, enum: FileStatusEnum, required: false })
  status: FileStatusEnum;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isVerified: boolean;

  @Field(() => Number, { nullable: true })
  @Prop({ type: Number, required: false })
  size: number;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  hash: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  name: string;

  @Field(() => String, { nullable: true })
  uploadLink: string;

  @Field(() => Date, { nullable: false })
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Field(() => Date, { nullable: false })
  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const FileSchema = SchemaFactory.createForClass(File);

FileSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  this.id = this._id;
  next();
});

@ObjectType()
export class PaginatedFile extends Paginated(File) {}
