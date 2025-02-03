import { Component } from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: 'app-auth',
  imports: [
    FooterComponent,
    HeaderComponent
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
