import { Band, pickBand } from './bands';

const bands: readonly Band<string>[] = [
  { upTo: 10, value: 'baixa' },
  { upTo: 20, value: 'média' },
  { upTo: Number.POSITIVE_INFINITY, value: 'alta' },
];

describe('pickBand', () => {
  test.each([
    [0.01, 'baixa'],
    [10, 'baixa'],
    [10.01, 'média'],
    [20, 'média'],
    [20.01, 'alta'],
    [1e9, 'alta'],
  ])('%p -> %p (limite superior inclusivo)', (input, expected) => {
    expect(pickBand(bands, input)).toBe(expected);
  });

  it('lança RangeError quando nenhuma faixa cobre a entrada', () => {
    expect(() => pickBand([{ upTo: 10, value: 'baixa' }], 11)).toThrow(
      RangeError,
    );
  });

  test.each([0, -5, Number.NaN, Number.POSITIVE_INFINITY, '10' as never])(
    'entrada inválida (%p) lança RangeError',
    (input) => {
      expect(() => pickBand(bands, input)).toThrow(RangeError);
    },
  );
});
