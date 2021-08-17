import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosGitHubListComponent } from './usuarios-git-hub-list.component';
import { UsuariosGitHubService } from '../usuarios-git-hub.service';
import { USER_LIST_DATA } from '../../../../mocks/data-fake';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('UsuariosGitHubListComponent con createSpyObj', () => {
  let component: UsuariosGitHubListComponent;
  let fixture: ComponentFixture<UsuariosGitHubListComponent>;
  let usuariosGitHubSpy = jasmine.createSpyObj('UsuariosGitHubService', [
    'getAllUserList',
  ]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosGitHubListComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: UsuariosGitHubService, useValue: usuariosGitHubSpy },
      ],
    });

    fixture = TestBed.createComponent(UsuariosGitHubListComponent);
    component = fixture.componentInstance;
    usuariosGitHubSpy.getAllUserList.and.returnValue(of(USER_LIST_DATA));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', async () => {
    component.ngOnInit();
    expect(component.userList).toEqual(USER_LIST_DATA);
  });

  it('ngOnInit with error ', () => {
    const err = 'ERROR';
    usuariosGitHubSpy.getAllUserList.and.returnValue(throwError(err));
    component.ngOnInit();
    expect(component.error).toEqual(err);
  });
});