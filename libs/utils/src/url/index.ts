export const buildUrlServer = (
  baseUrl: string,
  params: { [key: string]: string | number } = {},
  queries: { [key: string]: any } = {}
): string => {
  let url = baseUrl;

  for (const key in params) {
    url = url.replace(":" + key, params[key].toString());
  }

  if (Object.keys(queries)) {
    const search = new URLSearchParams();

    for (const key in queries) {
      if (queries[key] instanceof Date) {
        search.append(key, queries[key].toString());
      } else {
        search.append(key, queries[key]);
      }
    }
    if (search.toString()) {
      url = url + "?" + search.toString();
    }
  }

  return url;
};

export const buildUrlClient = (
  baseUrl: string,
  params: { [key: string]: string | number } = {},
  queries: { [key: string]: any } = {}
): string => {
  let url = baseUrl;

  for (const key in params) {
    url = url.replace(":" + key, params[key].toString());
  }

  if (Object.keys(queries)) {
    const search = new URLSearchParams();

    for (const key in queries) {
      if (!queries[key]) continue;

      search.append(key, queries[key]);
    }

    if (search.toString()) {
      url = url + "?" + search.toString();
    }
  }

  return url;
};

export function parseUrl(url: string): {
  href: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  hash: string;
  queryParams: { key: string; value: string }[];
  origin: string;
} {
  const parsedUrl = new URL(url);

  const queryParams: { key: string; value: string }[] = [];

  const urlParams = new URLSearchParams(parsedUrl.search);
  for (const [key, value] of urlParams.entries()) {
    queryParams.push({
      key,
      value,
    });
  }

  return {
    href: parsedUrl.href,
    pathname: parsedUrl.pathname,
    port: parsedUrl.port,
    protocol: parsedUrl.protocol,
    search: parsedUrl.search,
    queryParams,
    hash: parsedUrl.hash,
    origin: parsedUrl.origin,
  };
}
