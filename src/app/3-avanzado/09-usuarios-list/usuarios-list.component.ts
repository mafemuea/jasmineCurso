import { Component } from '@angular/core';

export const USUARIOS_LIST = ['EVA', 'ANA', 'IVÁN'];
export const USUARIOS_LIST2 = ['Jorge', 'Leticia', 'Juan', 'Pepe'];

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss'],
})
export class UsuariosListComponent {
  USUARIOS_LIST2 = USUARIOS_LIST2;
  usuariosList = USUARIOS_LIST;

  constructor() {}

  newList(lista: string[]) {
    this.usuariosList = lista;
  }

  resetList() {
    this.usuariosList = USUARIOS_LIST;
  }

  addUsuario(nombre: string) {
    this.usuariosList.push(nombre);
  }

  deleteUsuario(nombre: string) {
    this.usuariosList = this.usuariosList.filter((data) => data !== nombre);
  }
}
