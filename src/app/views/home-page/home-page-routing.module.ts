import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { AlterarProdutoComponent } from 'src/app/components/alterar-produto/alterar-produto.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent 
  },
  {
    path:'atualizar/:id',
    component: AlterarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
