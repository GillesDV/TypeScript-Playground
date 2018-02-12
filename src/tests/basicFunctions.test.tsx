import * as basicFunctions from './../components/basicFunctions';

it('sum of 1 + 1 = 2', () => {
  const result = basicFunctions.sum(1, 2);
  expect(result).toEqual(3);

});