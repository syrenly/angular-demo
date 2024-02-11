import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SlideGalleryComponent } from "./slide-gallery/slide-gallery.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, SlideGalleryComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "angular-demo";
}
