import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario: any;

  getUsuarioAlmacenado() {
    if (!this.usuario && localStorage.getItem('usuario')) {
      this.usuario = localStorage.getItem('usuario');
    }
    return this.usuario;
  }

  getUsuarioAlmacenadoPorDefecto() {
    this.usuario = 'Default';
    return this.usuario;
  }

  getUsuario() {
    return this.usuario;
  }
}
