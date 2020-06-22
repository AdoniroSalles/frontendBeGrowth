import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { EmpresaComponent } from 'src/app/components/empresa/empresa.component';
import { FormCadastroComponent } from 'src/app/components/form-cadastro/form-cadastro.component';
import { EntregadorComponent } from 'src/app/components/entregador/entregador.component';
import { AlterarProdutoComponent } from 'src/app/components/alterar-produto/alterar-produto.component';


@NgModule({
  declarations: [
    HomePageComponent,
    EmpresaComponent,
    FormCadastroComponent,
    EntregadorComponent,
    AlterarProdutoComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CdkTableModule,
    HomePageRoutingModule,
    MatButtonModule
    
  ]
})
export class HomePageModule { }
