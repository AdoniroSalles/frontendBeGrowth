import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: LoginPageComponent,
    canActivate: [ AuthGuard ] 
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
