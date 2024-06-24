import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";

export const calendarRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: ':param',
    component: AppComponent,
    pathMatch: 'full'
  }
];
