import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  empresa: boolean = false;
  entregador:boolean = false
  constructor(
    private userService: UserService,
    private router : Router
  ) { }

  ngOnInit(): void {
    
    this.entregador = this.userService.getIsEntregador()
    this.empresa    = this.userService.getIsEmpresa()

    if(!this.entregador && !this.empresa ){
      this.userService.logout()
      this.router.navigate(['/'])
    }

    const user = this.userService.getUser()
  }

  logout(){
    this.userService.logout()
  }

}
