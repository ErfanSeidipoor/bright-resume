import { IToken, generateUserToken } from "@back-common/helpers";
import { JwtService } from "@nestjs/jwt";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";

export interface IGenerateAuthorizationHeader {
  username?: string;
  email?: string;
  id?: string;
  createdAt?: Date;
}

export const generateAuthorizationHeader = ({
  username,
  email,
  id,
  createdAt,
}: IGenerateAuthorizationHeader): {
  key: string;
  value: string;
  token: IToken;
} => {
  const jwtService = new JwtService({ secret: process.env.JWT_SECRET });

  const token = generateUserToken({
    createdAt: createdAt || new Date(),
    id: id || randomUUID(),
    username: username || faker.internet.userName(),
    email: email || faker.internet.email(),
  });

  return {
    key: "Authorization",
    value: `Bearer ${jwtService.sign(token)}`,
    token,
  };
};
