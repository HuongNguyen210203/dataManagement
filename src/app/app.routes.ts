// import { Routes } from '@angular/router';
// import {LoginComponent} from './Pages/login/login.component';
// import {LayoutComponent} from './Pages/layout/layout.component';
// import {DashboardComponent} from './Pages/dashboard/dashboard.component';
// import {SignupComponent} from './Pages/signup/signup.component';
// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full',
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//   },
//   {
//     path:'',
//     component: LayoutComponent,
//     children: [
//       {
//         path:'dashboard',
//         component: DashboardComponent,
//       }
//       ],
//   }
// ];
import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
