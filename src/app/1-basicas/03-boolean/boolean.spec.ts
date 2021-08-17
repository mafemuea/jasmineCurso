import { esAdmin } from './boolean';
describe('Boolean', () => {
  it('esAdmin: sin parametros', () => {
    const ret = esAdmin();
    expect(ret).toBeFalsy();
  });

  it('esAdmin: Con admin', () => {
    const ret = esAdmin('admin');
    expect(ret).toBeTruthy();
  });

  it('esAdmin: Con eva', () => {
    const ret = esAdmin('eva');
    expect(ret).toBeFalsy();
  });
});
