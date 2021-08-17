import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('IncrementadorComponent - Pruebas de integracion', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Actualizacion del progreso al cambiar valor', async () => {
    component.cambiarValor(5);
    //Forzamos que detecte el cambio para que aparezca en en el titulo.
    fixture.detectChanges();

    // Como puede tardar el detectChanges en detectar los cambios debemos esperarnos a
    // que este estable.
    await fixture.whenStable();
    // Accede input con id progreso
    const input = fixture.debugElement.query(By.css('#progreso')).nativeElement;
    console.log(input);
    expect(input.value).toBe('55');
  });

  // <h3>{{ leyenda }} - {{ progreso }}</h3>
  it('Muestra la leyenda', () => {
    component.leyenda = 'Hola mundo';
    //Forzamos que detecte el cambio para que aparezca en en el titulo.
    fixture.detectChanges();

    // Accede al primer elemento h3 del html
    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(elem.innerHTML).toContain('Hola');
  });

  it('Incrementar/decrementar en 5 con el click del btn', () => {
    //Accede a todos los botones que tengan la clase btn-primary
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    console.log(botones);
    botones[0].triggerEventHandler('click', null); //decrementar
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null); // incrementar
    expect(component.progreso).toBe(50);
  });

  // <h3>{{ leyenda }} - {{ progreso }}</h3>
  it('Comprobar que se actualiza en la leyenda el progreso al hacer click en los botones', () => {
    //Accede a todos los botones que tengan la clase btn-primary
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null); // decrementar

    //Forzamos que detecte el cambio para que haga el cambio en el html
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(elem.innerHTML).toContain('45');
  });

  it('No debe pasar de 100 el progreso', () => {
    component.progreso = 50;
    component.cambiarValor(5);
    expect(component.progreso).toBe(55);
  });
});
