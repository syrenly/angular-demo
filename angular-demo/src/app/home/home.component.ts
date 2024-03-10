import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [FontAwesomeModule],
	templateUrl: "./home.component.html",
})
export class HomeComponent {
	mapIcon = faMap;
}
