export default function createUrlString(obj: any) {
  const queryLink = Object.entries(obj)
    .map(([key, val]) => `${key}=${val}`)
    .join('&');

  console.log(queryLink);
  return queryLink;
}
