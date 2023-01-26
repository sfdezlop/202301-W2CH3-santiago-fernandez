export function arrayLength(a) {
  let length = -1;
  do {
    length++;
  } while (typeof a[length] !== 'undefined');

  return length;
}

export function arrayPush(a, b) {
  let indexForB = arrayLength(a);
  a[indexForB] = b;
  return a;
}
