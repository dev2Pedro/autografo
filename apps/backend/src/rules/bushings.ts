import { Phases } from './types';

export interface BushingCounts {
  hv: number;
  lv: number;
}

const BUSHINGS_BY_PHASES: Record<Phases, BushingCounts> = {
  MONO: { hv: 1, lv: 2 },
  TRI: { hv: 3, lv: 3 },
};

export function getBushingCounts(phases: Phases): BushingCounts {
  return { ...BUSHINGS_BY_PHASES[phases] };
}
