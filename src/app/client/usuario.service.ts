import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'https://www.teste.com.br';
  constructor(private htpp: HttpClient) {}

  postLogar(usuario: Usuario): Observable<any> {
    return this.htpp.post<any>(`${this.url}/logar`, usuario);
  }
}
