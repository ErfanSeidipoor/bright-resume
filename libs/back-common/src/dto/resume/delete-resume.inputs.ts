import { Field, InputType } from "@nestjs/graphql";
import { DeleteResumeResumeInputs } from "@dto";

@InputType()
export class DeleteResumeResumeInputsGQL extends DeleteResumeResumeInputs {
  @Field()
  resumeId: string;
}
