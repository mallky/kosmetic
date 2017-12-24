const scrollFunc = (start: number, end: number, direction?: number) => {
  const _direction: number = direction || 1;
  const timeNow = performance.now();
  const velocity = 1.2;

  const scroll = (time) => {
    const timePassed = time - timeNow;
    const _start: number = start + _direction * timePassed * velocity;
    const isScrollEnd: boolean = _direction > 0 ? _start > end : _start < end;

    window.scroll(start, _start);

    if (!isScrollEnd) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

export {
  scrollFunc
};