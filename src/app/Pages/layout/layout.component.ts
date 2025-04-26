import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
//import {MatSidenavContainer} from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
// import {MatIcon} from '@angular/material/icon';
import {AuthService} from '../../services/authService';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MatSidenavModule, MatToolbar, MatButton, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
