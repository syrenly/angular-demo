import { NgClass, NgTemplateOutlet, UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { AlertClassTailwindComponent } from "./alert-class-tailwind/alert-class-tailwind.component";
import { IAlertInfo } from "./alert.types";
import {
	DANGER_ALERT,
	DEFAULT_ALERT,
	PRIMARY_ALERT,
	SUCCESS_ALERT,
} from "./alert.utils";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		NgClass,
		UpperCasePipe,
		NgTemplateOutlet,
		AlertClassTailwindComponent,
		AlertClassTailwindComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	/** The alert to be shown in UI */
	alert: IAlertInfo = DEFAULT_ALERT;
	/**
	 * Change the alert style
	 * @param type the flavour of the alert, based on the priority/severity.
	 */
	onChangeAlertType(type: "danger" | "success" | "primary"): void {
		let alert = null;
		switch (type) {
			case "primary": {
				alert = PRIMARY_ALERT;
				break;
			}
			case "success": {
				alert = SUCCESS_ALERT;
				break;
			}
			case "danger": {
				alert = DANGER_ALERT;
				break;
			}
			default: {
				alert = DEFAULT_ALERT;
				break;
			}
		}
		this.alert = alert;
	}
}
