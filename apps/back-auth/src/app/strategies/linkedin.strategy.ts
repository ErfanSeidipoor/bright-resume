import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy } from "passport-linkedin-oauth2";
import { EnvironmentVariablesEnum } from "../enums";
import { User } from "../models";

@Injectable()
export class LinkedInStrategy extends PassportStrategy(Strategy, "linkedin") {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService
  ) {
    super({
      clientID: configService.get(EnvironmentVariablesEnum.LINKEDIN_CLIENT_ID),
      clientSecret: configService.get(
        EnvironmentVariablesEnum.LINKEDIN_CLIENT_SECRET
      ),
      callbackURL:
        configService.get(EnvironmentVariablesEnum.SERVER_URL) +
        "/auth/login/linkedin/callback",
      scope: ["openid", "email", "profile"],
      state: true,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: {
      id: string;
      email: string;
      displayName: string;
      picture: string;
      // _json: any;
    }
  ) {
    const { email, displayName, picture } = profile;

    let user = await this.userModel.findOne({ email });
    if (!user) {
      user = await this.userModel.create({ email, name: displayName, picture });
    }
    user.name = displayName;
    user.picture = picture;
    await user.save();
    return user;
  }
}
