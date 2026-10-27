import { Band, pickBand } from './bands';

const CONSERVATOR_BY_POWER: readonly Band<boolean>[] = [
  { upTo: 500, value: false },
  { upTo: Number.POSITIVE_INFINITY, value: true },
];

export function hasConservator(powerKva: number): boolean {
  return pickBand(CONSERVATOR_BY_POWER, powerKva);
}
