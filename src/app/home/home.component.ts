import { Component } from "@angular/core";
import { IconComponent } from "../icon/icon.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [IconComponent],
	templateUrl: "./home.component.html",
})
export class HomeComponent {}
