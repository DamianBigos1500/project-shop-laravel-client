function throttle(cb: (...args: string[]) => any, interval = 1000) {
  let shouldWait: boolean = false;
  let waitingArgs: any;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, interval);
    }
  };

  return (...args: any) => {
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
