import { TestBed } from '@angular/core/testing';

import { UsuariosGitHubService } from './usuarios-git-hub.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAllUserList } from '../../../mocks/data-fake';

describe('UsuariosGitHubService', () => {
  let httpClientSpy = jasmine.createSpyObj('HttpClient', [
    'get',
    'post',
    'put',
  ]);
  let service: UsuariosGitHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });
    service = TestBed.inject(UsuariosGitHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllUserList', () => {
    httpClientSpy.get.and.callFake(() => {
      return getAllUserList();
    });
    const ret = service.getAllUserList();

    console.log(ret);
    expect(ret).toBeInstanceOf(Observable);
  });
});
