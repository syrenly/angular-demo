import { NgClass, NgTemplateOutlet, UpperCasePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IAlertInfo } from "../alert.types";

@Component({
	selector: "app-alert-class-tailwind",
	standalone: true,
	imports: [NgClass, NgTemplateOutlet, UpperCasePipe],
	templateUrl: "./alert-class-tailwind.component.html",
	styleUrl: "./alert-class-tailwind.component.scss",
})
export class AlertClassTailwindComponent {
	@Input() alert: IAlertInfo = {
		message: "default message",
		type: "primary",
		width: 100,
		backgroundColor: "blue",
		color: "white",
	};
}
