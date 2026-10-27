import { Band, pickBand } from './bands';

export interface Dimensions {
  widthMm: number;
  heightMm: number;
  depthMm: number;
}

const MIN_DIMENSIONS_BY_POWER: readonly Band<Dimensions>[] = [
  { upTo: 500, value: { widthMm: 900, heightMm: 1200, depthMm: 700 } },
  { upTo: 750, value: { widthMm: 1000, heightMm: 1300, depthMm: 800 } },
  { upTo: 1000, value: { widthMm: 1100, heightMm: 1400, depthMm: 900 } },
  {
    upTo: Number.POSITIVE_INFINITY,
    value: { widthMm: 1200, heightMm: 1500, depthMm: 1000 },
  },
];

export function getMinDimensions(powerKva: number): Dimensions {
  return { ...pickBand(MIN_DIMENSIONS_BY_POWER, powerKva) };
}
