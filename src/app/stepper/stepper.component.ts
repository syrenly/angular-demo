import { Component, signal } from "@angular/core";
import { Step } from "./stepper-types";

@Component({
	selector: "app-stepper",
	standalone: true,
	imports: [],
	templateUrl: "./stepper.component.html",
	styleUrl: "./stepper.component.scss",
})
export class StepperComponent {
	currentStep = signal<Step | null>(null);

	onChangeStep(step: Step | null): void {
		this.currentStep.set(step);
	}
}
