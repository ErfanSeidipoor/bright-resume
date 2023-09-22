import { Field, InputType } from "@nestjs/graphql";
import { UpdateResumeInputs } from "@bright-resume/dto";

@InputType()
export class UpdateResumeInputsGQL extends UpdateResumeInputs {
  @Field()
  resumeId: string;

  @Field()
  name: string;
}
