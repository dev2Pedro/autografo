import { getBushingCounts } from './bushings';

describe('getBushingCounts', () => {
  it('MONO: 1 bucha AT e 2 buchas BT', () => {
    expect(getBushingCounts('MONO')).toEqual({ hv: 1, lv: 2 });
  });

  it('TRI: 3 buchas AT e 3 buchas BT', () => {
    expect(getBushingCounts('TRI')).toEqual({ hv: 3, lv: 3 });
  });

  it('retorna cópia: alterar o resultado não afeta chamadas seguintes', () => {
    const first = getBushingCounts('TRI');
    first.hv = 99;
    expect(getBushingCounts('TRI')).toEqual({ hv: 3, lv: 3 });
  });
});
