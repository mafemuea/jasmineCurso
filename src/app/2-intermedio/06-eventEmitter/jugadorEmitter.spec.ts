import { JugadorEmitter } from './jugadorEmitter';
describe('JugadorEmitter', () => {
  const jugadorEmitter = new JugadorEmitter();

  it('emitDanio', () => {
    let vida = 0;
    jugadorEmitter.vidaCambia.subscribe((data) => {
      vida = data;
    });
    jugadorEmitter.emitDanio(50);
    expect(vida).toBe(50);
  });
});
