import { Field, InputType } from "@nestjs/graphql";
import { GetDownloadLinkFileInputs } from "@dto";

@InputType()
export class GetDownloadLinkFileInputsGQL extends GetDownloadLinkFileInputs {
  @Field(() => String, { nullable: false })
  fileId: string;
}
