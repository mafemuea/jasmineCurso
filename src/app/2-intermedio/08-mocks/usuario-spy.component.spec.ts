import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';

describe('UsuarioComponent con spyOn', () => {
  let componente: UsuarioComponent;
  let servicio: UsuarioService;

  beforeEach(() => {
    servicio = new UsuarioService();
    componente = new UsuarioComponent(servicio);
  });

  it('Init: SpyOn (Que no llame a nada)', () => {
    const spy = spyOn(servicio, 'getUsuarioAlmacenadoPorDefecto');
    componente.ngOnInit();
    console.log(componente.usuario);
    expect(spy).not.toHaveBeenCalled();
    expect(componente.usuario).toBeUndefined();
  });

  it('Init: Con callThrough (Llame a un metodo real)', () => {
    const usuario = 'Default';
    const spy = spyOn(servicio, 'getUsuarioAlmacenadoPorDefecto').and.callThrough();
    componente.getUsuarioDef();
    console.log(componente.usuario);
    expect(spy).toHaveBeenCalled();
    expect(componente.usuario).not.toBeUndefined();
    expect(componente.usuario.length).toBeGreaterThan(0);
    expect(componente.usuario).toBe(usuario);
  });

  it('Init: Con returnValue (Valor fijo)', () => {
    const usuario = 'Eva';
    // Establecemos que para la función getUsuarioAlmacenado del
    // servicio, me va a devolver un valor fijo
    const spy = spyOn(servicio, 'getUsuarioAlmacenado').and.returnValue(usuario);
    componente.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(componente.usuario).not.toBeUndefined();
    expect(componente.usuario.length).toBeGreaterThan(0);
    expect(componente.usuario).toBe(usuario);
  });

  it('Init: Con callFake (Función personalizada)', () => {
    const usuario = 'Eva';
    // Establecemos que para la función getUsuarioAlmacenado del
    // servicio, me va a devolver una función personalizada
    const spy = spyOn(servicio, 'getUsuarioAlmacenado').and.callFake(() => {
      console.log('Aqui podriamos hacer cualquier cosa...');
      return usuario;
    });
    componente.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(componente.usuario).not.toBeUndefined();
    expect(componente.usuario.length).toBeGreaterThan(0);
    expect(componente.usuario).toBe(usuario);
  });
});
