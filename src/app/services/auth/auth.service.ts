import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { tap } from 'rxjs/operators';


const API_URL = environment.API

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  authenticate(userEmail: string, password: string){

    return this.http.post(API_URL + '/authenticate', { email: userEmail, password: password})
      .pipe(tap(
        dados => {
          const authToken = dados['token']
          const userData = dados['user']
          this.userService.setToken(authToken);
        }
      ))

  }
}
