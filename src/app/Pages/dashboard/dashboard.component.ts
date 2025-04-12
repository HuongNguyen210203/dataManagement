import {Component, OnInit, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/authService';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    JsonPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  http = inject(HttpClient);
  authService = inject(AuthService);
  userList: any[] = [];

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    debugger;
    this.authService.getAllUsers().subscribe({
      next: (users:any) => {
        console.log(users);
        this.userList = users;
      },
      error: (err:any) => {
        console.log('Failed to load users', err);
      }
    });
  }
}
