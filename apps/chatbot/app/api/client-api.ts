import axios, { Method } from "axios";
import { buildUrlClient } from "@utils";

export async function clientApi<ResponseType>(
  url: string,
  method: Method = "GET",
  body?: object,
  params: { [key: string]: string | number } = {},
  queries: { [key: string]: object } = {}
): Promise<ResponseType> {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    params: queries,
  };

  try {
    const response = await axios(buildUrlClient(url, params), options);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
