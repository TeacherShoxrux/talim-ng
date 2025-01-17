import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
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
