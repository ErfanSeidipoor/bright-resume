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
