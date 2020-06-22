import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept( request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    //retorna a URL da requisição 
    const reqURL: Array<any> = request.url.split('/') //quebra url na barra gerando um array com as partes da url 
    const apiURL: Array<any> = environment.API.split('/') //gera um array com a URL da api que esta no environment

    if(reqURL[2] === apiURL[2]){
      //clona a requisição para poder fazer uma alteração
      request = request.clone({ setHeaders:{ "Content-Type" : "application/json" }})
    }

    return next.handle(request);
  }
}
