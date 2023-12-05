import { Field, InputType } from "@nestjs/graphql";
import { GetDownloadLinkFileArgs } from "@dto";

@InputType()
export class GetDownloadLinkFileArgsGQL extends GetDownloadLinkFileArgs {
  @Field(() => String, { nullable: false })
  fileId: string;
}
