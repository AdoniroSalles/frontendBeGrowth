import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoEmpresa } from 'src/app/interfaces/produtoEmpresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  formCadastro: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private empresaService: EmpresaService,
    private changeDetector: ChangeDetectorRef
  ) { }

  @Output() cadastroDado = new EventEmitter();

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      nomeEmpresa     : ['', Validators.required],
      produto         : ['', Validators.required],
      localColeta     : ['', Validators.required],
      validadeProduto : ['', Validators.required]
    })
  }

  cadastro() {

    const newProduct = this.formCadastro.getRawValue() as ProdutoEmpresa
    console.log(newProduct)

    this.empresaService.cadastroProduct(newProduct)
      .subscribe(
        dados => {
          this.cadastroDado.emit(dados)
          this.formCadastro.reset();
          console.log('Cadastrado com sucesso' , dados)
        },
        error => {
          console.log(error)
          this.formCadastro.reset();
        }
      )


  }

}
