import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy } from "passport-github2";
import { EnvironmentVariablesEnum } from "../enums";
import { User } from "../models";

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, "github") {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService
  ) {
    super({
      clientID: configService.get(EnvironmentVariablesEnum.GITHUB_CLIENT_ID),
      clientSecret: configService.get(
        EnvironmentVariablesEnum.GITHUB_CLIENT_SECRET
      ),
      callbackURL:
        configService.get(EnvironmentVariablesEnum.SERVER_URL) +
        "/auth/login/github/callback",
      scope: ["user:email"], // Request only the necessary scope
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: {
      id: string;
      username: string;
      name: string;
      email: string;
      avatar_url: string;
      // _json: any;
    }
  ) {
    const { email, name, avatar_url } = profile;

    let user = await this.userModel.findOne({ email });

    if (!user) {
      user = await this.userModel.create({ email });
    }

    user.name = name;
    user.picture = avatar_url;

    await user.save();
    return user;
  }
}
