import { registerEnumType } from "@nestjs/graphql";

import { FileReasonEnum, FileTypeEnum, FileStatusEnum } from "@enums";

registerEnumType(FileReasonEnum, {
  name: "FileReasonEnum",
});

registerEnumType(FileTypeEnum, {
  name: "FileTypeEnum",
});

registerEnumType(FileStatusEnum, {
  name: "FileStatusEnum",
});

export * from "@enums";
export * from "./environment-variable.enum";
