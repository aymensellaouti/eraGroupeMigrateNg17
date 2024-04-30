
import { Routes } from "@angular/router";
import { FirstComponent } from "./components/first/first.component";
import { APP_ROUTES } from "./config/routes.config";
import { NF404Component } from "./components/nf404/nf404.component";

export const appRoutes: Routes = [
  { path: '', component: FirstComponent },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: APP_ROUTES.cv,
    loadChildren: () => import('./cv/cv.routes').then((m) => m.CV_ROUTES),
    data: {
      preload: false,
    },
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.routes').then((m) => m.TODO_ROUTES),
  },
  { path: '**', component: NF404Component },
];
