import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Model } from "mongoose";
import { IToken } from "../helpers";
import { User } from "../models";
import { InjectModel } from "@nestjs/mongoose";
import { EnvironmentVariableTypeEnum } from "../enums";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get(EnvironmentVariableTypeEnum.JWT_SECRET),
    });
  }

  async validate(input: IToken): Promise<User | false> {
    const user = await this.userModel.findById(input.id);

    if (!user) {
      return false;
    }

    return user;
  }
}
