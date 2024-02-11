import { NgClass } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { AlertBase } from "../alert.base";
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
export class AlertApplyTailwindComponent extends AlertBase {
	/** Emits the request to return to the default alert */
	@Output() resetRequested = new EventEmitter<void>();
	/** Call resetRequested event emitter */
	returnToDefault(): void {
		this.resetRequested.emit();
	}
}
