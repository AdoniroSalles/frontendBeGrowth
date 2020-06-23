import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

     //verifica se o token ja existe
     hasToken(){
      return !!this.getToken(); //retorna true se existir e false se nao existir
  }

  //seta um token
  setToken(token){
      window.localStorage.setItem(KEY, token);
  }

  //pega o token
  getToken(){ 
      return window.localStorage.getItem(KEY);
  }

  //remove token, usado para logout
  removeToken(){
      window.localStorage.removeItem(KEY);
  }
}
