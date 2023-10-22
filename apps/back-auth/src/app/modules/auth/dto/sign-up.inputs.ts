import { Field, InputType } from "@nestjs/graphql";
import { SignUpAuthInputs } from "@bright-resume/dto";

@InputType()
export class SignUpAuthInputsGQL extends SignUpAuthInputs {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  username: string;

  @Field(() => String, { nullable: false })
  password: string;
}
