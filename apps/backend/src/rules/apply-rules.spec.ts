import { applyRules } from './apply-rules';
import { DrawingConfig, TransformerParams } from './types';

const base: TransformerParams = {
  powerKva: 500,
  primaryVoltage: 13800,
  secondaryVoltage: 380,
  phases: 'TRI',
  widthMm: 900,
  heightMm: 1200,
  depthMm: 700,
  hasTank: true,
};

// Os 3 transformadores do seed (prisma/seed.ts) e o resultado esperado em docs/rules.md.
const seedCases: [string, TransformerParams, DrawingConfig][] = [
  [
    '500 kVA',
    base,
    {
      radiatorCount: 4,
      bushingCountHv: 3,
      bushingCountLv: 3,
      hasTank: true,
      hasConservator: false,
      widthMm: 900,
      heightMm: 1200,
      depthMm: 700,
    },
  ],
  [
    '750 kVA',
    { ...base, powerKva: 750, widthMm: 1000, heightMm: 1300, depthMm: 800 },
    {
      radiatorCount: 5,
      bushingCountHv: 3,
      bushingCountLv: 3,
      hasTank: true,
      hasConservator: true,
      widthMm: 1000,
      heightMm: 1300,
      depthMm: 800,
    },
  ],
  [
    '1000 kVA',
    { ...base, powerKva: 1000, widthMm: 1100, heightMm: 1400, depthMm: 900 },
    {
      radiatorCount: 6,
      bushingCountHv: 3,
      bushingCountLv: 3,
      hasTank: true,
      hasConservator: true,
      widthMm: 1100,
      heightMm: 1400,
      depthMm: 900,
    },
  ],
];

describe('applyRules', () => {
  test.each(seedCases)('seed %s', (_name, params, expected) => {
    expect(applyRules(params)).toEqual(expected);
  });

  it('não muta a entrada', () => {
    const params = Object.freeze({ ...base });
    const snapshot = structuredClone(params);
    applyRules(params);
    expect(params).toEqual(snapshot);
  });

  it('MONO usa buchas de monofásico', () => {
    const config = applyRules({ ...base, phases: 'MONO' });
    expect([config.bushingCountHv, config.bushingCountLv]).toEqual([1, 2]);
  });

  it('dimensões ausentes ou nulas viram o mínimo da faixa', () => {
    const config = applyRules({
      ...base,
      widthMm: null,
      heightMm: undefined,
      depthMm: null,
    });
    expect([config.widthMm, config.heightMm, config.depthMm]).toEqual([
      900, 1200, 700,
    ]);
  });

  it('dimensões abaixo do mínimo sobem para o mínimo', () => {
    const config = applyRules({
      ...base,
      widthMm: 100,
      heightMm: 100,
      depthMm: 100,
    });
    expect([config.widthMm, config.heightMm, config.depthMm]).toEqual([
      900, 1200, 700,
    ]);
  });

  it('dimensões acima do mínimo são mantidas', () => {
    const config = applyRules({
      ...base,
      widthMm: 2000,
      heightMm: 2500,
      depthMm: 1800,
    });
    expect([config.widthMm, config.heightMm, config.depthMm]).toEqual([
      2000, 2500, 1800,
    ]);
  });

  it('ignora radiatorCount e bushingCount informados no cadastro', () => {
    const params = { ...base, radiatorCount: 99, bushingCount: 99 };
    const config = applyRules(params);
    expect(config.radiatorCount).toBe(4);
    expect(config.bushingCountHv + config.bushingCountLv).toBe(6);
  });

  it('hasTank passa direto', () => {
    expect(applyRules({ ...base, hasTank: false }).hasTank).toBe(false);
  });

  it('potência inválida lança RangeError', () => {
    expect(() => applyRules({ ...base, powerKva: 0 })).toThrow(RangeError);
  });
});
