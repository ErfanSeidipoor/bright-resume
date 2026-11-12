import { registerEnumType } from "@nestjs/graphql";

import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

registerEnumType(ResumeColorEnum, {
  name: "ResumeColorEnum",
});

registerEnumType(ResumeFontFamilyEnum, {
  name: "ResumeFontFamilyEnum",
});

registerEnumType(ResumeFontSizeEnum, {
  name: "ResumeFontSizeEnum",
});

export * from "@enums";
export * from "./environment-variable.enum";
