import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { MessageComponent } from 'src/app/components/message/message.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    MessageComponent

  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginPageModule { }
