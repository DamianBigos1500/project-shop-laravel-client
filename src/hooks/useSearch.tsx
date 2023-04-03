import { useRouter } from 'next/router';

type queryParamsType = {};
type optionsType = {
  clearQuery?: null | boolean;
  replace?: null | boolean;
};

export default function useSearch() {
  const router = useRouter();

  const filterSearch = (
    path: string | null = null,
    queryParams: queryParamsType,
    options: optionsType
  ) => {
    let query: any = {};
    query = options?.clearQuery ? {} : router.query;

    const pathname = path ?? router.pathname;

    Object.entries(queryParams).map(([key, val]) => {
      query[key] = val;
    });

    if (options?.replace) {
      router.replace(
        {
          pathname: pathname,
          query: query,
        },
        undefined,
        {
          scroll: false,
        }
      );
    } else {
      router.push(
        {
          pathname: pathname,
          query: query,
        },
        undefined,
        {
          scroll: false,
        }
      );
    }
  };

  return { filterSearch };
}
