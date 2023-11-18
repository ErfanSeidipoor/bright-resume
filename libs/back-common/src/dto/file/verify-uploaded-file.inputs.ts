import { Field, InputType } from "@nestjs/graphql";
import { VerifyUploadedFileFileInputs } from "@dto";

@InputType()
export class VerifyUploadedFileFileInputsGQL extends VerifyUploadedFileFileInputs {
  @Field(() => String, { nullable: false })
  fileId: string;
}
