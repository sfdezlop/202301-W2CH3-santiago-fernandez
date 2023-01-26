export function arrayLength(a) {
  let length = -1;
  do {
    length++;
  } while (typeof a[length] !== 'undefined');

  return length; //return the length of a
}

export function arrayPush(a, b) {
  let indexForB = arrayLength(a);
  a[indexForB] = b;
  return a; //return the mutation of a pushed with b
}

export function arrayPop(a) {
  const arrayTemp = [];
  for (let i = 0; i < arrayLength(a) - 1; i++) {
    arrayTemp[i] = a[i];
  }
  a = arrayTemp;
  return a; //return the mutation of a popped
}

export function arrayUnshift(a, b) {
  const arrayTemp = [];
  arrayTemp[0] = b;
  for (let i = 0; i < arrayLength(a); i++) {
    arrayTemp[i + 1] = a[i];
  }

  for (let i = 0; i < arrayLength(arrayTemp) - 1; i++) {
    a[i] = arrayTemp[i];
  }
  return a; //return the mutation of a unshifted with b
}
