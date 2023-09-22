import { Field, InputType } from "@nestjs/graphql";
import { CreateResumeInputs } from "@bright-resume/dto";

@InputType()
export class CreateResumeInputsGQL extends CreateResumeInputs {
  @Field()
  name: string;
}
