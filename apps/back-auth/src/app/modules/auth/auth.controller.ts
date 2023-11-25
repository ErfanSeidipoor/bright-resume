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

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}

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
    const { token } = await this.authService.signIn(request.user);
    response.cookie("token", token);
    response.redirect("http://localhost:3000");
  }
}
