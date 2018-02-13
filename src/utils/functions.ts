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

const toJSON = (form: any) => {
  const obj = {};
  const elements = form.querySelectorAll('input, select, textarea');
  
  for (let i = 0; i < elements.length; ++i) {
    const element = elements[i];
    const name = element.name;
    const value = element.value;
    if (name) {
      obj[ name ] = value;
    }
  }
  
  return JSON.stringify(obj);
};

export {
  scrollFunc,
  toJSON
};