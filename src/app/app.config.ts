import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideStore } from "@ngrx/store";
import { routes } from "./app.routes";
import { counterReducer } from "./todo-list/todo-list.reducers";

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), provideStore({ count: counterReducer })],
};
