// Tipos próprios da camada de regras: sem imports do Nest ou do Prisma.
// `phases` é uma união de strings, não o enum do Prisma.
export type Phases = 'MONO' | 'TRI';

export interface TransformerParams {
  powerKva: number;
  primaryVoltage: number;
  secondaryVoltage: number;
  phases: Phases;
  widthMm?: number | null;
  heightMm?: number | null;
  depthMm?: number | null;
  hasTank: boolean;
}

export interface DrawingConfig {
  radiatorCount: number;
  bushingCountHv: number;
  bushingCountLv: number;
  hasTank: boolean;
  hasConservator: boolean;
  widthMm: number;
  heightMm: number;
  depthMm: number;
}
