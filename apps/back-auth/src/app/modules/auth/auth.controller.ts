import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { EnvironmentVariablesEnum } from "@@back-auth/app/enums";
import { ConfigService } from "@nestjs/config";

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly configService: ConfigService
  ) {}

  @Get("/sign-in/google")
  @UseGuards(AuthGuard("google"))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async signInGoogle() {}

  @Get("/sign-in/google/callback")
  @UseGuards(AuthGuard("google"))
  async signInGoogleCallback(
    @Req() request: Request,
    @Res() response: Response
  ) {
    const token = await this.authService.generateOAuthUserToken(request.user);
    response.redirect(
      this.configService.get(EnvironmentVariablesEnum.CLIENT_AUTH_URL) +
        `?oauth-token=${token}`
    );
  }

  @Get("/sign-in/github")
  @UseGuards(AuthGuard("github"))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async signInGithub() {}

  @Get("/sign-in/github/callback")
  @UseGuards(AuthGuard("github"))
  async signInGithubCallback(
    @Req() request: Request,
    @Res() response: Response
  ) {
    const token = await this.authService.generateOAuthUserToken(request.user);
    response.redirect(
      this.configService.get(EnvironmentVariablesEnum.CLIENT_AUTH_URL) +
        `?oauth-token=${token}`
    );
  }

  @Get("/sign-in/linkedin")
  @UseGuards(AuthGuard("linkedin"))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async signInLinkedin() {}

  @Get("/sign-in/linkedin/callback")
  @UseGuards(AuthGuard("linkedin"))
  async signInLinkedinCallback(
    @Req() request: Request,
    @Res() response: Response
  ) {
    const token = await this.authService.generateOAuthUserToken(request.user);
    response.redirect(
      this.configService.get(EnvironmentVariablesEnum.CLIENT_AUTH_URL) +
        `?oauth-token=${token}`
    );
  }
}
