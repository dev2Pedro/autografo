// Faixa fechada à direita: vale para entradas `<= upTo`. As faixas vêm em ordem crescente
// e a última deve ter `upTo: Infinity`.
export interface Band<T> {
  upTo: number;
  value: T;
}

export function pickBand<T>(bands: readonly Band<T>[], input: number): T {
  if (!Number.isFinite(input) || input <= 0) {
    throw new RangeError('A potência deve ser um número finito maior que zero');
  }
  const band = bands.find((candidate) => input <= candidate.upTo);
  if (!band) {
    throw new RangeError('Nenhuma faixa cobre a entrada informada');
  }
  return band.value;
}
