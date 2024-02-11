import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { AlertBase } from "../alert.base";
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
export class AlertClassTailwindComponent extends AlertBase {}
