import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../base-model';

@ObjectType()
export class Resume extends BaseModel {
  @Field({ nullable: true })
  fullName: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  introduction: string;
}
