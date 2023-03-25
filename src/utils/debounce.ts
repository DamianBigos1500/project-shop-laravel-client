import { timeoutType } from '@/types/timeoutType';

function debounce(cb: (...args: string[]) => {}, delay = 1000) {
  let timeout: timeoutType;

  return (...args: string[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
export default debounce;
