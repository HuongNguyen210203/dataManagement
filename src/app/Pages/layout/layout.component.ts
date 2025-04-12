import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSidenavContainer} from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MatSidenavContainer, MatSidenavModule, MatToolbar],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
