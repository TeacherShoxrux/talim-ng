import {Component, inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {BackButtonComponent} from '../../components/back-button/back-button.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  imports: [
    HeaderComponent,
    FooterComponent,
    BackButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authService: AuthService= inject(AuthService);
  loginForm= new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });
  submitLogin(){
   this.authService.logIn(this.loginForm.value.email??"", this.loginForm.value.password??'');

  }
  register=false;
  changeRegister(){
    console.log("Register clicked");
    console.log(this.register);
    this.register=!this.register;
  }
}
