import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../base-model';
import { ResumeInterface } from '../../interface/resume';
import { MongoosePartial } from '../../types';
import { ResumeEntity } from '../../entity';

@ObjectType()
export class Resume extends BaseModel implements ResumeInterface {
  @Field({ nullable: true })
  fullName: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  introduction: string;

  constructor(partial: MongoosePartial<ResumeEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
