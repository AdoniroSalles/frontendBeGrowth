import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { AlterarProdutoComponent } from 'src/app/components/alterar-produto/alterar-produto.component';
import { HomePageGuard } from 'src/app/core/guards/home-page.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent,
    canActivate : [ HomePageGuard ]
  },
  {
    path:'atualizar/:id',
    component: AlterarProdutoComponent,
    canActivate: [ HomePageGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
