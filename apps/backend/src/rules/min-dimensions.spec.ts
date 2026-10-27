import { getMinDimensions } from './min-dimensions';

describe('getMinDimensions', () => {
  test.each([
    [500, { widthMm: 900, heightMm: 1200, depthMm: 700 }],
    [500.01, { widthMm: 1000, heightMm: 1300, depthMm: 800 }],
    [750, { widthMm: 1000, heightMm: 1300, depthMm: 800 }],
    [750.01, { widthMm: 1100, heightMm: 1400, depthMm: 900 }],
    [1000, { widthMm: 1100, heightMm: 1400, depthMm: 900 }],
    [1000.01, { widthMm: 1200, heightMm: 1500, depthMm: 1000 }],
  ])('%p kVA -> %p', (powerKva, expected) => {
    expect(getMinDimensions(powerKva)).toEqual(expected);
  });

  test.each([0, -1, Number.NaN])(
    'potência inválida (%p) lança RangeError',
    (powerKva) => {
      expect(() => getMinDimensions(powerKva)).toThrow(RangeError);
    },
  );
});
