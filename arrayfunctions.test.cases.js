export const testCases = [
  {
    functionName: 'arrayLength',
    array: [0, 0, 0],
    secondParameter: null,
    label: '[0,0,0]',
    result: 3,
  },
  {
    functionName: 'arrayLength',
    array: [0, 0, 0, {}],
    secondParameter: null,
    label: '[0,0,0,{}]',
    result: 4,
  },
  {
    functionName: 'arrayPush',
    array: [0, 0],
    secondParameter: 21,
    label: '[0,0]',
    result: 2,
  },
  {
    functionName: 'arrayPush',
    array: [0, 0, 0],
    secondParameter: 30,
    label: '[0,0,0]',
    result: 4,
  },
];
