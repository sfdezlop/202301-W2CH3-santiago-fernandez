import { arrayLength } from './arrayfunctions.js';
import { arrayPush } from './arrayfunctions.js';
import { testCases } from './arrayfunctions.test.cases';

//TESTS DE arrayLength
//Test sencillos
describe('Testing of function arrayLength', () => {
  test('[0,0] It should be 2', () => {
    const r = arrayLength([0, 0]);
    expect(r).toBe(2);
  });
});

describe('Testing of function arrayLength', () => {
  test('[0,0,{}] It should be 3', () => {
    const r = arrayLength([0, 0, {}]);
    expect(r).toBe(3);
  });
});

//Test basados en array de casos con Metodología Gerkin o GwT  (given when then)
describe('Testing of function arrayLength with a table of test cases', () => {
  describe('Given an array', () => {
    testCases
      .filter((item) => item.functionName === 'arrayLength')
      .forEach((element) => {
        test(
          'With a number of items of ' +
            element.label +
            ' then result should be ' +
            element.result,
          () => {
            const r = arrayLength(element.array);
            expect(r).toBe(element.result);
          }
        );
      });
  });
});

//TESTS DE arrayPush
// describe('Testing de la función arrayPush', () => {
//   test('When you apply function arrayPush to array [0,0] and element 21, the new length is 3', () => {
//     const arraytest = [0, 0];
//     const elementToPush = 21;
//     arrayPush(arraytest, elementToPush);
//     const r = arrayLength(arraytest);
//     expect(r).toBe(3);
//   });
// });
