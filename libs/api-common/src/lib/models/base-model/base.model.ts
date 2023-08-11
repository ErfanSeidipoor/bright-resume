import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseModel {
  @Field({ nullable: false })
  id: string;

  @Field(() => Date, { nullable: false, defaultValue: new Date() })
  createdAt: Date;

  @Field(() => Date, { nullable: false, defaultValue: new Date() })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  //owner:user
}
