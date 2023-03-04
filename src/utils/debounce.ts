import { timeoutType } from '@/types/timeoutType';

function debounce(cb: any, delay = 1000) {
  let timeout: timeoutType;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
export default debounce;
