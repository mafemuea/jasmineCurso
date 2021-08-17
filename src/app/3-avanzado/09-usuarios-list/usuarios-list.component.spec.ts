import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  UsuariosListComponent,
  USUARIOS_LIST2,
  USUARIOS_LIST,
} from './usuarios-list.component';

describe('UsuariosListComponent', () => {
  let component: UsuariosListComponent | undefined;
  let fixture: ComponentFixture<UsuariosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosListComponent],
    });
    //Crea el componente
    fixture = TestBed.createComponent(UsuariosListComponent);
    // Obtiene el componente.
    component = fixture.componentInstance;

    component.usuariosList = USUARIOS_LIST;

    // Dispara la detección de cambios.
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    component = undefined;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('newList con USUARIOS LIST', () => {
    console.log('newList Ant', component?.usuariosList);
    component?.newList(USUARIOS_LIST2);
    console.log('newList', component?.usuariosList);
    expect(component?.usuariosList).toEqual(USUARIOS_LIST2);
  });

  it('resetList', () => {
    console.log('resetList Ant', component?.usuariosList);
    component?.resetList();
    console.log('resetList', component?.usuariosList);
    expect(component?.usuariosList).toEqual(USUARIOS_LIST);
  });

  it('addUsuario', () => {
    const nuevo = 'Carolina';
    const ant = [...(component?.usuariosList as []), nuevo];
    console.log('addUsuario Ant', component?.usuariosList);
    component?.addUsuario('Carolina');
    console.log('addUsuario', component?.usuariosList);
    expect(component?.usuariosList).toEqual(ant);
  });

  it('deleteUsuario', () => {
    console.log('deleteUsuario Ant', component?.usuariosList);
    const borrar = 'EVA';
    const ant = [...(component?.usuariosList as [])].filter((data) => data !== borrar);
    component?.deleteUsuario(borrar);
    console.log('deleteUsuario', component?.usuariosList);
    expect(component?.usuariosList).toEqual(ant);
  });
});
