import Router from 'next/router';

export const navigateToProductDetails = (productId: number) => {
  Router.push(`/details/` + productId);
};
