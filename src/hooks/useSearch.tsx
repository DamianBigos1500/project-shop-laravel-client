import { useRouter } from 'next/router';

export default function useSearch() {
  const router = useRouter();

  const filterSearch = (queryParams: any) => {
    const { query } = router;

    Object.entries(queryParams).map(([key, val]: any) => {
      query[key] = val;
    });

    router.replace(
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
