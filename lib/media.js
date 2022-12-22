import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
