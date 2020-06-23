import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from 'src/app/interfaces/user';
import * as jtw_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //cria um sujeito
  // private userSubject = new Subject<User>()

  //behaviorSubjecti, tem que definir um valor padrão q ele vai emitr logo de cara 
  //O BehaviorSubject armazena a última emissão até que alguém apareça para consumí-la.
  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;
  private empresa : any
  private entregador : any
  private id: any

  constructor(
    private tokenService: TokenService
  ) { 
    //pergunta se tem token na aplicação 
    this.tokenService.hasToken() && this.decodeAndNotify()
  }

  //recebe o token
  setToken(token: string){
    this.tokenService.setToken(token);
    this.decodeAndNotify()
  }

  getUser(){
    //retorna a usersubject como objservable para que possa ser usado o valor 
    return this.userSubject.asObservable(); 
  }

  //decodifica o token
  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user  = jtw_decode(token) as User; // coloca o const user como ja sendo do tipo User
    this.userSubject.next(user['user']); // coloca o user no subject 
    this.userName = user['user'].username; //armazena o usuario
    this.empresa = user['user'].isEmpresa
    this.entregador = user['user'].isEntregador
  }

  //faz o logout da aplicacao 
  logout(){

    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  //verifica se ta logado
  isLogged(){
    return this.tokenService.hasToken()
  }

  getUserId(){
    return this.id
  }

  //pega o nome do usuario
  getUserName(){
    return this.userName;
  }

  getIsEmpresa(){
    return this.empresa;
  }

  getIsEntregador(){
    return this.entregador;
  }
}
