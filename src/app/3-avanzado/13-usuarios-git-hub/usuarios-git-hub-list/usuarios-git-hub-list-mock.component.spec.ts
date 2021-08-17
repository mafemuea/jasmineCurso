import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosGitHubListComponent } from './usuarios-git-hub-list.component';
import { UsuariosGitHubService } from '../usuarios-git-hub.service';
import { USER_LIST_DATA } from '../../../../mocks/data-fake';
import { throwError } from 'rxjs';
import { UsuariosGitHubServiceFake } from '../../../../mocks/usuarios-git-hub-fake';
import { HttpClientModule } from '@angular/common/http';

describe('UsuariosGitHubListComponent with mock class', () => {
  let component: UsuariosGitHubListComponent;
  let fixture: ComponentFixture<UsuariosGitHubListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosGitHubListComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: UsuariosGitHubService, useClass: UsuariosGitHubServiceFake },
      ],
    });
    fixture = TestBed.createComponent(UsuariosGitHubListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    /*spyOn(usuariosGitHubService, 'getAllUserList').and.callFake(() => {
      return of(USER_LIST_DATA);
    });*/
    //spyOn(usuariosGitHubService, 'getAllUserList').and.returnValue(of(USER_LIST_DATA));
    //spyOn(usuariosGitHubService, 'getAllUserList').and.callThrough();

    component.ngOnInit();
    expect(component.userList).toEqual(USER_LIST_DATA);
  });

  it('ngOnInit with error ', () => {
    const err = 'ERROR';
    let usuariosGitHubService: UsuariosGitHubService;
    usuariosGitHubService = fixture.debugElement.injector.get(
      UsuariosGitHubService
    );
    spyOn(usuariosGitHubService, 'getAllUserList').and.returnValue(
      throwError(err)
    );
    component.ngOnInit();
    expect(component.error).toEqual(err);
  });
});
