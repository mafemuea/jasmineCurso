import { Component, OnInit } from '@angular/core';
import { UsuariosGitHubService } from '../usuarios-git-hub.service';

@Component({
  selector: 'app-usuarios-git-hub-list',
  templateUrl: './usuarios-git-hub-list.component.html',
  styleUrls: ['./usuarios-git-hub-list.component.scss'],
})
export class UsuariosGitHubListComponent implements OnInit {
  userList: any;

  error: any;

  constructor(private readonly usuariosGitHubService: UsuariosGitHubService) {}

  ngOnInit(): void {
    this.usuariosGitHubService.getAllUserList().subscribe(
      (data) => {
        this.userList = data;
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
}
