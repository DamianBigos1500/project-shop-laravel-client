import Router from 'next/router';

export const navigateToProductDetails = (
  productId: number | string | string[] | undefined,
  undefined: any,
  options: any
) => {
  Router.push(`/details/` + productId, undefined, options);
};
