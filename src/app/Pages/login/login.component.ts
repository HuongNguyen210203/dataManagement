import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authService';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObject = {
    username: '',
    password: ''
  };

  authService = inject(AuthService);
  router = inject(Router);

  onLogin() {
    console.log(this.loginObject);
    this.authService.login(this.loginObject).subscribe({
      next: (res) => {
        if (res.token) {
          alert(res.message || 'Login Success');
          this.authService.saveToken(res.token);
          this.router.navigateByUrl('/dashboard');
        } else {
          alert('Login failed: Token not received');
        }
      },
      error: (err) => {
        alert(err.error?.message || 'Login failed');
      }
    });
  }
}
