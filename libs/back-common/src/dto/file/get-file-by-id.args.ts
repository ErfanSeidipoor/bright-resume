import { Field, InputType } from "@nestjs/graphql";
import { GetFileByIdFileArgs } from "@dto";

@InputType()
export class GetFileByIdFileArgsGQL extends GetFileByIdFileArgs {
  @Field(() => String, { nullable: false })
  fileId: string;
}
