import { SignInAuthInputs, SignUpAuthInputs } from "@dto";
import { JwtService } from "@nestjs/jwt";
import {
  CustomError,
  USERNAME_OR_PASSWORD_IS_INCORRECT,
  USER_NOT_FOUND,
  USER_WITH_THIS_USERNAME_ALREADY_EXISTS,
} from "@bright-resume/errors";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  generateHashPassword,
  generateUserToken,
  verifyPassword,
} from "@back-common/helpers";
import { User } from "../../models";
import { EnvironmentVariablesEnum } from "../../enums";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService
  ) {}

  async getById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    return user;
  }

  async signIn(inputs: SignInAuthInputs): Promise<User> {
    const { password, username } = inputs;

    const user = await this.userModel.findOne({ username });

    if (!user) {
      throw new CustomError(USERNAME_OR_PASSWORD_IS_INCORRECT);
    }

    const isVerify = await verifyPassword(user.password, password);

    if (!isVerify) {
      throw new CustomError(USERNAME_OR_PASSWORD_IS_INCORRECT);
    }

    const token = await this.jwtService.signAsync(generateUserToken(user), {
      secret: this.configService.get(EnvironmentVariablesEnum.JWT_SECRET),
    });

    user.token = token;

    return user;
  }

  async signUp(inputs: SignUpAuthInputs): Promise<User> {
    const { password, username, name } = inputs;

    const user = await this.userModel.findOne({ username });

    if (user) {
      throw new CustomError(USER_WITH_THIS_USERNAME_ALREADY_EXISTS);
    }

    const newUser = new this.userModel({
      username,
      name,
      password: await generateHashPassword(password),
    });

    const token = this.jwtService.sign(generateUserToken(newUser), {
      secret: this.configService.get(EnvironmentVariablesEnum.JWT_SECRET),
    });

    await newUser.save();
    newUser.token = token;

    return newUser;
  }
}
