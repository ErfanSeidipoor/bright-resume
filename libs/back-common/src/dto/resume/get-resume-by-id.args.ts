import { ArgsType, Field } from "@nestjs/graphql";
import { GetResumeByIdResumeArgs } from "@dto";

@ArgsType()
export class GetResumeByIdResumeArgsGQL extends GetResumeByIdResumeArgs {
  @Field(() => String, { nullable: false })
  resumeId: string;
}
