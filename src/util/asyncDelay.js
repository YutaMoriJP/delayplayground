const asyncDelay = (dispatchState, ms = 0, timerID) => {
  return new Promise((res) => {
    timerID.current = setTimeout(() => {
      res(dispatchState());
    }, ms);
  });
};

export default asyncDelay;
