import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosGitHubListComponent } from './usuarios-git-hub-list.component';
import { UsuariosGitHubService } from '../usuarios-git-hub.service';
import { USER_LIST_DATA } from '../../../../mocks/data-fake';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('UsuariosGitHubListComponent SPYON', () => {
  let component: UsuariosGitHubListComponent;
  let fixture: ComponentFixture<UsuariosGitHubListComponent>;
  let usuariosGitHubService: UsuariosGitHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosGitHubListComponent],
      imports: [HttpClientModule],
      providers: [UsuariosGitHubService],
    });
    fixture = TestBed.createComponent(UsuariosGitHubListComponent);
    component = fixture.componentInstance;
    usuariosGitHubService = fixture.debugElement.injector.get(
      UsuariosGitHubService
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit con spyOn', () => {
    /* spyOn(usuariosGitHubService, 'getAllUserList').and.callFake(() => {
      return of(USER_LIST_DATA);
    }); */

    spyOn(usuariosGitHubService, 'getAllUserList').and.returnValue(
      of(USER_LIST_DATA)
    );

    component.ngOnInit();
    expect(component.userList).toEqual(USER_LIST_DATA);
  });

  it('ngOnInit con llamada real a la funcion que llama al servicio', async () => {
    component.ngOnInit();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.userList?.length).toBeGreaterThan(0);
  });
});