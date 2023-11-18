import { registerEnumType } from "@nestjs/graphql";

import { FileReasonEnum, FileTypeEnum } from "@enums";

registerEnumType(FileReasonEnum, {
  name: "FileReasonEnum",
});

registerEnumType(FileTypeEnum, {
  name: "FileTypeEnum",
});

export * from "@enums";
export * from "./environment-variable.enum";
