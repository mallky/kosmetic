/**
 * scroll function
 * @param start - start position
 * @param end - end position
 * @param direction
 */
const scrollFunc = (start: number, end: number, direction?: number) => {
  const _direction: number = direction || 1;
  const timeNow = performance.now();
  const velocity = 1.3;
  const acceleration = 0.01;

  const scroll = (time) => {
    const timePassed = time - timeNow;
    const _start: number = start + _direction * (timePassed * velocity + acceleration * Math.pow(timePassed, 2));
    const isScrollEnd: boolean = _direction > 0 ? _start > end : _start < end;

    window.scroll(start, _start);

    if (!isScrollEnd) {
      requestAnimationFrame(scroll);
    } else {
      window.scroll(start, end);
    }
  };

  requestAnimationFrame(scroll);
};

export {
  scrollFunc
};