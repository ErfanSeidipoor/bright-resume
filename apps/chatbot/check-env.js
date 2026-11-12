require("dotenv").config();

const EnvironmentVariables = ["MODE", "BACK_URL"];

for (const key of EnvironmentVariables) {
  if (!process.env[key]) {
    throw new Error(key + " must be Defined");
  }
}
