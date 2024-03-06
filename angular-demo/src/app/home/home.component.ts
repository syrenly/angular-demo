import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [FontAwesomeModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	faMap = faMap;
}
