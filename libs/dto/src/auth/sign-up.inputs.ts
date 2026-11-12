import { IsString, MaxLength, IsNotEmpty } from "class-validator";

export class SignUpAuthInputs {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  password: string;
}
