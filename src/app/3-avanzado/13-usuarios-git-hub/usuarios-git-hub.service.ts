import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsuariosGitHubService {
  constructor(private httpClient: HttpClient) {}

  getAllUserList() {
    return this.httpClient.get('https://api.github.com/users');
  }
}
