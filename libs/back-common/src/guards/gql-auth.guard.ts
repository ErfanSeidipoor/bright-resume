import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

export class GqlAuthGuard extends AuthGuard("jwt") {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  override async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    let user;
    if (context.getType() === "http") {
      user = context.switchToHttp().getRequest().user;
    }

    user = GqlExecutionContext.create(context).getContext().req.user;
    return user.type === "JWT";
  }
}

export class GqlOAuthGuard extends AuthGuard("jwt") {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  override async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    let user;
    if (context.getType() === "http") {
      user = context.switchToHttp().getRequest().user;
    }

    user = GqlExecutionContext.create(context).getContext().req.user;
    return user.type === "OAuth";
  }
}
