import {Component, inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {BackButtonComponent} from '../../components/back-button/back-button.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Location, NgIf} from '@angular/common';
import {UserDetails} from '../../models/user-details';

@Component({
  selector: 'app-auth',
  imports: [
    HeaderComponent,
    FooterComponent,
    BackButtonComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authService=inject(AuthService);
  registerForm: FormGroup;
  loginForm: FormGroup;
  register=false;
  changeRegister(){
    console.log("Register clicked");
    console.log(this.register);
    this.register=!this.register;
  }

  constructor(private fb: FormBuilder,private location: Location) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('User Data:', this.registerForm.value);
      alert('Ro‘yxatdan o‘tish muvaffaqiyatli!');
    }
  }

  submitSignIn() {
    if (this.loginForm.valid) {
    this.authService.signIn(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe(
      data => {
        console.log(data);
        if(data.data){
          alert("success");
        }else {
          alert(data.errorMessage);
        }
      }
    )}
  }
  submitSignUp() {

    console.log('User Data:', this.registerForm.value);
    if (this.registerForm.valid) {
      console.log('User Data:', this.registerForm.value);
      this.authService.signUp<UserDetails>({
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        email : this.registerForm.get('email')?.value,
        password : this.registerForm.get('password')?.value}).subscribe(
          data => {
            console.log(data);
            alert( `Ro‘yxatdan o‘tish muvaffaqiyatli!\n email:${data.data.email}\nparol:${this.registerForm.get('password')?.value}`);
            this.registerForm.reset();
            this.location.back();}
      );
    }
  }
}
