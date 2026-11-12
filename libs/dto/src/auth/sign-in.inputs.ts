import { IsString, MaxLength, IsNotEmpty } from "class-validator";

export class SignInAuthInputs {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  password: string;
}
