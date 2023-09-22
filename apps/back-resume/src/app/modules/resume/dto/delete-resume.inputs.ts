import { Field, InputType } from "@nestjs/graphql";
import { DeleteResumeInputs } from "@bright-resume/dto";

@InputType()
export class DeleteResumeInputsGQL extends DeleteResumeInputs {
  @Field()
  resumeId: string;
}
