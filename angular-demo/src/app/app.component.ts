import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { IconComponent } from "./icon/icon.component";
@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, RouterLink, IconComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {}
