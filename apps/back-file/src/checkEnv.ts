import { EnvironmentVariablesEnum } from "./app/enums";

export const checkEnv = () => {
  for (const key of Object.keys(EnvironmentVariablesEnum)) {
    if (!process.env[key]) {
      console.log({ key });
      throw new Error("must be Defined");
    }
  }
};
