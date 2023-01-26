export function arrayLength(a) {
  let length = -1;
  do {
    length++;
  } while (typeof a[length] !== 'undefined');

  return length;
}
