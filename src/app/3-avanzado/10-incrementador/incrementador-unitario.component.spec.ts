import { IncrementadorComponent } from './incrementador.component';

describe('IncrementadorComponent - Pruebas unitarias', () => {
  let component: IncrementadorComponent;

  beforeEach(() => {
    component = new IncrementadorComponent();
  });

  it('No debe pasar de 100 el progreso', () => {
    component.progreso = 50;
    component.cambiarValor(5);
    expect(component.progreso).toBe(55);
  });

  it('Debe ser 100 el progreso', () => {
    component.progreso = 100;
    component.cambiarValor(5);
    expect(component.progreso).toBe(100);
  });

 it('Debe ser 0 el progreso', () => {
    component.progreso = 0;
    component.cambiarValor(-5);
    expect(component.progreso).toBe(0);
  });
});
