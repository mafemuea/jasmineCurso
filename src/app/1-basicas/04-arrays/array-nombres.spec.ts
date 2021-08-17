import { ArrayNombres } from './array-nombre';
const PERSONA = {id: 1, nombre: 'Eva', edad: 35};

describe('ArrayNombres', () => {
  it('anadePersona: El array contiene datos', () => {
    const arrayNombres = new ArrayNombres();
    arrayNombres.anadePersona (PERSONA)

    expect(arrayNombres.apuntados).toContain (PERSONA);
    expect(arrayNombres.apuntados.length).toBeGreaterThanOrEqual (1);
  });

  xit(`anadePersona: coincide con mi persona ${JSON.stringify(PERSONA)}`, () => {
    const arrayNombres = new ArrayNombres();
    arrayNombres.anadePersona (PERSONA);
    const arrayComparar = [PERSONA]

    expect(arrayNombres.apuntados).toBe (arrayComparar);
  });
});
