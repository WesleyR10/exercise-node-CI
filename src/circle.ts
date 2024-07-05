export function areaCirculo(raio: number): number {
  if (raio < 0) throw new Error("O raio não pode ser negativo.");
  return Math.PI * raio * raio;
}