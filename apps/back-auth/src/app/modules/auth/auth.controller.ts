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

  @Get("/login/google")
  @UseGuards(AuthGuard("google"))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async loginGoogle() {}

  @Get("/login/google/callback")
  @UseGuards(AuthGuard("google"))
  async loginGoogleCallback(
    @Req() request: Request,
    @Res() response: Response
  ) {
    const token = await this.authService.generateUserToken(request.user);
    response.redirect(
      this.configService.get(EnvironmentVariablesEnum.CLIENT_AUTH_URL) +
        `?token=${token}`
    );
  }

  @Get("/login/github")
  @UseGuards(AuthGuard("github"))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async loginGithub() {}

  @Get("/login/github/callback")
  @UseGuards(AuthGuard("github"))
  async loginGithubCallback(
    @Req() request: Request,
    @Res() response: Response
  ) {
    const token = await this.authService.generateUserToken(request.user);
    response.redirect(
      this.configService.get(EnvironmentVariablesEnum.CLIENT_AUTH_URL) +
        `?token=${token}`
    );
  }

  @Get("/login/linkedin")
  @UseGuards(AuthGuard("linkedin"))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async loginLinkedin() {}

  @Get("/login/linkedin/callback")
  @UseGuards(AuthGuard("linkedin"))
  async loginLinkedinCallback(
    @Req() request: Request,
    @Res() response: Response
  ) {
    const token = await this.authService.generateUserToken(request.user);
    response.redirect(
      this.configService.get(EnvironmentVariablesEnum.CLIENT_AUTH_URL) +
        `?token=${token}`
    );
  }
}
