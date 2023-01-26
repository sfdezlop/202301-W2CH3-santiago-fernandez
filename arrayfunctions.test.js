import { arrayLength } from './arrayfunctions.js';
import { arrayPush } from './arrayfunctions.js';
import { arrayPop } from './arrayfunctions.js';
import { arrayUnshift } from './arrayfunctions.js';
import { testCases } from './arrayfunctions.test.cases';

describe('Testing of function arrayLength with a table of test cases', () => {
  describe('Given an array', () => {
    testCases
      .filter((item) => item.functionName === 'arrayLength')
      .forEach((element) => {
        test(
          element.arrayInput +
            element.labelWhen +
            element.arrayInput.length +
            element.labelResult +
            element.result,
          () => {
            const r = arrayLength(element.arrayInput);
            expect(r).toBe(element.result);
          }
        );
      });
  });
});

describe('Testing of function arrayPush with a table of test cases', () => {
  describe('Given an array', () => {
    testCases
      .filter((item) => item.functionName === 'arrayPush')
      .forEach((element) => {
        test(
          element.arrayInput +
            element.labelWhen +
            element.arrayInput.length +
            element.labelResult +
            element.result,
          () => {
            arrayPush(element.arrayInput, element.secondParameter);
            const r = element.arrayInput[arrayLength(element.arrayInput) - 1];
            expect(r).toBe(element.result);
          }
        );
      });
  });
});

describe('Testing of function arrayPop with a table of test cases', () => {
  describe('Given an array', () => {
    testCases
      .filter((item) => item.functionName === 'arrayPop')
      .forEach((element) => {
        test(
          element.arrayInput +
            element.labelWhen +
            element.arrayInput.length +
            element.labelResult +
            element.result,
          () => {
            const r = arrayLength(arrayPop(element.arrayInput));
            expect(r).toBe(element.result);
          }
        );
      });
  });
});

describe('Testing of function arrayUnshift with a table of test cases', () => {
  describe('Given an array', () => {
    testCases
      .filter((item) => item.functionName === 'arrayUnshift')
      .forEach((element) => {
        test(
          element.arrayInput +
            element.labelWhen +
            element.arrayInput.length +
            element.labelResult +
            element.result,
          () => {
            const r = arrayUnshift(
              element.arrayInput,
              element.secondParameter
            )[0];
            expect(r).toBe(element.result);
          }
        );
      });
  });
});

//Test sencillos
// describe('Testing of function arrayLength', () => {
//   test('[0,0] It should be 2', () => {
//     const r = arrayLength([0, 0]);
//     expect(r).toBe(2);
//   });
// });

// describe('Testing of function arrayLength', () => {
//   test('[0,0,{}] It should be 3', () => {
//     const r = arrayLength([0, 0, {}]);
//     expect(r).toBe(3);
//   });
// });
