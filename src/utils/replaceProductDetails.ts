import Router from 'next/router';

export default function replaceProductDetails(
  productId: number | string | string[] | undefined,
  as?: object | undefined,
  options: object = { scroll: false }
) {
  Router.replace(`/details/` + productId, as, options);
}
