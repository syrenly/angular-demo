import { NgClass, NgTemplateOutlet, UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AlertApplyTailwindComponent } from "./alert/alert-apply-tailwind/alert-apply-tailwind.component";
import { AlertClassTailwindComponent } from "./alert/alert-class-tailwind/alert-class-tailwind.component";
import { AlertMediaQueriesTailwindComponent } from "./alert/alert-media-queries-tailwind/alert-media-queries-tailwind.component";
import { AlertType, IAlertInfo } from "./alert/alert.types";
import {
	DANGER_ALERT,
	DEFAULT_ALERT,
	PRIMARY_ALERT,
	SUCCESS_ALERT,
} from "./alert/alert.utils";
import { DaisyUIInputsComponent } from "./daisy-ui-inputs/daisy-ui-inputs.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		NgClass,
		UpperCasePipe,
		NgTemplateOutlet,
		AlertClassTailwindComponent,
		AlertApplyTailwindComponent,
		AlertMediaQueriesTailwindComponent,
		DaisyUIInputsComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	/** The alert to be shown in UI */
	alert: IAlertInfo = DEFAULT_ALERT;
	/**
	 * Change the alert style
	 * @param type the flavour of the alert, based on the priority/severity.
	 */
	onChangeAlertType(type: AlertType): void {
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
