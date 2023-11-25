import { Field, InputType } from "@nestjs/graphql";
import { GetResumesResumeArgs } from "@dto";

@InputType()
export class GetResumesResumeArgsGQL extends GetResumesResumeArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";
}
