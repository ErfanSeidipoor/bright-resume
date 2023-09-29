import { ArgsType, Field } from "@nestjs/graphql";
import { GetResumeByIdArgs } from "@bright-resume/dto";

@ArgsType()
export class GetResumeByIdArgsGQL extends GetResumeByIdArgs {
  @Field(() => String, { nullable: false })
  resumeId: string;
}
