import { Field, InputType } from "@nestjs/graphql";
import { GetFileByIdFileInputs } from "@dto";

@InputType()
export class GetFileByIdFileInputsGQL extends GetFileByIdFileInputs {
  @Field(() => String, { nullable: false })
  fileId: string;
}
