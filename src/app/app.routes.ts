import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SlideGalleryComponent } from "./slide-gallery/slide-gallery.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

export const routes: Routes = [
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{
		path: "home",
		component: HomeComponent,
		pathMatch: "full",
	},
	{
		path: "slide-gallery",
		component: SlideGalleryComponent,
	},
	{
		path: "todo-list",
		component: TodoListComponent,
	},
	{
		path: "stepper",
		component: StepperComponent,
	},
	{ path: "**", redirectTo: "/home", pathMatch: "full" },
];
