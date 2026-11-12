import { GeneratePdfOfResumeFileInputs } from "@dto";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class GeneratePdfOfResumeFileInputsGQL extends GeneratePdfOfResumeFileInputs {
  @Field(() => String, { nullable: false })
  resumeId: string;
}
