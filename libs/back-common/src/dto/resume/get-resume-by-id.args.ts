import { GetResumeByIdResumeArgs } from "@dto";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class GetResumeByIdResumeArgsGQL extends GetResumeByIdResumeArgs {
  @Field(() => String, { nullable: false })
  resumeId: string;
}
