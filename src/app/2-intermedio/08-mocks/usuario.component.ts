import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  template: `<p>HOLA: {{ this.usuario }}</p>`,
  styles: [],
})
export class UsuarioComponent implements OnInit {
  usuario:any;

  constructor(private readonly usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuario = this.getUsuario();
  }

  getUsuarioDef() {
    this.usuario = this.usuarioService.getUsuarioAlmacenadoPorDefecto();
  }

  private getUsuario() {
    return this.usuarioService.getUsuarioAlmacenado();
  }
}
