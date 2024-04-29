import {  Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { canLeaveGuard } from "./guards/can-leave.guard";

export const TODO_ROUTES: Routes = [
  {
    path: '',
    component: TodoComponent,
    canDeactivate: [canLeaveGuard],
  },
];

