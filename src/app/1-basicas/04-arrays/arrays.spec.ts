import { obtenerNombres } from './arrays';

const NOMBRE = 'Eva';
describe('Arrays', () => {
  it('obtenerNombres: Contiene datos el array', () => {
    const res = obtenerNombres();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it(`obtenerNombres: Contiene el nombre ${NOMBRE}`, () => {
    const res = obtenerNombres();
    expect(res).toContain(NOMBRE);
  });
});
