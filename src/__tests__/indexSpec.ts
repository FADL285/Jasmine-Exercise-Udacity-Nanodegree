import arrays from '../utilities/arrays';
import numbers from '../utilities/numbers';
import strings from '../utilities/strings';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

describe('Testing the arrays module functions', () => {
  it('Should be concatenate 2 arrays - Should be not equal 1st array', () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
  });

  it('Should add numbers in  array and be truthy value', () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
  });

  it('Should not have large number because it string array, return 0 - Falsy value', () => {
    expect(arrays.lgNum(wordArr)).toBeFalsy();
  });

  it('Should not have 3rd index in array (rabbit)', () => {
    expect(arrays.cut3(wordArr)).not.toContain('rabbit');
  });
});
