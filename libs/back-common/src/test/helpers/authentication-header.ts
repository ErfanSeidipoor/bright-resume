import { generateUserToken } from "@back-common/helpers";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";

export interface IGenerateAuthorizationHeader {
  username?: string;
  email?: string;
  id?: string;
  createdAt: Date;
}

export const generateAuthorizationHeader = ({
  username,
  email,
  id,
  createdAt,
}: IGenerateAuthorizationHeader): { key: string; value: string } => ({
  key: "Authorization",
  value: `Bearer ${generateUserToken({
    createdAt: createdAt || new Date(),
    id: id || randomUUID(),
    username: username || faker.internet.userName(),
    email: email || faker.internet.email(),
  })}`,
});
