import { hasConservator } from './conservator';

describe('hasConservator', () => {
  test.each([
    [1, false],
    [500, false],
    [500.01, true],
    [750, true],
    [1000, true],
    [5000, true],
  ])('%p kVA -> conservador %p', (powerKva, expected) => {
    expect(hasConservator(powerKva)).toBe(expected);
  });

  test.each([0, -1, Number.NaN])(
    'potência inválida (%p) lança RangeError',
    (powerKva) => {
      expect(() => hasConservator(powerKva)).toThrow(RangeError);
    },
  );
});
