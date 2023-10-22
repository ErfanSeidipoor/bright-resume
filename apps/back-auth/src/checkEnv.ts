import { EnvironmentVariableTypeEnum } from "./app/enums";

export const checkEnv = () => {
  for (const key of Object.keys(EnvironmentVariableTypeEnum)) {
    if (!process.env[key]) {
      console.log({ key });
      throw new Error("must be Defined");
    }
  }
};
