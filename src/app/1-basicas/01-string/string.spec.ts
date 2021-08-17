import { mensaje } from './string';
describe('String', () => {
  it('mensaje', () => {
    const name = 'Eva';
    const ret = mensaje(name);
    expect(ret).toBe(`Saludos ${name}`); // ===
    expect(typeof ret).toBe('string');
    expect(ret).toBeInstanceOf(String);
    expect(ret).toContain(name);
  });
});
