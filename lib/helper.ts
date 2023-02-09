import Router from 'next/router';

const navigateBack = () => {
  if (
    window.history.length > 1 &&
    document.referrer.indexOf(window.location.host) !== -1
  ) {
    Router.back();
  } else {
    Router.replace('');
  }

  Router.push('/');
};
export default navigateBack;
