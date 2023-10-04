import { IsOptional, IsString } from "class-validator";

export class GetResumesArgs {
  @IsOptional()
  @IsString()
  name?: string;
}
