import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListComponent } from './usuarios-list.component';

describe('UsuariosListComponent', () => {
  let component: UsuariosListComponent;
  let fixture: ComponentFixture<UsuariosListComponent>;

  // Realmente como angular trabaja sobre webpack, el html y el archivo js estan en el mismo fichero por lo que ya no es necesario ni el async
  // ni el compileComponents
  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [UsuariosListComponent],
    // }).compileComponents();
  });

  beforeEach(() => {
    /* configureTestingModule tendremos que poner las dependencias del componente como si fuera un módulo:
            declarations: [ UsuariosListComponent],
            imports: [],
            providers: []

      para poder crear el componente entero.
    */
    TestBed.configureTestingModule({
      declarations: [UsuariosListComponent],
    });
    //Crea el componente
    fixture = TestBed.createComponent(UsuariosListComponent);
    // Obtiene el componente.
    component = fixture.componentInstance;
    // Dispara la detección de cambios.
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
