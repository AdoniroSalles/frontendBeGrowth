import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";

import { environment } from 'src/environments/environment';
import { ProdutoEmpresa } from '../interfaces/produtoEmpresa';

const API_URL = environment.API

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(
    private http : HttpClient
  ) { }

  //tras todas os produtos
  getProduct(){

    return this.http.get<ProdutoEmpresa[]>(API_URL +'/empresa')
                    .pipe(tap(
                      // res => console.log(res)
                    ))

  }

  //trás produto pelo id
  getProductById( id: string){
    return this.http.get<ProdutoEmpresa[]>(API_URL + '/empresa/' + id)
  }

  cadastroProduct( newProduct: ProdutoEmpresa){

    return this.http.post(API_URL + '/empresa', newProduct)
  }

  //atualiza produto
  updateProduct( updateProduct : ProdutoEmpresa[]){
    return this.http.put(API_URL + '/empresa', updateProduct)
  }

  //delete produto
  deleteProduct( id: string){
    return this.http.delete(API_URL +'/empresa/' + id)
  }
}
