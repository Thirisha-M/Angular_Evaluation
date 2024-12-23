import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.username === 'admin' && this.password === 'admin123') {
        this.router.navigate(['/store-management']);
      } else {
        this.loginError = 'Invalid credentials, please try again.';
      }
    }
  }
}
