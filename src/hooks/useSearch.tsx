import { useRouter } from 'next/router';

export default function useSearch() {
  const router = useRouter();

  const filterSearch = (queryParams: any) => {
    const { query } = router;

    Object.entries(queryParams).map(
      ([key, val]) => (query[key] = queryParams[key])
    );

    router.push(
      {
        pathname: router.pathname,
        query: query,
      },
      undefined,
      { scroll: false }
    );
  };

  return { filterSearch };
}
