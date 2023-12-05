import { GetFilesFileArgs } from "@dto";
import { FileReasonEnum } from "@enums";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class GetFilesFileArgsGQL extends GetFilesFileArgs {
  @Field(() => String, { nullable: true })
  resumeId?: string = "";

  @Field(() => FileReasonEnum, { nullable: true })
  reason?: FileReasonEnum;
}
