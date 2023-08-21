import { Field, ObjectType } from '@nestjs/graphql';
import { MongooseBaseInterface } from '../../interface';
import { MongooseBaseEntity } from '../../entity';
import { MongoosePartial } from '../../types';

@ObjectType()
export class BaseModel implements MongooseBaseInterface {
  @Field({ nullable: false })
  id: string;

  @Field(() => Date, { nullable: false, defaultValue: new Date() })
  createdAt: Date;

  @Field(() => Date, { nullable: false, defaultValue: new Date() })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  constructor(partial: MongoosePartial<MongooseBaseEntity>) {
    Object.assign(this, partial);
  }
}
