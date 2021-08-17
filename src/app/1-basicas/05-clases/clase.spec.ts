import { Jugador } from './clase';

describe('Clase', () => {
  let jugador: Jugador | undefined;

  beforeAll (() => {
    console.log ('beforeAll')
  });

  beforeEach(() => {
    console.log ('beforeEach')
    jugador = new Jugador();
  });

  afterEach(() => {
    console.log ('afterEach')
    jugador = undefined;
  });

  afterAll (() => {
    console.log ('beforeAll')
  });


  it('recibeDanio: Debe de retornar 80 de vida, si recibe 20 de daño', () => {
    const resp = jugador?.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('recibeDanio: Debe de retornar 50 de vida, si recibe 50 de daño', () => {
    const resp = jugador?.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('recibeDanio: Debe de retornar 0 de vida, si recibe 100 de daño o más', () => {
    const resp = jugador?.recibeDanio(100);
    expect(resp).toBe(0);
  });
});
