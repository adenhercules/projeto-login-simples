import { Component } from '@angular/core';
import {Usuario} from "./models/usuario";
import {UsuarioService} from "./client/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-login-simples';
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  usuario = new Usuario();
  ngOnInit(): void {}

  login() {
    this.usuarioService.postLogar(this.usuario).subscribe({
      next: (data) => {
        console.log('sucesso no login: ' + data);
      },
      error: (error) => {
        console.log('erro no login:' + error.error);
        this.router.navigate(['sucesso-login']);
      },
    });
    console.log(this.usuario);
  }
}
