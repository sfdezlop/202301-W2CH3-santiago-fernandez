export const testCases = [
  {
    functionName: 'arrayLength',
    arrayInput: [0, 0, 0],
    secondParameter: null,
    labelWhen: ' Where the number of elements are ',
    labelResult: ' Then has a length of ',
    result: 3,
  },
  {
    functionName: 'arrayLength',
    arrayInput: [0, 0, 0, {}],
    secondParameter: null,
    labelWhen: ' Where the number of elements are ',
    labelResult: ' Then has a length of ',
    result: 4,
  },
  {
    functionName: 'arrayPush',
    arrayInput: [0, 0],
    secondParameter: 21,
    labelWhen: ' Where the number of elements are ',
    labelResult:
      ' Then has a new element at index 3 with a value of 21 when is pushed value ',
    result: 21,
  },
  {
    functionName: 'arrayPush',
    arrayInput: [0, 0, 0],
    secondParameter: 'work',
    labelWhen: ' Where the number of elements are ',
    labelResult:
      ' Then has a new element at index 4 with a value of "work" when is pushed value ',
    result: 'work',
  },
  {
    functionName: 'arrayPop',
    arrayInput: [1, 2, 3],
    secondParameter: null,
    labelWhen: ' Where the number of elements are ',
    labelResult:
      ' Then has a new length, when is popped, of ',
    result: 2,
  },

  {
    functionName: 'arrayPop',
    arrayInput: ['a', 'b'],
    secondParameter: null,
    labelWhen: ' Where the number of elements are ',
    labelResult:
      ' Then has a new length, when is popped, of ',
    result: 1,
  },
  {
    functionName: 'arrayUnshift',
    arrayInput: [2, 3, 4],
    secondParameter: 1,
    labelWhen: ' Where the number of elements are ',
    labelResult:
      ' Then has a new element at index 0 with a value of 1 when is unshifted a value of ',
    result: 1,
  },
  
  {
    functionName: 'arrayUnshift',
    arrayInput: ['b', 'c', 'd'],
    secondParameter: 'a',
    labelWhen: ' Where the number of elements are ',
    labelResult:
      ' Then has a new element at index 0 with a value of "a" when is unshifted a value of ',
    result: 'a',
  },
];
