import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./views/login-page/login-page.module').then(m => m.LoginPageModule) 
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home-page/home-page.module').then(m => m.HomePageModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
