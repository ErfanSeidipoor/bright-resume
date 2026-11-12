import { clientApi } from "../client-api";

export const signOut = async (): Promise<void> => {
  await clientApi("/api/sign-out", "POST");
};
