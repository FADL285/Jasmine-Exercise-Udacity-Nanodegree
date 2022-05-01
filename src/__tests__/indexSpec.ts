import myFun from '../index';

describe('Jasmine Demo', () => {
  it('expect myFun(5) to be 25', () => {
    expect(myFun(5)).toEqual(25);
  });
});
