import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { UserService } from "./user.service";
import { User } from "../../models";
import { SignInAuthInputsGQL, SignUpAuthInputsGQL } from "./dto";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { nullable: false })
  async getProfile() {
    return this.userService.profile();
  }

  @Mutation(() => User)
  async signUp(
    @Args("SignUpAuthInputs")
    inputs: SignUpAuthInputsGQL
  ): Promise<User> {
    return await this.userService.signUp(inputs);
  }

  @Mutation(() => User)
  async signIn(
    @Args("SignInAuthInputs")
    inputs: SignInAuthInputsGQL
  ): Promise<User> {
    return await this.userService.signIn(inputs);
  }
}
