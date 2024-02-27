import queryString, { StringifiableRecord } from "query-string";

export const queryStringUrl = (url: string, query: StringifiableRecord) => {
  return queryString.stringifyUrl({
    url: url,
    query: { populate: "*", ...query },
  });
};
