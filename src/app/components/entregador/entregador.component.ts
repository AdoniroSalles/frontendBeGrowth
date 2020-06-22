import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { EmpresaService } from 'src/app/services/empresa.service';
import { ProdutoEmpresa } from 'src/app/interfaces/produtoEmpresa';


@Component({
	selector: 'app-entregador',
	templateUrl: './entregador.component.html',
	styleUrls: ['./entregador.component.css']
})
export class EntregadorComponent implements OnInit {

	formChecked: FormGroup
	empresas$: Observable<ProdutoEmpresa>[]
	itensRecolhidos$: Observable<ProdutoEmpresa>[]

	itensRecolhidos: boolean = false
	checked = []

	idProduct

	constructor(
		private serviceEmpresa: EmpresaService,
		private formBuilder: FormBuilder
	) { }

	displayedColumns: string[] = ['Nome Empresa', 'Produto', 'Local da Coleta', 'Validade do Produto', 'Data de Cadastro'];

	ngOnInit(): void {

		this.formChecked = this.formBuilder.group({
			checkbox: ['', Validators.required]
		})

		this.getDados()
		
	}

	checkedValue(id, event) {
		console.log(id, event)
		this.idProduct = id
		if (event) {
			this.checked.push(id)
		} else {
			this.checked.splice(this.checked.indexOf(id), 1)
		}
		console.log(this.checked)
	}

	submitChecked() {

		const dados = {
			id: this.idProduct,
			recolhido: true
		} as unknown as ProdutoEmpresa[]

		this.serviceEmpresa.updateProduct(dados)
		.subscribe( dados => {
			console.log(dados)
			this.getDados()
		})
		// console.log(this.checked)
		// console.log(dados)
		
	}

	getDados(){
		this.serviceEmpresa.getProduct()
			.subscribe(
				res => {
					let data = res
					let dadosEmpresa = data['empresaProduct']
					//pega os dados dos itens que ainda não foram recolhidos
					this.empresas$  = dadosEmpresa.filter(( dados) => {
						return dados.recolhido == false
					})
					//pega os dados dos itens ja recolhidos
					this.itensRecolhidos$ = dadosEmpresa.filter((dados) => {
						return dados.recolhido == true
					})
					
					//se o item tiver recolhido como true aparece a tabela
					this.itensRecolhidos$.length > 0 ? this.itensRecolhidos = true : this.itensRecolhidos = false
				}
			)
	}


}
