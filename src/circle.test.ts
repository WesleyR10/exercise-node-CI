import { areaCirculo } from "./circle";

describe('Testes para área do círculo', () => {
    test('Área de um círculo com raio 1 deve ser π', () => {
        expect(areaCirculo(1)).toBe(Math.PI);
    });

    test('Área de um círculo com raio 0 deve ser 0', () => {
        expect(areaCirculo(0)).toBe(0);
    });

    test('Passar um raio negativo deve lançar um erro', () => {
        expect(() => areaCirculo(-1)).toThrow("O raio não pode ser negativo.");
    });
});