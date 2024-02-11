import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IAlertInfo } from "../alert.types";
import { DEFAULT_ALERT } from "../alert.utils";
/**
 * Component that show a different alert based on the @property 'alert' in input.
 * The different styles of the alert are applied using the @function 'apply' to bulk together Tailwind classes
 */
@Component({
	selector: "app-alert-apply-tailwind",
	standalone: true,
	imports: [NgClass],
	templateUrl: "./alert-apply-tailwind.component.html",
	styleUrl: "./alert-apply-tailwind.component.scss",
})
export class AlertApplyTailwindComponent {
	/** The alert to be shown */
	@Input() alert: IAlertInfo = DEFAULT_ALERT;
	@Output() resetRequested = new EventEmitter<void>();

	returnToDefault(): void {
		this.resetRequested.emit();
	}
}
