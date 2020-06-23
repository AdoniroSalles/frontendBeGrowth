import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private router      : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){

    const userName = this.loginForm.get('userEmail').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(userName, password)
      .subscribe(
        dados => {
          console.log(dados)
          this.router.navigate(['/home'])
        },
        erro => { 
          console.log(erro)
        }
      )

    console.log(userName, password)

  }


}
