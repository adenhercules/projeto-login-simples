import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucessoLoginComponent } from './components/sucesso-login/sucesso-login.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'boas-vindas',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
