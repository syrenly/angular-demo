import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { AlertBase } from "../alert.base";
/**
 * Component that show a different alert based on the @property alert in input.
 * To the alert are applied Tailwind classes that adapt the content based on the size of the screen (media queries)
 */
@Component({
	selector: "app-alert-media-queries-tailwind",
	standalone: true,
	imports: [NgClass],
	templateUrl: "./alert-media-queries-tailwind.component.html",
	styleUrl: "./alert-media-queries-tailwind.component.scss",
})
export class AlertMediaQueriesTailwindComponent extends AlertBase {}
