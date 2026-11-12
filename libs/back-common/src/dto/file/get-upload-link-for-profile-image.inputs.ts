import { Field, InputType } from "@nestjs/graphql";
import { GetUploadLinkForProfileImageFileInputs } from "@dto";

@InputType()
export class GetUploadLinkForProfileImageFileInputsGQL extends GetUploadLinkForProfileImageFileInputs {
  @Field(() => String, { nullable: false })
  resumeId: string;
}
