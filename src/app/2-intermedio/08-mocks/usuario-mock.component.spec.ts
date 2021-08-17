import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';

const usuario = 'Eva';

class UsuarioServiceMock extends UsuarioService {
  getUsuarioAlmacenado() {
    this.usuario = usuario;
    return this.usuario;
  }

  getUsuarioAlmacenadoPorDefecto() {
    this.usuario = 'Default';
    return this.usuario;
  }
}

describe('UsuarioComponent con Fake CLASS', () => {
  let componente: UsuarioComponent;
  let servicio: UsuarioServiceMock;

  beforeEach(() => {
    servicio = new UsuarioServiceMock();
    componente = new UsuarioComponent(servicio);
  });

  it('Init: Debe de cargar el usuario ' + usuario, () => {
    componente.ngOnInit();
    expect(componente.usuario).not.toBeUndefined();
    expect(componente.usuario.length).toBeGreaterThan(0);
    expect(componente.usuario).toBe(usuario);
  });

  it('Init: Debe de cargar el usuario por defecto', () => {
    componente.getUsuarioDef();
    expect(componente.usuario).not.toBeUndefined();
    expect(componente.usuario.length).toBeGreaterThan(0);
    expect(componente.usuario).toBe('Default');
  });
});
