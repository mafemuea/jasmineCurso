import { getAllUserList } from "./data-fake";
import { UsuariosGitHubService } from '../app/3-avanzado/13-usuarios-git-hub/usuarios-git-hub.service';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UsuariosGitHubServiceFake extends UsuariosGitHubService{

  getAllUserList() {
    return getAllUserList() as Observable<Object>;
  }
}
