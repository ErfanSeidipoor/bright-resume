import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { CurrentUser } from "../../decorators/current-user.decorator";
import { GqlAuthGuard } from "../../guards/gql-auth.guard";
import { User } from "../../models";
import { SignInAuthInputsGQL, SignUpAuthInputsGQL } from "./dto";
import { AuthService } from "./auth.service";

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => User, { nullable: false })
  @UseGuards(GqlAuthGuard)
  async getProfile(@CurrentUser() user: User) {
    return this.authService.getById(user.id);
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
