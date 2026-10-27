import { getRadiatorCount } from './radiators';

describe('getRadiatorCount', () => {
  test.each([
    [1, 4],
    [499.99, 4],
    [500, 4],
    [500.01, 5],
    [750, 5],
    [750.01, 6],
    [1000, 6],
    [1000.01, 8],
    [5000, 8],
  ])('%p kVA -> %p radiadores', (powerKva, expected) => {
    expect(getRadiatorCount(powerKva)).toBe(expected);
  });

  test.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY, '500' as never])(
    'potência inválida (%p) lança RangeError',
    (powerKva) => {
      expect(() => getRadiatorCount(powerKva)).toThrow(RangeError);
    },
  );
});
