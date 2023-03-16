import { Routes } from '@angular/router';

// Principal component
import { Feature1Component } from './feature1.component';

// Pages
import { LoginComponent } from './login/login.component';

export const feature1Routes: Routes = [
  {
    path: '',
    component: Feature1Component,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'login' },
    ],
  },
];
