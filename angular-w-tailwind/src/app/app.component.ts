import { NgClass, NgTemplateOutlet, UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { AlertClassTailwindComponent } from "./alert-class-tailwind/alert-class-tailwind.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		NgClass,
		AlertClassTailwindComponent,
		UpperCasePipe,
		NgTemplateOutlet,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	alert: {
		message: string;
		type: "primary" | "success" | "danger" | "unknown";
		width: number;
		backgroundColor: string;
		color: string;
	} = {
		message: "default message",
		type: "primary",
		width: 100,
		backgroundColor: "blue",
		color: "white",
	};
}
