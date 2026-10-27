import { getBushingCounts } from './bushings';
import { hasConservator } from './conservator';
import { getMinDimensions } from './min-dimensions';
import { getRadiatorCount } from './radiators';
import { DrawingConfig, TransformerParams } from './types';

// Valor informado vale se for maior ou igual ao mínimo da faixa; senão, vale o mínimo.
function atLeast(informed: number | null | undefined, minimum: number): number {
  return Math.max(informed ?? minimum, minimum);
}

export function applyRules(params: TransformerParams): DrawingConfig {
  const { powerKva } = params;
  const bushings = getBushingCounts(params.phases);
  const min = getMinDimensions(powerKva);

  return {
    radiatorCount: getRadiatorCount(powerKva),
    bushingCountHv: bushings.hv,
    bushingCountLv: bushings.lv,
    hasTank: params.hasTank,
    hasConservator: hasConservator(powerKva),
    widthMm: atLeast(params.widthMm, min.widthMm),
    heightMm: atLeast(params.heightMm, min.heightMm),
    depthMm: atLeast(params.depthMm, min.depthMm),
  };
}
