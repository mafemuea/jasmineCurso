import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-usuarios',
  templateUrl: './router-usuarios.component.html',
  styleUrls: ['./router-usuarios.component.scss'],
})
export class RouterUsuariosComponent implements OnInit {
  id: string | undefined;

  constructor(
    private readonly router: Router,
    private readonly activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  goToUsuariosList() {
    this.router.navigate(['usuariosList', { id: 123 }]);
  }
}
