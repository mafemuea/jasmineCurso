import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosGitHubListComponent } from './usuarios-git-hub-list.component';
import { UsuariosGitHubService } from '../usuarios-git-hub.service';
import { USER_LIST_DATA } from '../../../../mocks/data-fake';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('UsuariosGitHubListComponent con createSpy', () => {
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

  it('ngOnInit con createSpy', () => {
    /* usuariosGitHubService.getAllUserList = jasmine
      .createSpy()
      .and.returnValue(of(USER_LIST_DATA));
    */
    usuariosGitHubService.getAllUserList = jasmine
      .createSpy()
      .and.callFake(() => of(USER_LIST_DATA));
    component.ngOnInit();
    expect(component.userList).toEqual(USER_LIST_DATA);
  });

  it('ngOnInit with error ', () => {
    const err = 'ERROR';
    usuariosGitHubService.getAllUserList = jasmine
      .createSpy()
      .and.returnValue(throwError(err));
    component.ngOnInit();
    expect(component.error).toEqual(err);
  });
});
