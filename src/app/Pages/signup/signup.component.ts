import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/authService';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupObject = {
    username: '',
    password: '',
    errorMessage: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp() {
    this.authService.register({ username: this.signupObject.username, password: this.signupObject.password }).subscribe({
      next: () => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: (err: { error: { message: string; }; }) => {
        this.signupObject.errorMessage = err.error.message || 'Registration failed';
      }
    });
  }
}

