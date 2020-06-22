import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment'


import { EmpresaService } from 'src/app/services/empresa.service';
import { ProdutoEmpresa } from 'src/app/interfaces/produtoEmpresa';


@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

  changeForm: FormGroup

  produtos: ProdutoEmpresa[]
  id: string
  dadosProdutos$: Observable<ProdutoEmpresa>
  moment = moment() // package para poder formatar a data vinda do banco

  constructor(
    private router: Router,
    private routerActivate: ActivatedRoute,
    private serviceProduto: EmpresaService,
    private formBuilder: FormBuilder
  ) { 
    
  }

  ngOnInit(): void {

    //pegar parametro da rota
    this.id = this.routerActivate.snapshot.paramMap.get('id')

    this.serviceProduto.getProductById(this.id)
      .subscribe(dados => {
        this.setValues(dados)
        console.log(dados)
      })

    this.changeForm = this.formBuilder.group({
      nomeEmpresa     : [null],
      produto         : [null],
      localColeta     : [null],
      validadeProduto : [null]
    })

    console.log(this.id)
  }

  setValues(produto : ProdutoEmpresa[]){
    
    moment.locale('pt-br')
    this.changeForm.patchValue({
      nomeEmpresa : produto['dados'].nomeEmpresa,
      produto     : produto['dados'].produto,
      localColeta : produto['dados'].localColeta,
      validadeProduto : moment(produto['dados'].validadeProduto ).format('yyyy-MM-DD') //formata data
    })

  }

  updateProduct(){

    const updateDados = this.changeForm.getRawValue()
    const dados = {
      id: this.id,
      nomeEmpresa: this.changeForm.get('nomeEmpresa').value,
      produto: this.changeForm.get('produto').value,
      localColeta: this.changeForm.get('localColeta').value,
      validadeProduto: this.changeForm.get('validadeProduto').value
    } as unknown as ProdutoEmpresa[]
    console.log(dados)

    this.serviceProduto.updateProduct(dados)
      .subscribe(
        dados => {
          console.log(dados),
          this.router.navigate(['/home'])

        },
        error => {
          console.log(error)
        } 
      )


  }

}
