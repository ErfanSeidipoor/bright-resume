export const checkEnv = (serviceEnum: object) => {
  for (const key of Object.keys(serviceEnum)) {
    if (!process.env[key]) {
      console.log({ key });
      throw new Error("Environment Variable of " + key + " must be Defined");
    }
  }
};
