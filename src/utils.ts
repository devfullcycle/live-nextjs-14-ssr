export function makeSearchLink({ name, page }: { name?: string; page?: number }) {
  let searchLink = `/products`;
  const searchParams = new URLSearchParams();

  if (name) {
    searchParams.append("name", name);
  }

  if (page && page > 1) {
    searchParams.append("page", page.toString());
  }

  searchLink = searchParams.toString()
    ? `${searchLink}?${searchParams}`
    : searchLink;

  return searchLink;
}
