import { Field, InputType } from "@nestjs/graphql";
import { GetResumesArgs } from "@bright-resume/dto";

@InputType()
export class GetResumesArgsGQL extends GetResumesArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";
}
