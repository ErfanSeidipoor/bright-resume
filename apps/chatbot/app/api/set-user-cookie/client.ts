import { IUserCookie } from "@chatbot/cookie/user";
import { clientApi } from "../client-api";

export const setUserCookie = async (body: IUserCookie): Promise<unknown> => {
  const response = await clientApi("/api/set-user-cookie", "POST", body);
  return { response };
};
