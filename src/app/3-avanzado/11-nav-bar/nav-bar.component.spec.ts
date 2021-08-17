import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener un enlace a usuariosList', () => {
    const elements = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    console.log(elements);

    const enlace = elements.find(
      (elem) => elem.attributes['routerLink'] === '/usuariosList'
    );
    console.log(enlace);
    expect(enlace).not.toBeUndefined();
  });
});
