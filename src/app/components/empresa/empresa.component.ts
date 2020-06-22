import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Observable } from 'rxjs';
import { ProdutoEmpresa } from 'src/app/interfaces/produtoEmpresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresas$: Observable<ProdutoEmpresa>[]
  dataSource

  constructor(
    private serviceEmpresa : EmpresaService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.carregaProdutos()

  }

  displayedColumns: string[] = ['Nome Empresa', 'Produto', 'Local da Coleta', 'Validade do Produto', 'Data de Cadastro'];
  
  carregaProdutos(){
    this.serviceEmpresa.getProduct().subscribe(
      res => { 
        let data = res
        this.empresas$ = data['empresaProduct']
       
      }
    )
  }
  
  //chamado apos ser cadastrado um produto
	receberDados(event){
    console.log(event)
		this.carregaProdutos()
  }
  
  //chama rota para alterar produto
  alterarProduto(id){
    this.router.navigate(['/home/atualizar/', id])
  }
  //Para poder excluir um produto
  excluirProduto(id){
    console.log(id)
  }

}
