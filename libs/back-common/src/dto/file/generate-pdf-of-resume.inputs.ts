import { Field, InputType } from "@nestjs/graphql";
import { GeneratePdfOfResumeFileInputs } from "@dto";

@InputType()
export class GeneratePdfOfResumeFileInputsGQL extends GeneratePdfOfResumeFileInputs {
  @Field(() => String, { nullable: false })
  resumeId: string;
}
