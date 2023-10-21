import { HttpException, HttpStatus } from "@nestjs/common";

export interface ICustomError {
  status: number;
  description: string;
}

export class CustomError extends HttpException {
  constructor({ description, status }: ICustomError) {
    super(description, status);
  }
}

export const RESUME_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Resume Not Found!",
};

export const USER_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "User Not Found!",
};

export const USERNAME_OR_PASSWORD_IS_INCORRECT: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Username or Password is Incorrect!",
};

export const USER_WITH_THIS_USERNAME_ALREADY_EXISTS: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "User with this Username Already exists!",
};
