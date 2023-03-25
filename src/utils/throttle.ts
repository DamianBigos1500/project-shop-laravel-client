function throttle(cb: (...args: string[]) => {}, interval = 1000) {
  let shouldWait: boolean = false;
  let waitingArgs: string[] | null;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, interval);
    }
  };

  return (...args: string[]) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, interval);
  };
}
export default throttle;
