import Router from 'next/router';

export const navigateToProductDetails = (
  productId: number | string | string[] | undefined,
  as?: object | undefined,
  options?: object
) => {
  Router.push(`/details/` + productId, as, options);
};
