import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IAlertInfo } from "../alert.types";
import { DEFAULT_ALERT } from "../alert.utils";
/**
 * Component that show a different alert based on the @property alert in input.
 * The different styles of the alert are applied using Tailwind classes
 */
@Component({
	selector: "app-alert-class-tailwind",
	standalone: true,
	imports: [NgClass],
	templateUrl: "./alert-class-tailwind.component.html",
	styleUrl: "./alert-class-tailwind.component.scss",
})
export class AlertClassTailwindComponent {
	/** The alert to be shown */
	@Input() alert: IAlertInfo = DEFAULT_ALERT;
}
