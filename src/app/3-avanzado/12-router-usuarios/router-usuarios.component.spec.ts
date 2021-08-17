import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { RouterUsuariosComponent } from './router-usuarios.component';
import { RouterFake } from '../../../mocks/router-fake';
import { ActivatedRouteFake } from '../../../mocks/activated-route-fake';

describe('RouterUsuariosComponent', () => {
  let component: RouterUsuariosComponent;
  let fixture: ComponentFixture<RouterUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterUsuariosComponent],
      providers: [
        { provide: Router, useClass: RouterFake },
        { provide: ActivatedRoute, useClass: ActivatedRouteFake },
      ],
    });
    fixture = TestBed.createComponent(RouterUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('goToUsuariosList', () => {
    const router = TestBed.inject(Router);
    console.log(router);
    const spy = spyOn(router, 'navigate');
    component.goToUsuariosList();
    expect(spy).toHaveBeenCalledWith(['usuariosList', { id: 123 }]);
  });

  it('debe de colocar el id = 123', () => {
    const activatedRoute: any = TestBed.inject(ActivatedRoute);
    console.log(activatedRoute);
    const id = 123;
    activatedRoute.push({ id });
    expect(Number(component.id)).toBe(id);
  });
});
