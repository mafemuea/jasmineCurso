import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListComponent } from './3-avanzado/09-usuarios-list/usuarios-list.component';
import { IncrementadorComponent } from './3-avanzado/10-incrementador/incrementador.component';


const routes: Routes = [
  {
    path: 'incrementador',
    component: IncrementadorComponent
  },
  {
    path: 'usuariosList',
    component: UsuariosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
