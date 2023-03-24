import { useRouter } from 'next/router';

export default function useSearch() {
  const router = useRouter();

  const filterSearch = (path: any = null, queryParams: any, options: any) => {
    let query: any = {};
    query = options?.clearQuery ? {} : router.query;

    const pathname = path ?? router.pathname;

    Object.entries(queryParams).map(([key, val]: any) => {
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
