import qs from "qs";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // build request api
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}
    }`;

  //trigger api call
  const response = await fetch(requestUrl, mergedOptions);

  // handle response
  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("error in the database");
  }
  const data = await response.json();
  return data;
}
