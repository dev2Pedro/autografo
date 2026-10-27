import { Band, pickBand } from './bands';

const RADIATORS_BY_POWER: readonly Band<number>[] = [
  { upTo: 500, value: 4 },
  { upTo: 750, value: 5 },
  { upTo: 1000, value: 6 },
  { upTo: Number.POSITIVE_INFINITY, value: 8 },
];

export function getRadiatorCount(powerKva: number): number {
  return pickBand(RADIATORS_BY_POWER, powerKva);
}
