import { Field, InputType, Int } from "@nestjs/graphql";
import { PaginationArgs } from "@dto";

@InputType()
export class PaginationArgsGQL extends PaginationArgs {
  @Field(() => Int, { nullable: true })
  limit?: number = 10;

  @Field(() => Int, { nullable: true })
  page?: number = 1;
}
