import {  Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { canLeaveGuard } from "./guards/can-leave.guard";
import { SignalTodoComponent } from "./signal-todo/signal-todo.component";

export const TODO_ROUTES: Routes = [
  {
    path: '',
    component: TodoComponent,
    canDeactivate: [canLeaveGuard],
  },
  {
    path: 'signal',
    component: SignalTodoComponent,
    canDeactivate: [canLeaveGuard],
  },
];

