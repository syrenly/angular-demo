import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, RouterLink, FontAwesomeModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	faRectangleList = faRectangleList;
}
