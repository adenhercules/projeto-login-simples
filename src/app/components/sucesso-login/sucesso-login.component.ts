import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sucesso-login',
  templateUrl: './sucesso-login.component.html',
  styleUrls: ['./sucesso-login.component.scss']
})
export class SucessoLoginComponent {
  constructor(private router: Router){

  }
deslogar(){
  sessionStorage.removeItem('token')
  this.router.navigate(['login'])
}
}
