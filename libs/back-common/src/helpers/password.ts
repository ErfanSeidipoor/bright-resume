import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
const scrypt = promisify(_scrypt);

export const generateHashPassword = async (
  password: string
): Promise<string> => {
  // generate the salt
  const salt = randomBytes(8).toString("hex");

  // hash password and salt together
  const hash = (await scrypt(password, salt, 32)) as Buffer;

  // join the hashed result and salt together
  return salt + "." + hash.toString("hex");
};

export const verifyPassword = async (
  hashedPassword: string,
  password: string
): Promise<boolean> => {
  if (!hashedPassword) return false;

  const [salt, storedHash] = hashedPassword.split(".");

  const hash = (await scrypt(password, salt, 32)) as Buffer;

  if (hash.toString("hex") !== storedHash) {
    return false;
  }

  return true;
};
