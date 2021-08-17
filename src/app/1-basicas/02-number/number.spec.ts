import { incrementar, multiplicar } from './number';

describe('Number', () => {
  it('incrementar: Sin parametros', () => {
    const ret = incrementar();
    expect(ret).toBe(2);
    expect(typeof ret).toBe('number');
    expect(ret).toBeInstanceOf(Number);
  });

  it('incrementar: <= 100', () => {
    const num = 2;
    const ret = incrementar(num);
    expect(ret).toBe(num + 1);
  });

  it('incrementar: > 100', () => {
    const num = 102;
    const ret = incrementar(num);
    expect(ret).toBe(num);
  });

  it('incrementar: <= 100 sumando 2', () => {
    const num = 100,
      incremento = 2;
    const ret = incrementar(num, incremento);
    expect(ret).toBe(num + incremento);
  });

  it('incrementar: > 100 sumando 2', () => {
    const num = 101,
      incremento = 2;
    const ret = incrementar(num, incremento);
    expect(ret).toBe(num);
  });

  it('multiplicar: Sin parametros', () => {
    const ret = multiplicar();
    expect(ret).toBe(1);
    expect(typeof ret).toBe('number');
    expect(ret).toBeInstanceOf(Number);
  });

  it('multiplicar: <= 100', () => {
    const num = 2;
    const ret = multiplicar(num);
    expect(ret).toBe(num * 1);
  });

  it('multiplicar: > 100', () => {
    const num = 102;
    const ret = multiplicar(num);
    expect(ret).toBe(num);
  });

  it('multiplicar: <= 100 por 2', () => {
    const num = 100,
      otroNumero = 2;
    const ret = multiplicar(num, otroNumero);
    expect(ret).toBe(num * otroNumero);
  });

  it('multiplicar: > 100 * 2', () => {
    const num = 101,
      otroNumero = 2;
    const ret = multiplicar(num, otroNumero);
    expect(ret).toBe(num);
  });
});
