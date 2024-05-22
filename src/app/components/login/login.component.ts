import { Component } from '@angular/core';
import { UsuarioService } from '../../client/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import {
  faAngleDown,
  faEye,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'projeto-login-simples';
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}
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
        sessionStorage.setItem('token', 'token123');
      },
    });
    console.log(this.usuario);
  }

  protected readonly faEye = faEye;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected readonly faAngleDown = faAngleDown;
}
