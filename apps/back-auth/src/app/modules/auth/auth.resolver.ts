import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { UserId } from "@back-common/decorators";
import { GqlAuthGuard } from "@back-common/guards";
import { User } from "@@back-auth/app/models";
import { SignInAuthInputsGQL, SignUpAuthInputsGQL } from "@back-common/dto";
import { AuthService } from "./auth.service";

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => User, { nullable: false })
  @UseGuards(GqlAuthGuard)
  async getProfile(@UserId() userId: string) {
    return this.authService.getById(userId);
  }

  @Mutation(() => User)
  async signUp(
    @Args("SignUpAuthInputs")
    inputs: SignUpAuthInputsGQL
  ): Promise<User> {
    return await this.authService.signUp(inputs);
  }

  @Mutation(() => User)
  async signIn(
    @Args("SignInAuthInputs")
    inputs: SignInAuthInputsGQL
  ): Promise<User> {
    return await this.authService.signIn(inputs);
  }
}
