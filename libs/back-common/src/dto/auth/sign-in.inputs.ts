import { Field, InputType } from "@nestjs/graphql";
import { SignInAuthInputs } from "@dto";

@InputType()
export class SignInAuthInputsGQL extends SignInAuthInputs {
  @Field(() => String, { nullable: false })
  username: string;

  @Field(() => String, { nullable: false })
  password: string;
}
