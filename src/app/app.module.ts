import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './2-intermedio/08-mocks/usuario.component';
import { UsuariosListComponent } from './3-avanzado/09-usuarios-list/usuarios-list.component';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './3-avanzado/10-incrementador/incrementador.component';
import { NavBarComponent } from './3-avanzado/11-nav-bar/nav-bar.component';
import { RouterUsuariosComponent } from './3-avanzado/12-router-usuarios/router-usuarios.component';
import { UsuariosGitHubListComponent } from './3-avanzado/13-usuarios-git-hub/usuarios-git-hub-list/usuarios-git-hub-list.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuariosListComponent,
    IncrementadorComponent,
    NavBarComponent,
    RouterUsuariosComponent,
    UsuariosGitHubListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
