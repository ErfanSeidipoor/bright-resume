import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Paginated } from "@back-common/model";
import { Document } from "mongoose";

@Schema({
  collection: "users",
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
export class User extends Document {
  @Field(() => ID, { nullable: true })
  @Prop({ type: String, required: false, name: "_id" })
  id: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  name?: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  username?: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  email?: string;

  @Prop({ type: String, required: false })
  password: string | null;

  @Field(() => String, { nullable: true })
  token: string | null;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  picture?: string;

  @Field(() => Date, { nullable: false })
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Field(() => Date, { nullable: false })
  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  this.id = this._id;
  next();
});

@ObjectType()
export class PaginatedUser extends Paginated(User) {}
