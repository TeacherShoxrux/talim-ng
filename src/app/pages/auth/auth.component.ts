import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {BackButtonComponent} from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-auth',
  imports: [
    HeaderComponent,
    FooterComponent,
    BackButtonComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  register=false;
  changeRegister(){
    console.log("Register clicked");
    console.log(this.register);
    this.register=!this.register;
  }
}
