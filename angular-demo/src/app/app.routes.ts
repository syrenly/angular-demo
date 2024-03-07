import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SlideGalleryComponent } from "./slide-gallery/slide-gallery.component";

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
	{ path: "**", redirectTo: "/home", pathMatch: "full" },
];
