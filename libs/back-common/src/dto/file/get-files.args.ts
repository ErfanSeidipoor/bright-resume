import { GetFilesFileInputs } from "@dto";
import { FileReasonEnum } from "@enums";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class GetFilesFileInputsGQL extends GetFilesFileInputs {
  @Field(() => String, { nullable: true })
  resumeId?: string = "";

  @Field(() => FileReasonEnum, { nullable: true })
  reason?: FileReasonEnum;
}
