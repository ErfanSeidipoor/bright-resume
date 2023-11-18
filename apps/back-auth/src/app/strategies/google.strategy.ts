import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy } from "passport-google-oauth20";
import { EnvironmentVariablesEnum } from "../enums";
import { User } from "../models";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService
  ) {
    super({
      clientID: configService.get(EnvironmentVariablesEnum.GOOGLE_CLIENT_ID),
      clientSecret: configService.get(
        EnvironmentVariablesEnum.GOOGLE_CLIENT_SECRET
      ),
      callbackURL:
        configService.get(EnvironmentVariablesEnum.SERVER_URL) +
        "/auth/login/google/callback",
      scope: ["email", "profile"],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: {
      _json: {
        sub: string;
        name: string;
        given_name: string;
        family_name: string;
        picture: string;
        email: string;
        email_verified: true;
        locale: "en";
      };
    }
  ) {
    const {
      _json: { email, name, picture },
    } = profile;

    let user = await this.userModel.findOne({ email });

    if (!user) {
      user = new this.userModel();
    }

    user.email = email;
    user.name = name;
    user.picture = picture;

    await user.save();
    return user;
  }
}
